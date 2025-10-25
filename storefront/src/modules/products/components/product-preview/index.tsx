import { Text } from "@medusajs/ui"

import { getProductPrice } from "@lib/util/get-product-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import { getProductsById } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const [pricedProduct] = await getProductsById({
    ids: [product.id!],
    regionId: region.id,
  })

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
  })

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="block bg-bg-100 border border-border-200 rounded-large overflow-hidden shadow-sm group">
      <div data-testid="product-wrapper">
        <div className="relative aspect-[3/4] bg-bg-000">
  <Thumbnail
          thumbnail={product.thumbnail}
          images={product.images}
          size="full"
          isFeatured={isFeatured}
          className="object-cover border-b border-border-200"
        />
</div>
        
        <div className="flex txt-compact-medium mt-4 justify-between">
          <Text className="font-serif text-lg text-text-100" data-testid="product-title">
            {product.title}
          </Text>
          <div className="flex items-center gap-x-2 mt-2 text-sm">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
