"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  linkText?: string;
  linkUrl?: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hello! Welcome to Kreo. I am your virtual assistant. How can I help you today?",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentOptions, setCurrentOptions] = useState<string[]>([
    "Our Services",
    "Start a Project",
    "Contact Details",
    "Office Location",
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  const addBotResponse = (text: string, options: string[], linkText?: string, linkUrl?: string) => {
    setIsTyping(true);
    // Simulate typing delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: "bot",
          text,
          linkText,
          linkUrl,
        },
      ]);
      setCurrentOptions(options);
      setIsTyping(false);
    }, 1000);
  };

  const handleOptionClick = (option: string) => {
    // Add user response
    setMessages((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        sender: "user",
        text: option,
      },
    ]);

    // Handle bot routing
    if (option === "Our Services" || option === "Go Back") {
      addBotResponse(
        "We specialize in Custom Business Websites, Administrative System Dashboards, AI & Machine Learning, social campaigns, IoT, and custom academic internships. Which category fits your search?",
        ["Web Development", "AI/ML Solutions", "Academic Projects", "Main Menu"]
      );
    } else if (option === "Start a Project") {
      addBotResponse(
        "Fantastic! You can initiate a project by completing our intake requirements form. Would you like to load the form or contact our managers directly?",
        ["Intake Form", "Direct Contacts", "Main Menu"]
      );
    } else if (option === "Contact Details" || option === "Direct Contacts") {
      addBotResponse(
        "You can reach our offices at:\n📞 +91 81236 85041\n✉️ kreo.pvt.ltd@gmail.com\nWould you like to book a direct consultation?",
        ["Book Consultation", "Main Menu"]
      );
    } else if (option === "Office Location") {
      addBotResponse(
        "We are located at:\n📍 R N Shetty Stadium Complex, 1st Floor, Dharwad - 580001 (Karnataka, India).\nFeel free to drop by for a consult!",
        ["Main Menu"]
      );
    } else if (option === "Main Menu") {
      addBotResponse(
        "Let's start over. What details are you looking for today?",
        ["Our Services", "Start a Project", "Contact Details", "Office Location"]
      );
    } else if (option === "Web Development") {
      addBotResponse(
        "We design and build fast business landing pages, e-commerce stores, and admin systems utilizing React, Next.js, and TypeScript. Ready to build one?",
        ["Start a Project", "Main Menu"]
      );
    } else if (option === "AI/ML Solutions") {
      addBotResponse(
        "We integrate Large Language Models (LLMs) and develop predictive data systems to automate complex corporate workflows. Interested in a custom AI integration?",
        ["Start a Project", "Main Menu"]
      );
    } else if (option === "Academic Projects") {
      addBotResponse(
        "We offer professional guidance, structural architecture design, and direct project mentorship for CS engineering students. Ready to sign up?",
        ["Start a Project", "Main Menu"]
      );
    } else if (option === "Intake Form") {
      addBotResponse(
        "Excellent. Here is the link to our project intake portal:",
        ["Main Menu"],
        "Open Intake Form ↗",
        "https://docs.google.com/forms/d/e/1FAIpQLSeqSIyE2cCTSjNK8b7_HFdrt096DWIZQNxBU282n9bAYvjlog/viewform?usp=header"
      );
    } else if (option === "Book Consultation") {
      addBotResponse(
        "Wonderful choice. Schedule your meeting slot directly here:",
        ["Main Menu"],
        "Schedule Consultation ↗",
        "https://docs.google.com/forms/d/e/1FAIpQLSfqlB98dAnGISbReIGRJjDMlCRktA2zE2V3Dr6T6XBTvZUoRg/viewform?usp=header"
      );
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const query = inputText.trim();
    setInputText("");

    // Add user message
    const userMessage: Message = {
      id: Math.random().toString(),
      sender: "user",
      text: query,
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsTyping(true);

    try {
      // Format messages history into role/content scheme expected by LLM APIs
      const history = updatedMessages.map((msg) => ({
        role: msg.sender === "bot" ? "assistant" : "user",
        content: msg.text,
      }));

      // Call our Next.js API route
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      const data = await res.json();
      setIsTyping(false);

      if (res.ok && data.reply) {
        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            sender: "bot",
            text: data.reply,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            sender: "bot",
            text: "My backend service is not configured. Please add the GROQ_API_KEY to your environment settings, or call us directly at +91 81236 85041.",
          },
        ]);
      }
    } catch (err) {
      console.error("Failed to query chatbot LLM:", err);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: "bot",
          text: "I am having trouble connecting to the AI helper right now. Please check your network.",
        },
      ]);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary hover:bg-primary-hover text-white rounded-full flex items-center justify-center shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 animate-float"
      >
        <span className="material-symbols-outlined text-[28px] transition-transform duration-300">
          {isOpen ? "close" : "forum"}
        </span>
      </button>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[calc(100vw-2rem)] sm:w-[360px] h-[500px] max-h-[80vh] bg-white border border-orange-100/50 shadow-2xl rounded-2xl flex flex-col overflow-hidden transition-all duration-300 slide-in-left">
          {/* Header */}
          <div className="bg-primary px-4 py-3 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg bg-white/20 overflow-hidden flex items-center justify-center border border-white/20">
                <Image src="/logo.jpeg" alt="Kreo Assistant Logo" fill className="object-contain" sizes="32px" />
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-wide">Kreo Assistant</h4>
                <p className="text-[9px] text-orange-200 uppercase tracking-widest font-medium">Online • Response Agent</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Minimize Chat"
              className="text-white hover:text-orange-200 bg-transparent border-0 cursor-pointer flex items-center"
            >
              <span className="material-symbols-outlined text-xl">remove</span>
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50 flex flex-col scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`max-w-[80%] flex flex-col gap-1 ${
                  msg.sender === "user" ? "self-end items-end" : "self-start items-start"
                }`}
              >
                <div
                  className={`p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                    msg.sender === "user"
                      ? "bg-primary text-white rounded-tr-none shadow-md shadow-primary/10"
                      : "bg-white text-gray-800 border border-gray-200/60 rounded-tl-none shadow-sm"
                  }`}
                >
                  {msg.text}

                  {/* Attachment/Link support */}
                  {msg.linkUrl && (
                    <a
                      href={msg.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 block bg-primary/10 hover:bg-primary/15 text-primary text-xs font-bold text-center py-2 px-3 rounded-lg border border-primary/20 transition-colors"
                    >
                      {msg.linkText || "Open Link"}
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Loader animation */}
            {isTyping && (
              <div className="self-start flex flex-col items-start gap-1 max-w-[80%]">
                <div className="flex gap-1.5 items-center p-3.5 bg-white border border-gray-200/60 rounded-2xl rounded-tl-none w-16 justify-center shadow-sm">
                  <div className="w-1.5 h-1.5 bg-primary/70 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-primary/70 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-primary/70 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies Options */}
          {!isTyping && currentOptions.length > 0 && (
            <div className="px-4 py-2 bg-gray-50/50 border-t border-gray-100 flex flex-wrap gap-2">
              {currentOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleOptionClick(opt)}
                  className="bg-white hover:bg-orange-50 border border-gray-200 text-gray-700 hover:border-primary/30 text-xs py-1.5 px-3 rounded-full transition-all cursor-pointer font-medium shadow-sm hover:text-primary"
                >
                  {opt}
                </button>
              ))}
            </div>
          )}

          {/* Message Input Box */}
          <form
            onSubmit={handleSendMessage}
            className="border-t border-gray-100 px-3 py-2 flex items-center bg-white gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask anything..."
              className="flex-grow bg-gray-50 border border-gray-200 hover:border-gray-300 focus:border-primary/50 focus:bg-white rounded-xl px-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition-all"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className={`w-9 h-9 shrink-0 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                inputText.trim()
                  ? "bg-primary hover:bg-primary-hover text-white shadow-md shadow-primary/10"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
              aria-label="Send message"
            >
              <span className="material-symbols-outlined text-[20px] font-bold">send</span>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
