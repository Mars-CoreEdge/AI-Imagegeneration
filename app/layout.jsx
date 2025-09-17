export const metadata = {
  title: 'ImageAi',
  description: 'AI Image generation and community gallery',
}

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
