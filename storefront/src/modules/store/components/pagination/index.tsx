"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { clx } from "@medusajs/ui"

type Props = {
  page: number
  totalPages: number
  className?: string
  "data-testid"?: string
}

export function Pagination({ page, totalPages, className, ...rest }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const setPage = (n: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", String(n))
    router.push(`${pathname}?${params.toString()}`)
  }

  if (totalPages <= 1) return null

  const MAX = 7
  const pages: (number | "...")[] = []
  const add = (n: number) => pages.push(n)

  if (totalPages <= MAX) {
    for (let i = 1; i <= totalPages; i++) add(i)
  } else {
    const show = new Set([1, 2, totalPages - 1, totalPages, page, page - 1, page + 1])
    const sorted = [...show].filter((n) => n >= 1 && n <= totalPages).sort((a, b) => a - b)
    for (let i = 0; i < sorted.length; i++) {
      const cur = sorted[i]
      const prev = sorted[i - 1]
      if (prev && cur - prev > 1) pages.push("...")
      pages.push(cur)
    }
  }

  return (
    <nav
      className={clx("mt-10 flex items-center justify-center gap-2 text-sm", className)}
      {...rest}
    >
      <button
        onClick={() => setPage(Math.max(1, page - 1))}
        disabled={page === 1}
        className="px-3 py-2 rounded-large border border-border-200 disabled:opacity-40 hover:border-accent-main-200"
        aria-label="Previous page"
      >
        Prev
      </button>

      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`gap-${i}`} className="px-2 text-text-400">…</span>
        ) : (
          <button
            key={p}
            onClick={() => setPage(p as number)}
            aria-current={p === page ? "page" : undefined}
            className={clx(
              "min-w-[2.25rem] h-9 px-3 rounded-large border",
              p === page
                ? "border-accent-main-200 bg-accent-main-200 text-oncolor-100"
                : "border-border-200 hover:border-accent-main-200"
            )}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => setPage(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="px-3 py-2 rounded-large border border-border-200 disabled:opacity-40 hover:border-accent-main-200"
        aria-label="Next page"
      >
        Next
      </button>
    </nav>
  )
}

export default Pagination
