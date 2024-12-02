import clsx from 'clsx';
import styles from './input.module.css';
import { InputProps } from './input.props';

export const Input = ({ className, ...props }: InputProps) => {
	return <input className={clsx(styles.input, className)} {...props} />;
};