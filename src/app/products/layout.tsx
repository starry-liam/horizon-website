export const metadata = {
  title: "Horizon Avionics",
  description: "Open Source Avionics for the Next Generation of Rocketeers",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}