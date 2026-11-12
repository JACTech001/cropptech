import "./globals.css";

export const metadata = {
  title: "CroppTech With Commerce | Building Business. Creating Opportunity.",
  description: "CroppTech With Commerce is a commerce-led business group bringing together commerce, business services and technology to help individuals and organisations establish, operate and grow.",
  applicationName: "CroppTech With Commerce"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
