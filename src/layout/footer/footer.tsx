'use client';

import { LogoIcon } from '@/assets/icons/logo';
import { TelegramIcon, XIcon } from '@/assets/icons/socials';
import { TopArrowIcon } from '@/assets/icons/top-arrow-icon';
import { poppinsFont } from '@/shared/ui/fonts';
import clsx from 'clsx';
import styles from './footer.module.css';
import { NewsletterInput } from './newsletter-input/newsletter-input';
import { SocialButton } from './social-button/social-button';

export const Footer = () => {
	const handleScrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId);

		if (section) {
			section.scrollIntoView({
				block: 'start',
				behavior: 'smooth',
			});
		}
	};

	const handleScrollTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	};

	return (
		<footer className={styles.wrapper}>
			<div className={styles.footer}>
				<div className={styles.topLineWrapper}>
					<div className={styles.line} />
					<button
						className={styles.scrollButton}
						onClick={handleScrollTop}>
						<TopArrowIcon className={styles.topArrowIcon} />
					</button>
				</div>
				<div className={styles.logoBlock}>
					<LogoIcon className={styles.logo} />
					<p className={styles.text}>
						We have a passion for NFTs and trading
					</p>
					<div className={styles.socials}>
						<SocialButton link="https://google.com" icon={XIcon} />
						<SocialButton
							link="https://t.me/The404ioOfficial"
							icon={TelegramIcon}
						/>
					</div>
				</div>
				<div className={styles.links}>
					<p
						className={clsx(styles.text, styles.link)}
						onClick={() => handleScrollToSection('mission')}>
						Mission
					</p>
					<p
						className={clsx(styles.text, styles.link)}
						onClick={() =>
							handleScrollToSection('fractionalization')
						}>
						Fractionalization
					</p>
					<p
						className={clsx(styles.text, styles.link)}
						onClick={() => handleScrollToSection('trading')}>
						Trading
					</p>
					<p
						className={clsx(styles.text, styles.link)}
						onClick={() =>
							handleScrollToSection('liquidity-pools')
						}>
						Liquidity pools
					</p>
					<p
						className={clsx(styles.text, styles.link)}
						onClick={() => handleScrollToSection('why-404')}>
						Why erc-404
					</p>
				</div>
				<div className={styles.newsletterBlock}>
					<p
						className={clsx(
							styles.newsletterTitle,
							poppinsFont.className,
						)}>
						Subscribe Newsletter
					</p>
					<p className={styles.text}>
						Stay updated with our latest news
					</p>
					<NewsletterInput />
				</div>
				<div className={styles.privacyLinksWrapper}>
					<p className={styles.text}>
						© Copyright {new Date().getFullYear()} The 404. All
						Rights Reserved Copyright
					</p>
					<div className={styles.privacyLinks}>
						<p className={styles.text}>Terms and conditions</p>
						<p className={styles.text}>Privacy policy</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
