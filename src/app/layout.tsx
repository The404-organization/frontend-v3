import { zoomFunction } from '@/layout';
import { Footer } from '@/layout/footer/footer';
import { Header } from '@/layout/header/header';
import { outfitFont } from '@/shared/ui/fonts';
import Script from 'next/script';
import { ReactNode } from 'react';
import './globals.css';

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang="en">
			<body className={outfitFont.className}>
				<Header />
				{children}
				<Footer />
			</body>
			<Script
				id="zoom"
				dangerouslySetInnerHTML={{ __html: zoomFunction }}
			/>
		</html>
	);
};

export default RootLayout;
