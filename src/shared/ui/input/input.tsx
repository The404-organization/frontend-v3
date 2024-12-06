import clsx from 'clsx';
import { Field } from 'formik';
import { outfitFont } from '../fonts';
import styles from './input.module.css';
import { InputProps } from './input.props';

export const Input = ({ className, ...props }: InputProps) => {
	return (
		<Field
			className={clsx(styles.input, outfitFont.className, className)}
			{...props}
		/>
	);
};
