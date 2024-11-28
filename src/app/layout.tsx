import { outfitFont } from '@/shared/ui/fonts';
import { ReactNode } from 'react';
import './globals.css';

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang="en">
			<body className={outfitFont.className}>{children}</body>
		</html>
	);
};

export default RootLayout;
