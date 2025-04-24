import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ReactQuery } from '@/lib/ReactQuery';
import Wrapper from '@/components/Wrapper';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Taskio',
  description: 'Gestão inteligente de tarefas',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ReactQuery>
          <div className={`${geistMono} ${geistSans} bg-gray-950`}>
            <Wrapper>{children}</Wrapper>
          </div>
        </ReactQuery>
      </body>
    </html>
  );
}
