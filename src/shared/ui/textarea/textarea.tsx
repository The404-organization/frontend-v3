import clsx from 'clsx';
import styles from './textarea.module.css';
import { TextareaProps } from './textarea.props';

export const Textarea = ({ className, ...props }: TextareaProps) => {
	return <textarea className={clsx(styles.textarea, className)} {...props} />;
};
