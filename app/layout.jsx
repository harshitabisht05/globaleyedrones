import "./globals.css";
import localFont from 'next/font/local'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from 'next-themes';

// Heading font: Playfair Display
const headingFont = localFont({
  src: [
    {
      path: './fonts/PlayfairDisplay-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/PlayfairDisplay-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-heading',
  display: 'swap',
})
// Body font: Raleway
const bodyFont = localFont({
  src: [
    {
      path: './fonts/Raleway-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Raleway-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-body',
  display: 'swap',
})


export const metadata = {
  title: "GlobalEye Drones",
  description: "GlobalEye Drones - Advanced Drone Solutions for Surveillance and Monitoring",
  icons:{
    icon: "/logo/favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
            {children}
          {/* <Footer /> */}
        </ThemeProvider>
        </body>
    </html>
  );
}
