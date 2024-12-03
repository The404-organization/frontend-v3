import clsx from 'clsx';
import { Field } from 'formik';
import styles from './textarea.module.css';
import { TextareaProps } from './textarea.props';

export const Textarea = ({ className, ...props }: TextareaProps) => {
	return (
		<Field
			className={clsx(styles.textarea, className)}
			as="textarea"
			{...props}
		/>
	);
};
