import { PrismicLink, PrismicText } from "@prismicio/react";
import { useState } from "react";
import type { NavigationDocument } from "../.slicemachine/prismicio";

export function Navigation({ navigation }: { navigation: NavigationDocument }) {
  console.log("navigation", navigation);
  // Only render top level nav items
  // On click, expand the sub items
  const [navState, setNavState] = useState<{ linkName: string | undefined }>({
    linkName: undefined
  });
  console.log("navState", navState);

  function handleTopNavClick(linkName: string) {
    setNavState({ linkName });
  }
  return (
    <nav className="navbar">
      <ul className="nav-item-list">
        {/* Renders top-level links. */}
        {navigation.data.slices.map((slice) => {
          return (
            <li className="nav-item" key={slice.id}>
              {slice.primary.link.link_type === "Document" ? (
                <PrismicLink field={slice.primary.link}>
                  <PrismicText field={slice.primary.name} />
                </PrismicLink>
              ) : (
                <span
                  onMouseEnter={() =>
                    handleTopNavClick(slice.primary.link_name!)
                  }
                >
                  <PrismicText field={slice.primary.name} />
                </span>
              )}

              {/* Renders child links, if present. And the link is selected as active */}
              {navState.linkName === slice.primary.link_name &&
                slice.items.length > 0 && (
                  <ul className="nav-item-list sub-nav-item-list">
                    {slice.items.map((item) => {
                      return (
                        <li
                          className="nav-item sub-nav-item"
                          key={JSON.stringify(item)}
                        >
                          <PrismicLink field={item.child_link}>
                            <PrismicText field={item.child_name} />
                          </PrismicLink>
                        </li>
                      );
                    })}
                  </ul>
                )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
