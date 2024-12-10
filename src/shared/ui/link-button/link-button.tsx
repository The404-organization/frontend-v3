import { Button } from '../button/button';
import styles from './link-button.module.css';
import { LinkButtonProps } from './link-button.props';

export const LinkButton = ({ label, url }: LinkButtonProps) => {
	return <Button wrapperClassName={styles.button} label={label} link={url} />;
};
