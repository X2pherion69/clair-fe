import "../configs/globals.scss";
import Config from "@/configs/config";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Config>
        <body>{children}</body>
      </Config>
    </html>
  );
}
