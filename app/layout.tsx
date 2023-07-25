import { Urbanist } from 'next/font/google'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'

import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import LoaderProvider from '@/providers/loader-provider'

const font = Urbanist({ subsets: ['latin'], weight: ["400", "700"] })

export const metadata = {
  title: 'Rhombus',
  description: 'Your food in your pocket',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang='en'>
      <ClerkProvider>
        <body className={font.className}>
          <Navbar />
          <ModalProvider />
          <ToastProvider />
          <LoaderProvider />
          <div className="relative w-full min-h-[80vh] h-auto mb-20 mt-20 flex flex-col justify-center">
            {children}
          </div>
          <Footer />
        </body>
      </ClerkProvider>
    </html>
  )
}
