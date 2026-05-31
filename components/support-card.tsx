"use client"

import { useMemo, useState } from "react"
import { Heart, Check } from "lucide-react"
import { cn } from "@/lib/utils"

const CASHTAG = "magickthemook"
const PRESETS = [5, 10, 25, 50]

export function SupportCard() {
  const [selected, setSelected] = useState<number | null>(10)
  const [custom, setCustom] = useState("")

  const amount = useMemo(() => {
    if (selected !== null) return selected
    const parsed = Number.parseFloat(custom)
    return Number.isFinite(parsed) && parsed > 0 ? Math.round(parsed * 100) / 100 : 0
  }, [selected, custom])

  function handleCustomChange(value: string) {
    // allow only numbers and a single decimal point
    const cleaned = value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1")
    setCustom(cleaned)
    setSelected(null)
  }

  function handleSend() {
    if (amount <= 0) return
    const url = `https://cash.app/$${CASHTAG}/${amount}?note=Support`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-2xl sm:p-8">
      <div className="flex flex-col items-center text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
          <Heart className="h-7 w-7" fill="currentColor" />
        </span>
        <h1 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Thank You</h1>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          Every single dollar goes straight to{" "}
          <span className="font-semibold text-foreground">${CASHTAG}</span>
        </p>
      </div>

      <div className="mt-8">
        <p className="mb-3 text-sm font-medium text-muted-foreground">Choose an amount</p>
        <div className="grid grid-cols-2 gap-3">
          {PRESETS.map((value) => {
            const active = selected === value
            return (
              <button
                key={value}
                type="button"
                onClick={() => {
                  setSelected(value)
                  setCustom("")
                }}
                aria-pressed={active}
                className={cn(
                  "relative flex items-center justify-center rounded-2xl border py-4 text-lg font-semibold transition-colors",
                  active
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border bg-secondary text-foreground hover:border-primary/50",
                )}
              >
                {active && (
                  <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                )}
                ${value}
              </button>
            )
          })}
        </div>

        <div className="mt-3">
          <label htmlFor="custom-amount" className="sr-only">
            Custom amount
          </label>
          <div
            className={cn(
              "flex items-center gap-1 rounded-2xl border bg-secondary px-4 transition-colors",
              selected === null && custom ? "border-primary" : "border-border",
            )}
          >
            <span className="text-lg font-semibold text-muted-foreground">$</span>
            <input
              id="custom-amount"
              inputMode="decimal"
              placeholder="Custom amount"
              value={custom}
              onChange={(e) => handleCustomChange(e.target.value)}
              className="w-full bg-transparent py-4 text-lg font-semibold text-foreground placeholder:font-normal placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={handleSend}
        disabled={amount <= 0}
        className="mt-6 w-full rounded-full bg-primary py-5 text-lg font-bold text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {amount > 0 ? `Send $${amount} now` : "Enter an amount"}
      </button>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        I personally reply to every supporter
      </p>
    </div>
  )
}
