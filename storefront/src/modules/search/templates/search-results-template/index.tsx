import { Heading, Text } from "@medusajs/ui"
import Link from "next/link"

import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type SearchResultsTemplateProps = {
  query: string
  ids: string[]
  sortBy?: SortOptions
  page?: string
  countryCode: string
}

const SearchResultsTemplate = ({
  query,
  ids,
  sortBy,
  page,
  countryCode,
}: SearchResultsTemplateProps) => {
  const pageNumber = page ? parseInt(page) : 1

  return (
    <>
      <div className="flex justify-between border-b border-border-200 w-full py-6 px-8 small:px-14 items-center bg-bg-100">
        <div className="flex flex-col items-start">
          <Text className="text-text-300">Search Results for:</Text>
          <Heading className="font-serif text-text-100">
            {decodeURI(query)} ({ids.length})
          </Heading>
        </div>
        <LocalizedClientLink
          href="/store"
          className="txt-medium text-text-300 hover:text-accent-main-200 underline underline-offset-4 decoration-border-300"
        >
          Clear
        </LocalizedClientLink>
      </div>
      <div className="flex flex-col small:flex-row small:items-start p-6">
        {ids.length > 0 ? (
          <>
            <RefinementList sortBy={sortBy || "created_at"} search />
            <div className="content-container">
              <PaginatedProducts
                productsIds={ids}
                sortBy={sortBy}
                page={pageNumber}
                countryCode={countryCode}
              />
            </div>
          </>
        ) : (
          <Text className="ml-8 small:ml-14 mt-3 text-text-300">No results.</Text>
        )}
      </div>
    </>
  )
}

export default SearchResultsTemplate
