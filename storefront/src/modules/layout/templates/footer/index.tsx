import { getCategoriesList } from "@lib/data/categories"
import { getCollectionsList } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="border-t border-border-200 w-full bg-bg-000 text-text-200">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-20">
          <div>
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-text-100 hover:text-accent-main-200 uppercase tracking-[0.16em]"
            >
              Pace Print Co.
            </LocalizedClientLink>
            <p className="text-sm text-text-300 mt-2 max-w-sm">
              High‑grade prints for runners. Letterpress spirit. Modern craft.
            </p>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus text-text-100">Categories</span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-text-300 txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-accent-main-200 underline underline-offset-4 decoration-border-300",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-accent-main-200 underline underline-offset-4 decoration-border-300"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus text-text-100">Collections</span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-text-300 txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-accent-main-200 underline underline-offset-4 decoration-border-300"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus text-text-100">Studio</span>
              <ul className="grid grid-cols-1 gap-y-2 text-text-300 txt-small">
                <li>
                  <LocalizedClientLink
                    href="/customer-service"
                    className="hover:text-accent-main-200 underline underline-offset-4 decoration-border-300"
                  >
                    Customer Service
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/shipping-returns"
                    className="hover:text-accent-main-200 underline underline-offset-4 decoration-border-300"
                  >
                    Shipping &amp; Returns
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/framing-guide"
                    className="hover:text-accent-main-200 underline underline-offset-4 decoration-border-300"
                  >
                    Framing Guide
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-text-300">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Pace Print Co. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}
