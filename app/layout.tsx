import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wave Particle Duality',
  description:
    'You have seen arguments and evidence for both the particle model of light as well as for the wave model of matter. In this assignment, you will create a graphic organizer outlining the key points of each side. In order to demonstrate your understanding of the basic concepts of quantum mechanics, you will need to support your points with experimental evidence that supports each side of the argument. ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="overflow-x-auto">{children}</body>
    </html>
  );
}
