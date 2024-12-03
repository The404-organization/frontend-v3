import clsx from 'clsx';
import { Field } from 'formik';
import styles from './input.module.css';
import { InputProps } from './input.props';

export const Input = ({ className, ...props }: InputProps) => {
	return <Field className={clsx(styles.input, className)} {...props} />;
};
