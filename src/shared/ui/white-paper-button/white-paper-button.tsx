import { Button } from '../button/button';
import styles from './white-paper-button.module.css';

export const WhitePaperButton = () => {
	return (
		<Button
			link="https://404-project.gitbook.io/404-lite-paper/"
			wrapperClassName={styles.button}
			label="White paper"
		/>
	);
};
