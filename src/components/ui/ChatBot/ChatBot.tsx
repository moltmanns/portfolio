'use client'

import { useState, useEffect, useRef } from 'react'
import { botResponses } from './botResponses'
import Image from 'next/image'

export default function ChatBot({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Well, hello there..." }
  ])
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement | null>(null)

  const handleSend = () => {
    if (!input.trim()) return
    const userMessage = input.trim()
    setMessages(prev => [...prev, { from: 'user', text: userMessage }])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      if (userMessage.toLowerCase() === '/help') {
        const helpText = generateHelpText()
        typeMessage(helpText)
      } else {
        const response = getBotResponse(userMessage)
        typeMessage(response)
      }
    }, 500)
  }

  const getBotResponse = (msg: string): string => {
    const msgLower = msg.toLowerCase()
    for (const entry of botResponses) {
      if (entry.keywords.some(k => msgLower.includes(k))) {
        const possible = entry.response
        return Array.isArray(possible)
          ? possible[Math.floor(Math.random() * possible.length)]
          : possible
      }
    }
    const fallback = botResponses.find(r => r.keywords.includes('default'))?.response
    return Array.isArray(fallback)
      ? fallback[Math.floor(Math.random() * fallback.length)]
      : fallback || "🤖 Beep boop?"
  }

  const generateHelpText = (): string => {
    let allKeywords = botResponses
      .filter(r => r.keywords[0] !== 'default')
      .flatMap(r => r.keywords)

    allKeywords = [...new Set(allKeywords)] // Deduplicate

    const groups = allKeywords.reduce((acc: Record<string, string[]>, keyword) => {
      const category = categorizeKeyword(keyword)
      if (!acc[category]) acc[category] = []
      acc[category].push(keyword)
      return acc
    }, {})

    let output = "<b>🧠 Here's what you can ask me about:</b><br /><br />"
    Object.entries(groups).forEach(([group, keys]) => {
      output += `<u>${group}:</u><br />• ${keys.join(', ')}<br /><br />`
    })
    output += "Type a keyword, or use <code>/help</code> anytime!"

    return output
  }

  const categorizeKeyword = (keyword: string) => {
    if (['name', 'who are you'].includes(keyword)) return 'About Me'
    if (['skills', 'tech', 'stack'].includes(keyword)) return 'Skills'
    if (['hobbies', 'fun'].includes(keyword)) return 'Fun Stuff'
    if (['contact', 'email'].includes(keyword)) return 'Getting in Touch'
    if (['experience', 'background'].includes(keyword)) return 'Career'
    return 'Other'
  }

  const typeMessage = (text: string) => {
    let i = 0
    let finalText = ''
    setTyping(true)

    const typeInterval = setInterval(() => {
      finalText += text[i]
      i++

      setMessages(prev => [
        ...prev.slice(0, -1),
        { from: 'bot', text: finalText }
      ])

      if (i >= text.length) {
        clearInterval(typeInterval)
        setTyping(false)
      }
    }, 25)

    // Add blank message to type into
    setMessages(prev => [...prev, { from: 'bot', text: '' }])
  }

  useEffect(() => {
    if (isOpen && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed bottom-[80px] right-4 z-50 w-[350px] max-h-[90vh] bg-[#0a0a0a] text-[#baffc9] border border-[#3affca] rounded-2xl shadow-xl overflow-hidden font-mono animate-in fade-in">
      {/* Header */}
      <div className="relative z-10 flex items-center gap-3 px-4 py-3 border-b border-[#3affca]/20 bg-[#0f0f0f]">
        <Image
          src="/assets/dwight-the-office.jpg"
          alt="Matt Avatar"
          width={32}
          height={32}
          className="rounded-full border border-[#3affca]"
        />
        <div className="text-sm font-bold text-[#3affca]">MattyFresh5000</div>
        <div className="ml-auto">
          <button
            onClick={onClose}
            className="text-xs border border-[#3affca] px-2 py-1 rounded-full hover:bg-[#3affca] hover:text-black transition cursor-pointer"
          >
            EXIT
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="relative z-10 flex flex-col gap-3 px-4 py-4 overflow-y-auto max-h-[320px] custom-scrollbar">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`text-sm px-3 py-2 rounded-md max-w-[90%] ${
              msg.from === 'bot'
                ? 'bg-[#112b1e]/60 text-left'
                : 'bg-[#16513B]/50 text-right self-end'
            }`}
            dangerouslySetInnerHTML={{ __html: msg.text }}
          />
        ))}
        {typing && (
          <div className="text-xs text-[#3affca] animate-pulse px-2">Matt2.0 is typing...</div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="relative z-10 border-t border-[#3affca]/20 px-4 py-4 flex items-center gap-2 bg-[#0f0f0f]">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="Ask something..."
          className="flex-1 px-2 py-2 rounded bg-black border border-[#3affca]/20 text-[#78ffd6] placeholder:text-[#4cd3b3] text-xs outline-none"
        />
        <button
          onClick={handleSend}
          className="text-[#3affca] hover:text-black border border-[#3affca]/20 px-2 py-2 rounded text-xs hover:bg-[#3affca] transition"
        >
          ➤
        </button>
      </div>
    </div>
  )
}
