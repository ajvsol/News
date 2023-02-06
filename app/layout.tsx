import "./globals.css";
import { StateContextProvider } from "@/context/StateContextProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StateContextProvider>
      <html lang="en" className="bg-blue-300 dark:bg-blue-900">
        {/*
          <head /> will contain the components returned by the nearest parent
          head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
        */}
        <head />
        <body>{children}</body>
      </html>
    </StateContextProvider>
  );
}
