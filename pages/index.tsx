import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({ page }: PageProps) {
  return (
    <main>
      <PrismicNextImage field={page.data.church_logo} />
      <h1>{page.data.hero_title}</h1>
      <span>{page.data.mission_statement}</span>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const page = await client.getSingle("home_page");

  return {
    props: {
      page
    }
  };
}
