import * as React from "react"
import { notFound } from "next/navigation"
import { allDocs } from "contentlayer/generated"

import { Mdx } from "@/components/mdx/mdx-components"

import "@/styles/mdx.css"

interface PageProps {
  params: {
    slug: string
  }
}

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) notFound()

  return doc
}

const page = async ({ params }: PageProps) => {
  const doc = await getDocFromParams(params.slug)
  return (
    <main className="mx-auto flex w-10/12 flex-col items-center">
      <div className="max-w-3xl py-40 text-center">
        <h1 className="text-4xl font-bold">{doc.title}</h1>
        <p className="pt-4 font-mono">{doc.description}</p>
      </div>
      <div className="w-full">
        <Mdx code={doc.body.code} />
      </div>
    </main>
  )
}

export default page
