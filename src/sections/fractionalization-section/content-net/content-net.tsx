'use client';

import styles from './content-net.module.css';
import { useContentNet } from './use-content-net';

export const ContentNet = () => {
	const { displayNet, horizontalLines, verticalLines } = useContentNet();

	if (!displayNet) {
		return;
	}

	return (
		<div className={styles.wrapper}>
			{horizontalLines.map(({ positionY }) => (
				<div
					key={positionY}
					style={{ top: positionY }}
					className={styles.horizontalLine}
				/>
			))}
			{verticalLines.map(({ positionX }) => (
				<div
					key={positionX}
					style={{ left: positionX }}
					className={styles.verticalLine}
				/>
			))}
		</div>
	);
};
