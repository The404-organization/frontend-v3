import { quantumFont } from '@/shared/ui/fonts';
import { LinkButton } from '@/shared/ui/link-button/link-button';
import clsx from 'clsx';
import styles from './trading-section.module.css';

export const TradingSection = () => {
	return (
		<section className={styles.wrapper} id="trading">
			<p className={clsx(styles.title, quantumFont.className)}>Trading</p>
			<div className={styles.mainContent}>
				<div className={styles.leftContent}>
					<div className={styles.textWrapper}>
						<p className={styles.text}>
							The404.io is dedicated to transforming illiquid NFTs
							into tradable, valuable assets by leveraging the
							power of the ERC-404 token standard and a unique
							liquidity mechanism.
						</p>
						<p className={styles.text}>
							Our platform allows users to fractionalize their
							NFTS and participate in a vibrant market, enhancing
							liquidity and providing new opportunities for
							earning and trading.
						</p>
					</div>
					<LinkButton
						label="Join Telegram"
						url="https://t.me/The404ioOfficial"
					/>
				</div>
				<img
					className={styles.toad}
					src="/trading-section/toad.png"
					alt=""
				/>
			</div>
			<img
				className={styles.background}
				src="/trading-section/background.png"
			/>
		</section>
	);
};
