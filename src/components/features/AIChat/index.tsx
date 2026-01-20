
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageSquare } from 'lucide-react';
import { getGeminiResponse } from '@/services/geminiService';
import { ChatMessage } from '@/types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'How can I assist you with Alex\'s professional background?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: String(m.text) }]
      }));

      const response = await getGeminiResponse(userMsg, history);
      setMessages(prev => [...prev, { role: 'model', text: String(response) }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Encountered a system error. Please retry.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white text-black w-12 h-12 rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform active:scale-95"
        >
          <MessageSquare size={20} />
        </button>
      ) : (
        <div className="bg-black border border-white/10 w-[340px] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="px-4 py-3 border-b border-white/5 flex justify-between items-center bg-neutral-900/40">
            <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">AI Assistant</span>
            <button onClick={() => setIsOpen(false)} className="text-neutral-500 hover:text-white transition-colors">
              <X size={16} />
            </button>
          </div>
          
          <div ref={scrollRef} className="h-80 overflow-y-auto p-5 space-y-5">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-3 py-2 text-xs leading-relaxed max-w-[90%] ${
                  m.role === 'user' 
                    ? 'bg-white text-black rounded-xl rounded-tr-none' 
                    : 'bg-neutral-900 text-neutral-300 rounded-xl rounded-tl-none border border-white/5'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-neutral-900 border border-white/5 p-2 px-3 rounded-xl rounded-tl-none">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-neutral-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-1 h-1 bg-neutral-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-1 h-1 bg-neutral-600 rounded-full animate-bounce"></div>
                    </div>
                 </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-neutral-900/20 border-t border-white/5 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything..."
              className="flex-1 bg-black border border-white/10 text-white text-[11px] rounded-lg px-3 py-2 focus:outline-none focus:border-white/30 transition-colors placeholder:text-neutral-700"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="bg-white text-black p-2 rounded-lg hover:bg-neutral-200 transition-colors shrink-0 disabled:opacity-50"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChat;
