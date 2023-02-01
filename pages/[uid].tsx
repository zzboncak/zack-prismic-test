import { Navigation } from "@/components/Navigation";
import { createClient } from "@/prismicio";
import type {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType
} from "next";
import * as prismicH from "@prismicio/helpers";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

type PageType = InferGetStaticPropsType<typeof getStaticProps>;

export function Page({ navigation, page }: PageType) {
  return (
    <div>
      <Navigation navigation={navigation} />
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
}

export default Page;

export async function getStaticProps({
  params,
  previewData
}: GetStaticPropsContext<{ uid: string }>) {
  const client = createClient({ previewData });

  if (!params) {
    return;
  }

  const [navigation, page] = await Promise.all([
    client.getByUID("navigation", "top-bar"),
    client.getByUID("generic_page", params.uid)
  ]);

  return {
    props: {
      navigation,
      page
    }
  };
}

export async function getStaticPaths({}: GetStaticPathsContext) {
  const client = createClient();

  const pages = await client.getAllByType("generic_page");

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: false
  };
}
