import type { MDXComponents } from "mdx/types";
import Link from "next/link";

// Required by @next/mdx: styles for elements written in .mdx files.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href = "", children }) =>
      href.startsWith("http") ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <Link href={href}>{children}</Link>
      ),
    ...components,
  };
}
