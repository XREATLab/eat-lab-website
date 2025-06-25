import React from "react"
import Layout from "../components/Layout.js"
import Seo from "../components/Seo.js"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-yellow-400 mb-4">404</h1>
        <p className="text-2xl text-gray-400 mb-8">Page not found</p>
        <Link 
          to="/"
          className="inline-flex items-center px-6 py-3 bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage