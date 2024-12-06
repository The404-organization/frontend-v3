import { poppinsFont } from '@/shared/ui/fonts';
import { WhitePaperButton } from '@/shared/ui/white-paper-button/white-paper-button';
import clsx from 'clsx';
import styles from './welcome-section.module.css';

export const WelcomeSection = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.blur} />
			<img className={styles.largeCircle} src="/common/circle.png" />
			<img className={styles.smallCircle} src="/common/circle.png" />
			<div className={styles.content}>
				<img
					className={styles.monkey}
					src="/welcome-section/monkey.png"
					alt=""
				/>
				<div className={styles.textContent}>
					<p className={clsx(styles.title, poppinsFont.className)}>
						Convert High-Value{' '}
						<span className={styles.blue}>N</span>
						<span className={styles.violet}>F</span>
						<span className={styles.pink}>T</span>s Into
						Fractional-Erc-4<span className={styles.pink}>0</span>4
						Tokens
					</p>
					<p className={clsx(styles.subtitle, poppinsFont.className)}>
						Convert High-Value NFTs Into Fractional-Erc-404 Tokens
					</p>
					<WhitePaperButton />
				</div>
			</div>
		</section>
	);
};
