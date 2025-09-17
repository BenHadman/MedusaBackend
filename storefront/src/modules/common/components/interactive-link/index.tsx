import * as React from "react"
import { clx } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  underline?: "soft" | "none"
  className?: string
  children: React.ReactNode
}

/** Default export used as InteractiveLink/UnderlineLink */
export default function UnderlineLink({
  href,
  underline = "soft",
  className,
  children,
  ...rest
}: Props) {
  const base =
    "transition-colors underline underline-offset-4 decoration-border-300 hover:text-accent-main-200 hover:decoration-accent-main-200"
  const noUnderline = "hover:text-accent-main-200"

  const classes = clx(
    "text-current",
    underline === "soft" ? base : noUnderline,
    className
  )

  const isInternal = href?.startsWith("/")
  if (isInternal) {
    return (
      <LocalizedClientLink href={href} className={classes} {...rest}>
        {children}
      </LocalizedClientLink>
    )
  }

  return (
    <a href={href} className={classes} target="_blank" rel="noreferrer" {...rest}>
      {children}
    </a>
  )
}
