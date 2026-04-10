// app/page.tsx
// Il middleware next-intl gestisce il redirect da / → /[locale]
// Questa pagina non dovrebbe mai essere raggiunta, ma serve come fallback
export default function RootPage() {
  return null;
}