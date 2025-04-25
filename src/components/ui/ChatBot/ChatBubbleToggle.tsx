'use client'

import { useState } from 'react'
import { MessageSquare } from 'lucide-react'
import ChatBot from './ChatBot'

export default function ChatBubbleToggle() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Chat Toggle */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-[#3affca] hover:bg-[#ffaedd] text-black p-3 rounded-full shadow-lg border border-[#33028f] cursor-pointer"
        aria-label="Open ChatBot"
      >
        <MessageSquare className="w-5 h-5" />
      </button>

      {/* ChatBot */}
      <ChatBot isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
