import { Heading } from "@medusajs/ui"

import ItemsPreviewTemplate from "@modules/cart/templates/preview"
import DiscountCode from "@modules/checkout/components/discount-code"
import CartTotals from "@modules/common/components/cart-totals"
import Divider from "@modules/common/components/divider"

const CheckoutSummary = ({ cart }: { cart: any }) => {
  return (
    <div className="sticky top-0 flex flex-col-reverse small:flex-col gap-y-8 py-8 small:py-0">
      <div className="w-full bg-bg-100 border border-border-200 rounded-large p-6">
        <Divider className="my-6 small:hidden border-border-200" />
        <Heading
          level="h2"
          className="flex flex-row font-serif text-3xl text-text-100 items-baseline"
        >
          In your Cart
        </Heading>
        <Divider className="my-6 border-border-200" />
        <CartTotals totals={cart} />
        <ItemsPreviewTemplate items={cart?.items} />
        <div className="my-6">
          <DiscountCode cart={cart} />
        </div>
      </div>
    </div>
  )
}

export default CheckoutSummary
