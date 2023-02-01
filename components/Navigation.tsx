import { PrismicLink, PrismicText } from "@prismicio/react";
import type { NavigationDocument } from "../.slicemachine/prismicio";

export function Navigation({ navigation }: { navigation: NavigationDocument }) {
  console.log("navigation", navigation);
  return (
    <nav className="navbar">
      <ul className="nav-item-list">
        {/* Renders top-level links. */}
        {navigation.data.slices.map((slice) => {
          return (
            <li className="nav-item" key={slice.id}>
              <PrismicLink field={slice.primary.link}>
                <PrismicText field={slice.primary.name} />
              </PrismicLink>

              {/* Renders child links, if present. */}
              {slice.items.length > 0 && (
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
