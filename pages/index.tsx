import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { createClient } from "@/prismicio";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({ page }: PageProps) {
  return (
    <>
      <h1>{page.data.hero_title}</h1>
      <SliceZone slices={page.data.slices} components={components} />
    </>
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
