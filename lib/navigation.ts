import type { NavItem } from "./types";

/**
 * A nav item is active for its own path, a child path, or when the pathname is in the item's subtree
 * (e.g. /insights and /insights/some-post) — but not for Home (/).
 */
export function isNavItemActive(pathname: string, item: NavItem): boolean {
  if (pathname === item.href) return true;
  if (item.children?.some((c) => c.href === pathname)) return true;
  if (item.href === "/") return false;
  if (pathname.startsWith(`${item.href}/`)) return true;
  return false;
}
