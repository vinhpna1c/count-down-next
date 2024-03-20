import { Providers } from './app_provider'
import './globals.css'
import { Inter, Oswald, Raleway } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const oswald = Oswald({ subsets: ['latin'] })
export const metadata = {
  title: 'Party Count Down',
  description: 'Count down for saturday party',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className={oswald .className}>
        <Providers>
          {children}
        </Providers>

      </body>
    </html>
  )
}
