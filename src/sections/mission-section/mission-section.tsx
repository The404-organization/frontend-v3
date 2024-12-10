import { quantumFont } from '@/shared/ui/fonts';
import { LinkButton } from '@/shared/ui/link-button/link-button';
import clsx from 'clsx';
import styles from './mission-section.module.css';

export const MissionSection = () => {
	return (
		<section className={styles.wrapper} id="mission">
			<div className={styles.blur} />
			<img src="/common/circle.png" className={styles.largeCircle} />
			<img src="/common/circle.png" className={styles.smallCircle} />
			<div className={styles.content}>
				<div className={styles.mainContent}>
					<p className={clsx(styles.title, quantumFont.className)}>
						Mission
					</p>
					<div className={styles.textContent}>
						<div className={styles.textWrapper}>
							<p className={styles.text}>
								The404.io is dedicated to transforming illiquid
								NFTs into tradable, valuable assets by
								leveraging the power of the ERC-404 token
								standard and a unique liquidity mechanism.
							</p>
							<p className={styles.text}>
								Our platform allows users to fractionalize their
								NFTS and participate in a vibrant market,
								enhancing liquidity and providing new
								opportunities for earning and trading.
							</p>
						</div>
						<LinkButton
							label="Join Telegram"
							url="https://t.me/The404ioOfficial"
						/>
					</div>
				</div>
				<img
					className={styles.god}
					src="/mission-section/god.png"
					alt=""
				/>
			</div>
		</section>
	);
};
