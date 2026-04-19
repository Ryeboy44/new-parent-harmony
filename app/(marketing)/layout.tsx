/**
 * Route group for the public marketing site. The `(marketing)` segment does not
 * appear in URLs — e.g. this folder’s `page.tsx` is still `/`.
 */
export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
