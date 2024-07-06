import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight:['400','500','700','900'], subsets: ["latin"] });

export const metadata = {
  title: {default:"Next Hero",
template:"%s | Next Hero"
},
  description: "Super Powerful Next Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={roboto.className}>
       <Navbar/>
       
        <div >
          
       {/* className="flex justify-center items-center" style={{ height: 'calc(100vh - 180px)' }} */}


        <div>
        {children}
        </div>
        </div>
        <footer className="bg-black" style={{height:'90px'}}>
          This is my footer
          <div>
            This is footer&apos;s footer
          </div>
          <div>
            This is footer&apos;s footer&apos;s footer
          </div>
        </footer>
        </body>
    </html>
  );
}
