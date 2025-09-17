import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type HitProps = {
  hit: {
    id?: string
    handle?: string
    title?: string
    thumbnail?: string
    collection?: { title?: string }
  }
}

export default function Hit({ hit }: HitProps) {
  const href = hit?.handle ? `/products/${hit.handle}` : "#"
  return (
    <LocalizedClientLink
      href={href}
      className="flex items-center gap-3 p-2 rounded-large hover:bg-bg-100 border border-transparent hover:border-border-200"
    >
      {hit?.thumbnail && (
        <Image
          src={hit.thumbnail}
          width={64}
          height={80}
          alt={hit?.title || "Product"}
          className="rounded-base object-cover border border-border-200"
        />
      )}
      <div className="min-w-0">
        {hit?.collection?.title && (
          <div className="text-xs text-text-400">{hit.collection.title}</div>
        )}
        <div className="truncate font-serif text-text-100">{hit?.title}</div>
      </div>
    </LocalizedClientLink>
  )
}
