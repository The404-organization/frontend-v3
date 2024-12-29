import { useEffect, useState } from 'react';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { RequirementsProps } from './requirements.props';

export const Requirements = ({
	children,
	requirements,
	defaultRender,
}: RequirementsProps) => {
	const [webGLSupported, setWebGLSupported] = useState<boolean>(true);
	const [requirementsMet, setRequirementsMet] = useState<boolean>(true);

	useEffect(() => {
		if (!WebGL.isWebGL2Available()) {
			setWebGLSupported(false);
			return;
		}

		for (const requirement of requirements || []) {
			if (requirement.type === 'RAM') {
				if (
					!('deviceMemory' in window.navigator) ||
					typeof window.navigator.deviceMemory !== 'number'
				) {
					setRequirementsMet(false);
					return;
				}

				if (window.navigator.deviceMemory < requirement.valueGB) {
					setRequirementsMet(false);
					return;
				}
			}
		}
	}, []);

	if (!webGLSupported || !requirementsMet) {
		if (defaultRender) {
			return defaultRender;
		}

		return null;
	}

	return children;
};
