import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mantine Theme Builder",
  description: `Mantine Theme Builder is an open-source tool to create modern,
      customizable shadcn inspired themes for Mantine UI components.
      Easily adjust styles, colors, radius, and light/dark modes,
      and export the theme object for quick integration into any Mantine project.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Mantine Theme Builder" />
        <meta
          property="og:description"
          content="Mantine Theme Builder is an open-source tool to create modern,
      customizable shadcn inspired themes for Mantine UI components.
      Easily adjust styles, colors, radius, and light/dark modes,
      and export the theme object for quick integration into any Mantine project."
        />

        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mantine Theme Builder" />
        <meta
          name="twitter:description"
          content="Mantine Theme Builder is an open-source tool to create modern,
      customizable shadcn inspired themes for Mantine UI components.
      Easily adjust styles, colors, radius, and light/dark modes,
      and export the theme object for quick integration into any Mantine project."
        />
        <meta name="twitter:image" content="https://example.com/path-to-image.jpg" />
      </head>

      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
