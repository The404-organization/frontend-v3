import { Footer } from '@/layout/footer/footer';
import { Header } from '@/layout/header/header';
import { outfitFont } from '@/shared/ui/fonts';
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
		</html>
	);
};

export default RootLayout;
