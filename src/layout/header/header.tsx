'use client';

import { LogoIcon } from '@/assets/icons/logo';
import { Button } from '@/shared/ui/button/button';
import { MenuLink } from '@/shared/ui/menu-link/menu-link';
import styles from './header.module.css';

export const Header = () => {
	const handleScrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId);

		if (section) {
			section.scrollIntoView({
				block: 'start',
				behavior: 'smooth',
			});
		}
	};

	return (
		<header className={styles.header}>
			<LogoIcon className={styles.logo} />
			<nav className={styles.navigation}>
				<MenuLink
					label="Mission"
					onClick={() => handleScrollToSection('mission')}
				/>
				<MenuLink
					label="Fractionalization"
					onClick={() => handleScrollToSection('fractionalization')}
				/>
				<MenuLink
					label="Trading"
					onClick={() => handleScrollToSection('trading')}
				/>
				<MenuLink
					label="Liquidity pools"
					onClick={() => handleScrollToSection('liquidity-pools')}
				/>
				<MenuLink
					label="why erc-404"
					onClick={() => handleScrollToSection('why-404')}
				/>
			</nav>
			<Button
				link={process.env.NEXT_PUBLIC_WHITE_PAPER}
				wrapperClassName={styles.buttonWrapper}
				buttonClassName={styles.buttonContent}
				label="White paper"
			/>
		</header>
	);
};
