import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  image?: string;
  isTyping?: boolean;
}

interface ChatState {
  messages: Message[];
  isLoading: boolean;
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  addAIResponse: (userMessage: string) => void;
  clearMessages: () => void;
}

const AI_RESPONSES = [
  "I'm here to help! What would you like to know?",
  "That's an interesting question. Let me think about that...",
  "I can help you with various tasks. What specifically are you looking for?",
  "Based on what you've shared, here are some thoughts...",
  "I understand what you're asking. Let me provide some insights.",
  "That's a great question! Here's what I can tell you...",
  "I'm designed to assist with a wide range of topics. How can I help?",
  "Thank you for sharing that. Let me provide a helpful response.",
];

export const useChatStore = create<ChatState>()(
  persist(
    (set, get) => ({
      messages: [],
      isLoading: false,
      addMessage: (message) => {
        const newMessage: Message = {
          ...message,
          id: Math.random().toString(36).substr(2, 9),
          timestamp: new Date(),
        };
        
        set((state) => ({
          messages: [...state.messages, newMessage]
        }));
      },
      addAIResponse: (userMessage) => {
        set({ isLoading: true });
        
        // Add typing indicator
        const typingMessage: Message = {
          id: 'typing',
          content: '',
          sender: 'ai',
          timestamp: new Date(),
          isTyping: true
        };
        
        set((state) => ({
          messages: [...state.messages, typingMessage]
        }));
        
        // Simulate AI response delay
        setTimeout(() => {
          const responses = AI_RESPONSES;
          const randomResponse = responses[Math.floor(Math.random() * responses.length)];
          
          set((state) => ({
            messages: state.messages.filter(m => m.id !== 'typing').concat({
              id: Math.random().toString(36).substr(2, 9),
              content: randomResponse,
              sender: 'ai',
              timestamp: new Date(),
            }),
            isLoading: false
          }));
        }, 1500 + Math.random() * 1000);
      },
      clearMessages: () => set({ messages: [] }),
    }),
    {
      name: 'chat-storage',
    }
  )
);