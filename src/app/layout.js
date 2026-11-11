import "./globals.css";

export const metadata = {
  title: "CroppTech With Commerce | Commerce First. Technology Driven.",
  description:
    "CroppTech With Commerce is a commerce-driven technology and business company building businesses, powering commerce and delivering solutions for a connected global economy.",
  applicationName: "CroppTech With Commerce"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
