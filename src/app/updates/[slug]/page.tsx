import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx/mdx-components";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) notFound();

  return doc;
}

const page = async ({ params }: PageProps) => {
  const doc = await getDocFromParams(params.slug);
  return (
    <main>
      <div className="py-4 w-8/12 mx-auto">
        <h1 className="text-4xl pt-12">{doc.title}</h1>
        <p className="pb-12">{doc.description}</p>
      </div>
      <div className="py-4 w-8/12 mx-auto">
        <div className="py-12">
          <Mdx code={doc.body.code} />
        </div>
      </div>
    </main>
  );
};

export default page;
