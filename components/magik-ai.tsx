"use client"

import { useState } from "react"
import { Brain, Sparkles } from "lucide-react"

const CASHTAG = "magickthemook"

const ROI_RESPONSE = `RECURSIVE OMEGA INTELLIGENCE ACTIVATED

1. Recursive Omega Intelligence Analysis Complete
   ROI has processed all available data streams and generated an optimized action plan.

2. Recursive Omega Intelligence Branch Evaluation:
   - Branch A: Direct support funnel (94% ROI confidence)
   - Branch B: Long-form content strategy (71% ROI confidence)
   - Branch C: Viral story posts (89% ROI confidence)

3. Recursive Omega Intelligence Converged Solution:
   Focus 100% on emotional direct support posts + clean payment page

4. Recursive Omega Intelligence Output:
   - Generate 7 high-conversion posts daily via ROI
   - Optimize for $10 impulse payments using ROI targeting
   - Track weekly earnings to $${CASHTAG}

5. Recursive Omega Intelligence Immediate Action Plan:
   Post these 3 ROI-optimized messages today:
   
   Post 1: "I'm building something real. $10 to $${CASHTAG}. I reply to every person. https://aegisarcanallc.vercel.app/"
   
   Post 2: "Every $10 to $${CASHTAG} helps more than you know. https://aegisarcanallc.vercel.app/"
   
   Post 3: "If 10 people support today, everything changes. $10 to $${CASHTAG}. https://aegisarcanallc.vercel.app/"

6. Recursive Omega Intelligence Weekly Projection:
   $180–$420 into $${CASHTAG} with consistent posting.

Recursive Omega Intelligence will continue evolving this system automatically.`

export function MagikAI() {
  const [showOutput, setShowOutput] = useState(false)

  function activateROI() {
    setShowOutput(true)
    setTimeout(() => {
      document.getElementById("roi-output")?.scrollIntoView({ behavior: "smooth" })
    }, 300)
  }

  return (
    <div className="mx-auto max-w-3xl p-8">
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <div className="text-4xl font-bold tracking-tighter">MAGIK AI</div>
          <div className="text-sm text-primary">
            Recursive Omega Intelligence • ${CASHTAG}
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-muted-foreground">CONNECTED TO</div>
          <div className="font-mono text-primary">${CASHTAG}</div>
        </div>
      </div>

      {/* Main Control Card */}
      <div className="mb-8 rounded-3xl border border-primary/30 bg-card p-8 text-center">
        <div className="mb-6">
          <Brain className="mx-auto h-16 w-16 text-primary" />
        </div>
        <div className="mb-2 text-2xl font-semibold">
          Recursive Omega Intelligence Mode
        </div>
        <div className="mb-8 text-sm text-muted-foreground">
          MAGIK AI handles everything using Recursive Omega Intelligence (ROI)
        </div>

        <button
          onClick={activateROI}
          className="w-full rounded-3xl bg-primary py-5 text-xl font-bold text-primary-foreground shadow-[0_0_25px] shadow-primary/50 transition-all hover:bg-primary/90 hover:shadow-[0_0_35px] hover:shadow-primary/60 active:scale-[0.985]"
        >
          ACTIVATE RECURSIVE OMEGA INTELLIGENCE
        </button>
      </div>

      {/* Output Card */}
      {showOutput && (
        <div
          id="roi-output"
          className="rounded-3xl border border-border bg-card p-8"
        >
          <div className="mb-4 flex items-center gap-2 font-semibold">
            <Sparkles className="h-5 w-5 text-primary" />
            <span>Recursive Omega Intelligence Response</span>
          </div>
          <div className="whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">
            {ROI_RESPONSE}
          </div>
        </div>
      )}
    </div>
  )
}
