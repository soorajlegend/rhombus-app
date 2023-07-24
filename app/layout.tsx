import { Urbanist } from 'next/font/google'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'

import './globals.css'
import { ClerkProvider, auth } from '@clerk/nextjs'

const font = Urbanist({ subsets: ['latin'], weight: ["400"] })

export const metadata = {
  title: 'Rhombus',
  description: 'Your food in your pocket',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { userId } = auth();

  return (
    <html lang='en'>
      <ClerkProvider>
        <body className={font.className}>
          <Navbar loggedIn={!!userId} />
          <ModalProvider />
          <ToastProvider />
          <div className="relative w-full min-h-[80vh] h-auto mb-20 mt-20 flex flex-col justify-center">
            {children}
          </div>
          <Footer />
        </body>
      </ClerkProvider>
    </html>
  )
}
