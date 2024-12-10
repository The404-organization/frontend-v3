import { quantumFont } from '@/shared/ui/fonts';
import { LinkButton } from '@/shared/ui/link-button/link-button';
import clsx from 'clsx';
import { ContentNet } from './content-net/content-net';
import styles from './fractionalization-section.module.css';

export const FactionalizationSection = () => {
	return (
		<section className={styles.wrapper} id="fractionalization">
			<div className={styles.content} id="factionalization-content">
				<ContentNet />
				<p className={clsx(styles.title, quantumFont.className)}>
					Fractionalization
				</p>
				<div className={styles.mainContent}>
					<img
						className={styles.statue}
						src="/fractionalization-section/statue.png"
					/>
					<div className={styles.leftContent}>
						<div className={styles.textContent}>
							<p className={styles.text}>
								Convert high-value NFTs into fractional ERC- 404
								tokens, allowing for easier trading and
								unlocking liquidity.
							</p>
							<p className={styles.text}>
								Lowers entry barriers for new investors by
								enabling the purchase of smaller NFT portions.
							</p>
						</div>
						<LinkButton
							label="White paper"
							url="https://404-project.gitbook.io/404-lite-paper/"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
