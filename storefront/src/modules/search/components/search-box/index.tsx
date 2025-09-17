"use client"

import * as React from "react"
import { useSearchBox } from "react-instantsearch-hooks-web"

export default function SearchBox() {
  const { query, refine } = useSearchBox()

  return (
    <input
      autoFocus
      value={query}
      onChange={(e) => refine(e.target.value)}
      placeholder="Search prints, races, styles…"
      className="w-full bg-bg-000 border border-border-200 rounded-large px-3 py-2 text-text-100 placeholder:text-text-400 focus:outline-none focus:ring-2 focus:ring-accent-main-100"
    />
  )
}
