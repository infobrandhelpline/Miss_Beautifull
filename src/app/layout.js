import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import FloatingActionButton from '@/components/FloatingActionButton';
import AnimatedPageWrapper from '@/components/AnimatedPageWrapper';
import ScrollIndicator, { ScrollToTop } from '@/components/ScrollIndicator';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Salon Academy - Beauty & Learning',
  description: 'Professional beauty salon and academy offering expert services and comprehensive beauty courses.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Brittany&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <ThemeProvider>
          {/* Skip Link for Accessibility */}
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          
          <AnimatedPageWrapper>
            <main id="main-content">
              {children}
            </main>
          </AnimatedPageWrapper>
          
          {/* Floating Action Button */}
          <FloatingActionButton />
          
          {/* Scroll Indicator */}
          <ScrollIndicator />
          
          {/* Scroll to Top Button */}
          <ScrollToTop />
          
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="auto"
            toastClassName="rounded-lg shadow-lg"
            bodyClassName="font-sans"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
