import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "../../public/style/all.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
