import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const { products } = collection
  if (!products?.length) return null

  // Palette of complementary-ish theme colors for the circles (no images).
  // Rotates through your accent/success/danger families to keep contrast/nice variety.
  const circleVars = [
    "--accent-main-200",
    "--accent-secondary-100",
    "--accent-pro-100",
    "--success-100",
    "--danger-100",
  ] as const

  return (
    <div className="content-container py-12 small:py-24">
      {/* header */}
      <div className="flex justify-between items-center mb-8">
        <Text className="txt-xlarge text-text-100 capitalize">{collection.title}</Text>
        <InteractiveLink
          className="text-text-300 hover:text-accent-main-200"
          href={`/collections/${collection.handle}`}
        >
          View all
        </InteractiveLink>
      </div>

      {/* Horizontal rail (mirrors provided HTML structure) */}
      <div className="mb-7.5">
        <div className="overflow-x-auto">
          <div className="flex lg:justify-center gap-10 min-w-[900px] w-full">
            {products.map((product, i) => {
              const colorVar = circleVars[i % circleVars.length]
              const href = product?.handle ? `/products/${product.handle}` : `/products/${product.id}`

              return (
                <div
                  key={product.id}
                  className="text-center flex flex-col items-center"
                >
                  {/* circular color 'thumb' */}
                  <LocalizedClientLink
                    href={href}
                    className="block overflow-hidden rounded-full"
                  >
                    <div
                      className="lg:max-w-40 lg:max-h-40 max-w-25 max-h-25 rounded-full hover:scale-110 transition-all duration-500 border border-border-200"
                      // Use theme tokens for the circle color
                      style={{ backgroundColor: `hsl(var(${colorVar}))`, width: 140, height: 140 }}
                      aria-label={`${product.title} preview`}
                    />
                  </LocalizedClientLink>

                  {/* label + meta */}
                  <div className="mt-5">
                    <LocalizedClientLink
                      href={href}
                      className="text-text-200 lg:text-xl text-lg font-medium lg:leading-[150%] capitalize hover:text-accent-main-200 transition-all duration-500"
                    >
                      {product.title}
                    </LocalizedClientLink>

                    {/* You can swap this for price if you have a price component handy. */}
                    <span className="text-base text-text-400 block">
                      {(product.variants?.length ?? 0) > 0
                        ? `${product.variants!.length} variant${product.variants!.length > 1 ? "s" : ""}`
                        : "View product"}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Optional: keep a grid beneath the rail (comment out if you want rail-only) */}
 
      <ul className="grid grid-cols-2 small:grid-cols-3 gap-x-6 gap-y-24 small:gap-y-36 mt-8">
        {products.map((product) => (
          <li key={product.id}>
            <ProductPreview product={product as any} region={region} isFeatured />
          </li>
        ))}
      </ul>
     
    </div>
  )
}
