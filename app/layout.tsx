import type { Metadata } from 'next';
import './globals.css';
import './preloader.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Preloader from '@/components/Preloader';
export const metadata: Metadata = { title: { default: 'Narwana Enterprises | Rooftop Solar in Narwana', template: '%s | Narwana Enterprises' }, description: 'Explore rooftop solar, residential and commercial solar systems, solar pumps and street lighting with Narwana Enterprises in Narwana, Haryana.', metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'), openGraph: { type: 'website', title: 'Narwana Enterprises', description: 'Thoughtful solar solutions for homes, businesses and agricultural applications.' }, robots: { index: true, follow: true } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><Preloader/><Header/><main>{children}</main><Footer/><WhatsAppFloat/></body></html> }
