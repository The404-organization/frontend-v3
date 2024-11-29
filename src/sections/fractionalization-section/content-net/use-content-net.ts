import { useEffect, useState } from 'react';
import { HorizontalLine, VerticalLine } from './content-net.types';

export const useContentNet = () => {
	const [verticalLinesCount, setVerticalLinesCount] = useState<number>(0);
	const [horizontalLinesCount, setHorizontalLinesCount] = useState<number>(0);
	const [displayNet, setDisplayNet] = useState<boolean>(true);
	const [elementSize, setElementSize] = useState({ width: 0, height: 0 });

	useEffect(() => {
		calculate();

		window.addEventListener('resize', calculate);

		return () => {
			window.removeEventListener('resize', calculate);
		};
	}, []);

	const calculate = () => {
		setDisplayNet(window.innerWidth > 1440);

		if (window.innerWidth <= 1440) {
			return;
		}

		const element = document.getElementById('factionalization-content');
		if (!element) {
			return;
		}

		const { width, height } = element.getBoundingClientRect();

		setVerticalLinesCount(Math.floor(width / 80));
		setHorizontalLinesCount(Math.floor(height / 80));
		setElementSize({ width, height });
	};

	const horizontalLines = Array.from({
		length: horizontalLinesCount + 1,
	}).map<HorizontalLine>((_, index) => {
		const linesHeight = horizontalLinesCount * 80;
		const initialTopPosition = (elementSize.height - linesHeight) / 2;

		return {
			positionY: initialTopPosition + index * 80,
		};
	});
	const verticalLines = Array.from({
		length: verticalLinesCount + 1,
	}).map<VerticalLine>((_, index) => {
		const linesWidth = verticalLinesCount * 80;
		const initialLeftPosition = (elementSize.width - linesWidth) / 2;

		return {
			positionX: initialLeftPosition + index * 80,
		};
	});

	return {
		displayNet,
		horizontalLines,
		verticalLines,
	};
};
