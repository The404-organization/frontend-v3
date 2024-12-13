'use client';

import { useWindowWidth } from '@/shared/hooks/use-window-width';
import styles from './roadmap-section.module.css';
import { FifthYearItem } from './years-items/fifth-year-item/fifth-year-item';
import { FirstYearItem } from './years-items/first-year-item/first-year-item';
import { FourthYearItem } from './years-items/fourth-year-item/fourth-year-item';
import { SecondYearItem } from './years-items/second-year-item/second-year-item';
import { ThirdYearItem } from './years-items/third-year-item/third-year-item';

export const RoadmapSection = () => {
	const windowWidth = useWindowWidth();

	return (
		<section id="roadmap">
			<div
				className={styles.wrapper}
				style={{ zoom: Math.min(windowWidth / 1920, 1) }}>
				<img className={styles.image} src="/roadmap-section/road.png" />
				<div className={styles.bottomBlur} />
				<FirstYearItem className={styles.firstItem} />
				<SecondYearItem className={styles.secondItem} />
				<ThirdYearItem className={styles.thirdItem} />
				<FourthYearItem className={styles.fourthItem} />
				<FifthYearItem className={styles.fifthItem} />
			</div>
		</section>
	);
};
