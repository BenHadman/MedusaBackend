import React from "react"

import UnderlineLink from "@modules/common/components/interactive-link"

import AccountNav from "../components/account-nav"
import { HttpTypes } from "@medusajs/types"

interface AccountLayoutProps {
  customer: HttpTypes.StoreCustomer | null
  children: React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  customer,
  children,
}) => {
  return (
    <div className="flex-1 small:py-16 bg-bg-000 text-text-200" data-testid="account-page">
      <div className="content-container h-full max-w-5xl mx-auto">
        <div className="bg-bg-100 border border-border-200 rounded-large shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 small:grid-cols-[240px_1fr] gap-10 p-8 small:p-12">
            <div>{customer && <AccountNav customer={customer} />}</div>
            <div className="flex-1">{children}</div>
          </div>

          <div className="flex flex-col small:flex-row items-end justify-between border-t border-border-200 p-8 small:p-12 gap-8">
            <div>
              <h3 className="font-serif text-2xl text-text-100 mb-2 tracking-[0.01em]">
                Got questions?
              </h3>
              <span className="text-sm text-text-300">
                You can find frequently asked questions and answers on our
                customer service page.
              </span>
            </div>
            <div>
              <UnderlineLink href="/customer-service" className="hover:text-accent-main-200">
                Customer Service
              </UnderlineLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountLayout
