import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { Navigation } from "@/components/Navigation";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({ page, navigation }: PageProps) {
  return (
    <>
      <Navigation navigation={navigation} />
      <main>
        <h1>{page.data.hero_title}</h1>
        <span>{page.data.mission_statement}</span>
        <SliceZone slices={page.data.slices} components={components} />
      </main>
    </>
  );
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const [page, navigation] = await Promise.all([
    client.getSingle("home_page"),
    client.getByUID("navigation", "top-bar")
  ]);

  return {
    props: {
      page,
      navigation
    }
  };
}
