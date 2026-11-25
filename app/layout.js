import './globals.css';
import { Hind_Siliguri } from 'next/font/google';

const font = Hind_Siliguri({ subsets: ['bengali', 'latin'], weight: ['400', '500', '700'] });

export const metadata = {
  title: 'শাপলা মডেল হাই স্কুল',
  description: 'শাপলা মডেল হাই স্কুলের অফিসিয়াল ওয়েবসাইট',
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className={font.className} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
