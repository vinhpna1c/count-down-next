import { Providers } from './app_provider'
import './globals.css'
import { Inter, Raleway } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })
export const metadata = {
  title: 'Count Down Trip',
  description: 'Trip to Binh Thuan with NVT at weekend',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Providers>
          {children}
        </Providers>

      </body>
    </html>
  )
}
