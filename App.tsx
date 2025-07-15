import React from 'react';
import { LoginForm } from './components/LoginForm';
import { Header } from './components/Header';
import { ChatWindow } from './components/ChatWindow';
import { useAuthStore } from './store/authStore';

function App() {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex-1 flex overflow-hidden">
        <main className="flex-1 flex flex-col bg-white">
          <ChatWindow />
        </main>
      </div>
    </div>
  );
}

export default App;