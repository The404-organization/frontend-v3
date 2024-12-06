import styles from './menu-link.module.css';
import { MenuLinkProps } from './menu-link.props';

export const MenuLink = ({ label, onClick }: MenuLinkProps) => {
	return (
		<div className={styles.wrapper} onClick={onClick}>
			<p className={styles.label}>{label}</p>
			<div className={styles.line} />
		</div>
	);
};
