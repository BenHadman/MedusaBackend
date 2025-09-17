import Link from "next/link"
import Image from "next/image"
import Price from "../price"

export default function ProductPreview({ product, region }) {
  const href = `/products/${product.handle}`
  return (
    <Link
      href={href}
      className="block bg-bg-100 border border-border-200 rounded-large overflow-hidden shadow-sm group"
    >
      <div className="relative aspect-[3/4] bg-bg-000">
        {product.thumbnail && (
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-cover border-b border-border-200 transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>
      <div className="p-4">
        {product.collection?.title && (
          <div className="text-sm text-text-300">{product.collection.title}</div>
        )}
        <h3 className="font-serif text-lg text-text-100">{product.title}</h3>
        <div className="mt-2 text-sm">
          <Price product={product} region={region} />
        </div>
      </div>
    </Link>
  )
}
