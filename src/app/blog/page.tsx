/* eslint-disable no-underscore-dangle */
import * as React from "react"
import Link from "next/link"
import { allDocs } from "contentlayer/generated"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Blog() {
  return (
    <main>
      <section id="hero" className="mx-auto w-10/12 pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="pt-4">This is the blog page.</p>
        </div>
      </section>
      <section id="posts" className="mx-auto w-10/12 py-20">
        <div className="-mx-4 md:flex md:flex-wrap">
          {allDocs.map((doc) => (
            <div key={doc._raw.flattenedPath} className="md:w-1/3 md:px-4">
              <Card>
                <CardHeader>
                  <CardTitle className="font-sans">{doc.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">{doc.description}</CardContent>
                <CardFooter>
                  <Link href={doc._raw.flattenedPath}>
                    <Button variant="outline">Read More</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
