export const metadata = {
  title: "Horizon Avionics",
  description: "Open Source Avionics for the Next Generation of Rocketeers",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}