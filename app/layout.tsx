import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Page Produit",
  description: "Affichage de détails sur des produits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {
          children
          }
        </div>
      </body>
    </html>
  );
}
