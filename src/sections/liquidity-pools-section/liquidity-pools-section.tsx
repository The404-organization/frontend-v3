import { Button } from '@/shared/ui/button/button';
import { quantumFont } from '@/shared/ui/fonts';
import clsx from 'clsx';
import styles from './liquidity-pools-section.module.css';

export const LiquidityPoolsSection = () => {
	return (
		<section className={styles.wrapper} id="liquidity-pools">
			<div className={styles.content}>
				<p className={clsx(styles.title, quantumFont.className)}>
					Liquidity <br /> pools
				</p>
				<div className={styles.mainContent}>
					<div className={styles.leftContent}>
						<div className={styles.textWrapper}>
							<div className={styles.paragraphWrapper}>
								<p className={styles.textTitle}>
									Rewards for Staking:
								</p>
								<p className={styles.text}>
									Users who stake their $FOF tokens or
									f-tokens in liquidity pools receive rewards
									in the form of additional $FOF tokens. This
									incentivizes users to provide liquidity,
									ensuring there is always sufficient
									liquidity for trading on the platform.
								</p>
							</div>
							<div className={styles.paragraphWrapper}>
								<p className={styles.textTitle}>
									Comment Yield Generation:
								</p>
								<p className={styles.text}>
									Staking offers an opportunity to generate
									passive income through yield farming, making
									it an attractive option for users looking to
									maximize their returns on investment.
								</p>
							</div>
						</div>
						<Button
							wrapperClassName={styles.button}
							label="Purchase Tokens"
						/>
					</div>
					<div className={styles.image} />
				</div>
			</div>
		</section>
	);
};
