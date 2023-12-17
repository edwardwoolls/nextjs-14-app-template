import * as React from "react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="mx-auto flex w-10/12 flex-col items-center">
      {/* Hero */}
      <div className="max-w-3xl py-40 text-center">
        <h1 className="font-sans text-4xl font-bold">
          <span className="from-primary to-secondary inline-block bg-gradient-to-r bg-clip-text text-transparent">
            Next.js 14
          </span>{" "}
          Starter Template
        </h1>
        <p className="py-4 font-mono">
          Check out our snazzy Next.js 14 Starter Template. Simple coding, big
          results. Ready to get started?
        </p>
        <div className="mx-auto flex items-center justify-center gap-4">
          <Button className="text-foreground">Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
      {/* Blog */}
      <div />
    </main>
  )
}
