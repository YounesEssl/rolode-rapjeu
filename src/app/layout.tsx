import { ReactNode } from "react";
import { Providers } from "./providers";
import Navbar from "./_components/Navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
