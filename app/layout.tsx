import './globals.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { Inter } from '@next/font/google'
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-[#23252F] text-white font-[Inter]">
        <div className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
