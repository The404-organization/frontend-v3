import { Button } from '@/shared/ui/button/button';
import { quantumFont } from '@/shared/ui/fonts';
import clsx from 'clsx';
import { Achievement } from './achievement/achievement';
import { ACHIEVEMENTS } from './why-404-section.constants';
import styles from './why-404-section.module.css';

export const Why404Section = () => {
	return (
		<section className={styles.wrapper} id="why-404">
			<img
				className={styles.background}
				src="/why-404-section/background.png"
			/>
			<p className={clsx(styles.title, quantumFont.className)}>
				WHY <span className={styles.notBreak}>ERC-404</span>
			</p>
			<div className={styles.mainContent}>
				<img className={styles.logo} src="/why-404-section/logo.png" />
				<div className={styles.rightContent}>
					<div className={styles.textContent}>
						<p className={styles.text}>
							The ERC-404 standard is a cutting-edge token
							protocol designed to facilitate the fractional
							ownership and trading of NFTs.
						</p>
						<p className={styles.text}>
							By leveraging the capabilities of this standard,
							the404.io provides users with enhanced liquidity,
							accessibility, and a more efficient trading
							experience.
						</p>
						<p className={clsx(styles.text, styles.bold)}>
							Here&apos;s a detailed look at the key features and
							benefits of ERC-404.
						</p>
					</div>
					<Button
						wrapperClassName={styles.button}
						label="Purchase Tokens"
					/>
				</div>
			</div>
			<div className={styles.achievements}>
				{ACHIEVEMENTS.map((achievement, index) => (
					<Achievement
						valueClassName={
							index === 0 ? styles.smallAchievementValueText : ''
						}
						{...achievement}
						key={achievement.valueKey}
					/>
				))}
			</div>
		</section>
	);
};
