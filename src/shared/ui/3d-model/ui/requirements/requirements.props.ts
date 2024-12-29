import { ReactNode } from 'react';
import { Requirement } from '../model/model.props';

export interface RequirementsProps {
	children: ReactNode;
	requirements: Requirement[];
	defaultRender?: ReactNode;
}
