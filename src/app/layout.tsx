import { Inter } from 'next/font/google';
import './globals.css';
import './reset.css';
import Providers from '@/store/provider';

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Unthread',
  description: 'Create your online store just in few clicks...!!!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
