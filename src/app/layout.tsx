// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children; // ← passa direttamente, nessun wrapper HTML
}