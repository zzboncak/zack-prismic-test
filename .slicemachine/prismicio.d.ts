// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Generic Page documents */
interface GenericPageDocumentData {
    /**
     * Slice Zone field in *Generic Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: generic_page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<GenericPageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Generic Page → Slice Zone*
 *
 */
type GenericPageDocumentDataSlicesSlice = TextBlockSlice;
/**
 * Generic Page document from Prismic
 *
 * - **API ID**: `generic_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GenericPageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<GenericPageDocumentData>, "generic_page", Lang>;
/** Content for Home Page documents */
interface HomePageDocumentData {
    /**
     * Church Logo field in *Home Page*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: home_page.church_logo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    church_logo: prismicT.ImageField<never>;
    /**
     * Hero Title field in *Home Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_page.hero_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    hero_title: prismicT.KeyTextField;
    /**
     * Mission Statement field in *Home Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_page.mission_statement
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    mission_statement: prismicT.KeyTextField;
    /**
     * Slice Zone field in *Home Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: home_page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomePageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Home Page → Slice Zone*
 *
 */
type HomePageDocumentDataSlicesSlice = NavbarSlice;
/**
 * Home Page document from Prismic
 *
 * - **API ID**: `home_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomePageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomePageDocumentData>, "home_page", Lang>;
/** Content for Menu documents */
interface MenuDocumentData {
    /**
     * Menu Items field in *Menu*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: menu.menu_items[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    menu_items: prismicT.GroupField<Simplify<MenuDocumentDataMenuItemsItem>>;
}
/**
 * Item in Menu → Menu Items
 *
 */
export interface MenuDocumentDataMenuItemsItem {
    /**
     * Label field in *Menu → Menu Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: menu.menu_items[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label: prismicT.KeyTextField;
    /**
     * Link field in *Menu → Menu Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: menu.menu_items[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Menu document from Prismic
 *
 * - **API ID**: `menu`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MenuDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<MenuDocumentData>, "menu", Lang>;
/** Content for Navigation documents */
interface NavigationDocumentData {
    /**
     * Name field in *Navigation*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.RichTextField;
    /**
     * Slice Zone field in *Navigation*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<NavigationDocumentDataSlicesSlice>;
}
/**
 * Slice for *Navigation → Slice Zone*
 *
 */
type NavigationDocumentDataSlicesSlice = NavbarSlice;
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<NavigationDocumentData>, "navigation", Lang>;
export type AllDocumentTypes = GenericPageDocument | HomePageDocument | MenuDocument | NavigationDocument;
/**
 * Primary content in NavigationItem → Primary
 *
 */
interface NavbarSliceDefaultPrimary {
    /**
     * Name field in *NavigationItem → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navbar.primary.name
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.RichTextField;
    /**
     * Link field in *NavigationItem → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: navbar.primary.link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
    /**
     * Link Name field in *NavigationItem → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navbar.primary.link_name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    link_name: prismicT.KeyTextField;
}
/**
 * Item in NavigationItem → Items
 *
 */
export interface NavbarSliceDefaultItem {
    /**
     * Child Name field in *NavigationItem → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navbar.items[].child_name
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    child_name: prismicT.RichTextField;
    /**
     * Child Link field in *NavigationItem → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: navbar.items[].child_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    child_link: prismicT.LinkField;
}
/**
 * Default variation for NavigationItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Navbar`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavbarSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<NavbarSliceDefaultPrimary>, Simplify<NavbarSliceDefaultItem>>;
/**
 * Slice variation for *NavigationItem*
 *
 */
type NavbarSliceVariation = NavbarSliceDefault;
/**
 * NavigationItem Shared Slice
 *
 * - **API ID**: `navbar`
 * - **Description**: `Navbar`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavbarSlice = prismicT.SharedSlice<"navbar", NavbarSliceVariation>;
/**
 * Primary content in TextBlock → Primary
 *
 */
interface TextBlockSliceDefaultPrimary {
    /**
     * Title field in *TextBlock → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: text_block.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *TextBlock → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: text_block.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item in TextBlock → Items
 *
 */
export interface TextBlockSliceDefaultItem {
    /**
     * Rich Text Paragraph field in *TextBlock → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text_block.items[].rich_text_paragraph
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    rich_text_paragraph: prismicT.RichTextField;
}
/**
 * Default variation for TextBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TextBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextBlockSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TextBlockSliceDefaultPrimary>, Simplify<TextBlockSliceDefaultItem>>;
/**
 * Slice variation for *TextBlock*
 *
 */
type TextBlockSliceVariation = TextBlockSliceDefault;
/**
 * TextBlock Shared Slice
 *
 * - **API ID**: `text_block`
 * - **Description**: `TextBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextBlockSlice = prismicT.SharedSlice<"text_block", TextBlockSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { GenericPageDocumentData, GenericPageDocumentDataSlicesSlice, GenericPageDocument, HomePageDocumentData, HomePageDocumentDataSlicesSlice, HomePageDocument, MenuDocumentData, MenuDocumentDataMenuItemsItem, MenuDocument, NavigationDocumentData, NavigationDocumentDataSlicesSlice, NavigationDocument, AllDocumentTypes, NavbarSliceDefaultPrimary, NavbarSliceDefaultItem, NavbarSliceDefault, NavbarSliceVariation, NavbarSlice, TextBlockSliceDefaultPrimary, TextBlockSliceDefaultItem, TextBlockSliceDefault, TextBlockSliceVariation, TextBlockSlice };
    }
}
