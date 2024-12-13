import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface LocationIconProps
	extends Omit<
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
		'title'
	> {
	color: 'purple' | 'blue';
	title: {
		label: string;
		style: 'default' | 'reverse';
	};
}
