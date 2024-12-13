import { useEffect, useState } from 'react';

export const useWindowWidth = () => {
	const [width, setWidth] = useState<number>(0);

	useEffect(() => {
		calculateWindowWidth();

		window.addEventListener('resize', calculateWindowWidth);

		return () => {
			window.removeEventListener('resize', calculateWindowWidth);
		};
	}, []);

	const calculateWindowWidth = () => {
		if (typeof window === 'undefined') {
			return;
		}

		setWidth(window.innerWidth);
	};

	return width;
};
