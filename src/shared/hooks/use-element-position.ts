import { useEffect, useRef, useState } from 'react';
import { ElementPosition } from '../types/element-position';

export const useElementPosition = () => {
	const [position, setPosition] = useState<ElementPosition | null>(null);
	const elementRef = useRef<HTMLElement>(null);

	useEffect(() => {
		calculateElementPosotion();

		const interval = setInterval(calculateElementPosotion, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	const calculateElementPosotion = () => {
		if (!elementRef.current) {
			setPosition(null);
			return;
		}

		const { width, height, top, left, ...rest } =
			elementRef.current.getBoundingClientRect();

		setPosition({ width, height, top, left });
	};

	return {
		position,
		elementRef,
		calculateElementPosotion,
	};
};
