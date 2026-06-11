/**
 * Joins class names, filtering falsy values.
 */
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Creates an IntersectionObserver for scroll reveal animations.
 * Call with a container element; attaches "visible" to matching children.
 */
export function createRevealObserver(
  root: HTMLElement | null,
  selector = ".reveal, .reveal-child, .line-reveal",
  options?: IntersectionObserverInit
): IntersectionObserver | null {
  if (!root || typeof window === "undefined") return null;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -60px 0px",
      ...options,
    }
  );

  root.querySelectorAll(selector).forEach((el) => observer.observe(el));
  return observer;
}
