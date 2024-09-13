import Header from "@/components/Header/Header";
import "./globals.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        
        {children}
        <ToastContainer />

      </body>
    </html>
  );
}
