import './globals.css'
import { Open_Sans } from "next/font/google"
import  Navbar from "app/(shared)/Navbar"

const openSans = Open_Sans({
  subsets: ["latin"]
})

export const metadata = {
  title: 'Blog-Chaptgpt',
  description: 'A blog built with Nextjs and Chatgpt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
       <Navbar />
        {children}
      </body>
    </html>
  )
}
