import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	label: string;
	link?: string;
	loading?: boolean;
	loaderClassName?: string;
	wrapperClassName?: string;
	buttonClassName?: string;
}
