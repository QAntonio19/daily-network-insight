import type { HomeNavKey, NavItem } from "./types";

/**
 * A nav item is active for its own path, a child path, or when the pathname is in the item's subtree
 * (e.g. /insights and /insights/some-post) — but not for Home (/).
 * For `/#section`, on `/` the optional `homeNavKey` (scroll) overrides hash when set (after layout).
 * `null` = en home pero fuera de hero y de about (p. ej. bloques de abajo): Home y About inactivos.
 */
export function isNavItemActive(
  pathname: string,
  item: NavItem,
  currentHash: string = "",
  homeNavKey: HomeNavKey | undefined = undefined,
): boolean {
  // `currentHash` se actualiza en el mismo clic con flushSync; `window` puede ir un frame atrás.
  const w =
    pathname === "/" && typeof window !== "undefined"
      ? window.location.hash.replace(/^#/, "")
      : "";
  const hash = pathname === "/" ? currentHash || w : currentHash;

  if (pathname === "/" && homeNavKey !== undefined) {
    if (hash === "about-us" && homeNavKey === "top") {
      if (item.href === "/") return false;
      if (item.href === "/#about-us") return true;
    }
    if (item.href === "/") return homeNavKey === "top";
    if (item.href === "/#about-us") return homeNavKey === "about-us";
  }
  if (item.href === "/") {
    if (pathname !== "/") return false;
    return hash === "top" || hash === "";
  }
  if (item.href.startsWith("/#")) {
    const target = item.href.slice(2);
    if (pathname !== "/") return false;
    return hash === target;
  }
  if (pathname === item.href && item.href !== "/") return true;
  if (item.children?.some((c) => c.href === pathname)) return true;
  if (item.href === "/") return false;
  if (pathname.startsWith(`${item.href}/`)) return true;
  return false;
}
