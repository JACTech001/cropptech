import "./globals.css";

export const metadata = {
  title: "CroppTech | Ideas. Opportunities. Possibilities.",
  description: "CroppTech is a diversified business and solutions company. We bring ideas to life, explore opportunities and work with people and organisations to make progress happen.",
  applicationName: "CroppTech",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/cropplogo.jpeg" }
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
