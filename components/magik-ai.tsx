"use client"

import { useState } from "react"
import { Bot, Sparkles } from "lucide-react"

const CASHTAG = "magickthemook"
const AMOUNTS = [10, 25, 50]

export function MagikAI() {
  const [showOutput, setShowOutput] = useState(false)

  function pay(amount: number) {
    const note = `Support $${amount}`
    const url = `https://cash.app/$${CASHTAG}/${amount}?note=${encodeURIComponent(note)}`
    window.open(url, "_blank")
  }

  function generateContent() {
    setShowOutput(true)
    setTimeout(() => {
      document.getElementById("content-output")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <div className="bg-zinc-950 text-white">
      <div className="mx-auto max-w-4xl p-8">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-5xl font-bold tracking-tighter">MAGIK AI</div>
            <div className="text-emerald-400">Recursive Omega Intelligence • ${CASHTAG}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-zinc-500">AUTONOMOUS MODE</div>
            <div className="text-emerald-400 font-mono">ACTIVE</div>
          </div>
        </div>

        <div className="mb-8 rounded-3xl border border-emerald-500/30 bg-zinc-900 p-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold">Direct Support</h2>
            <p className="text-zinc-400">Every dollar goes straight to ${CASHTAG}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {AMOUNTS.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => pay(amount)}
                className="rounded-2xl border border-zinc-700 bg-zinc-800 p-6 text-center transition-all hover:border-emerald-500 hover:bg-emerald-500/10"
              >
                <div className="text-4xl font-bold">${amount}</div>
                <div className="text-sm text-zinc-400">
                  {amount === 10 ? "Support" : amount === 25 ? "Big Support" : "VIP Support"}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-emerald-500/30 bg-zinc-900 p-8">
          <div className="mb-6 flex items-center gap-x-3">
            <Bot className="h-10 w-10 text-emerald-400" />
            <div>
              <div className="text-2xl font-bold">Magik AI Content Engine</div>
              <div className="text-xs text-emerald-400">YouTube + TikTok • Recursive Omega Intelligence</div>
            </div>
          </div>

          <button
            type="button"
            onClick={generateContent}
            className="mb-6 flex w-full items-center justify-center gap-x-3 rounded-3xl bg-emerald-500 px-6 py-4 text-lg font-bold text-black transition-all hover:bg-emerald-600 active:scale-[0.985]"
          >
            <Sparkles className="h-5 w-5" />
            <span>GENERATE YOUTUBE + TIKTOK CONTENT</span>
          </button>

          <div
            id="content-output"
            className={`${showOutput ? "block" : "hidden"} mt-6 rounded-2xl bg-zinc-800 p-6 text-sm`}
          >
            <div className="mb-4 text-emerald-400 font-semibold">RECURSIVE OMEGA INTELLIGENCE OUTPUT</div>

            <div className="space-y-6">
              <div>
                <div className="font-semibold text-emerald-400">VIDEO IDEA (94% Viral Potential)</div>
                <div>"I Made $100/Day Using Only My Phone for 30 Days (Real Results)"</div>
              </div>

              <div>
                <div className="font-semibold text-emerald-400">CALL TO ACTION (End of every video)</div>
                <div className="mt-2 rounded-xl bg-zinc-900 p-4">
                  "If this helped you, support the channel at ${CASHTAG}. Every $10 helps me keep creating."
                </div>
              </div>

              <div>
                <div className="font-semibold text-emerald-400">AUTONOMOUS POSTING SCHEDULE</div>
                <div className="text-sm">
                  • TikTok: 3 videos/day
                  <br />
                  • YouTube Shorts: 2 videos/day
                  <br />
                  • Long YouTube: 2 videos/week
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
