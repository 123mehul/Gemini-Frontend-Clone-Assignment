import React, { useState, useRef } from 'react';
import { Send, Image, X } from 'lucide-react';
import { useChatStore } from '../store/chatStore';

export const ChatInput: React.FC = () => {
  const [message, setMessage] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { addMessage, addAIResponse } = useChatStore();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim() && !selectedImage) return;
    
    // Add user message
    addMessage({
      content: message.trim(),
      sender: 'user',
      image: selectedImage || undefined,
    });
    
    // Generate AI response
    addAIResponse(message.trim());
    
    // Reset form
    setMessage('');
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="border-t border-gray-200 bg-white p-4">
      {selectedImage && (
        <div className="mb-4 relative inline-block">
          <img 
            src={selectedImage} 
            alt="Preview" 
            className="w-20 h-20 object-cover rounded-lg"
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="flex items-end space-x-2">
        <div className="flex-1">
          <div className="flex items-center space-x-2 bg-gray-100 rounded-2xl px-4 py-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask Gemini..."
              className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500"
              maxLength={500}
            />
            
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <Image className="w-5 h-5" />
            </button>
            
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
        </div>
        
        <button
          type="submit"
          disabled={!message.trim() && !selectedImage}
          className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};