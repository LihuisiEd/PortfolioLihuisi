import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import MobileNavbar from "@/components/NavbarMobile";
import { Inter } from "next/font/google";
import './globals.css'

export const metadata = {
  title: 'Portfolio',
  description: 'Este es mi portafolio realizado con NextJs',
  keywords: 'portfolio, fullstack, developer, designer',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '700']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <div className="flex relative text-white">
          <div className="hidden lg:block w-96 h-screen z-10">
            <Navbar />
          </div>
          <div className="relative background w-full overflow-hidden z-1">
            <div className="absolute -left-2/3 sm:-left-1/3 -top-36">
              <svg width="888" height="537" viewBox="0 0 888 537" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="355" cy="37.5" rx="533" ry="499.5" fill="url(#paint0_radial_7_485)" fillOpacity="0.25" />
                <defs>
                  <radialGradient id="paint0_radial_7_485" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(355 37.5) rotate(90) scale(499.5 533)">
                    <stop stopColor="#5E8BFD" />
                    <stop offset="1" stopColor="#9A57F0" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>

            <div className="absolute inset-y-0  sm:-right-3/4">
              <svg width="1156" height="1083" viewBox="0 0 1156 1083" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="578" cy="541.5" rx="578" ry="541.5" fill="url(#paint0_radial_7_486)" fillOpacity="0.3" />
                <defs>
                  <radialGradient id="paint0_radial_7_486" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(578 541.5) rotate(90) scale(541.5 578)">
                    <stop stopColor="#FF0098" />
                    <stop offset="1" stopColor="#9A57F0" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>

            <div className="w-screen lg:container relative lg:mx-auto  lg:pl-24 z-1">
              <div className="xl:mr-32">
                <div className="overflow-auto h-screen">
                  <div className="absolute inset-x-0 top-0">
                    <MobileNavbar />
                  </div>
                  <div className="hidden lg:block mt-28 lb:mt-0">
                    <Header />
                  </div>


                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>

    </html >
  )
}
