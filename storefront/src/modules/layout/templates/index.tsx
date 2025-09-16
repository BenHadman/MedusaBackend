import React from "react"

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"

const Layout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div className="bg-bg-000 text-text-200">
      <Nav />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
