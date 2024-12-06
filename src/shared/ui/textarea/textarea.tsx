import clsx from 'clsx';
import { Field } from 'formik';
import { outfitFont } from '../fonts';
import styles from './textarea.module.css';
import { TextareaProps } from './textarea.props';

export const Textarea = ({ className, ...props }: TextareaProps) => {
	return (
		<Field
			className={clsx(styles.textarea, outfitFont.className, className)}
			as="textarea"
			{...props}
		/>
	);
};
