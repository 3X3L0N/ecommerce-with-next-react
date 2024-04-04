import "./globals.css";
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css"
import Topnav from "@/components/Topnav";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Nextecom",
  description: "Ecommerce using Nextjs Full stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Topnav/>
        <Toaster/>
        {children}
        </body>
    </html>
  );
}
