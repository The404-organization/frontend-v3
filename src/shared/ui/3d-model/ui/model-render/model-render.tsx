import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { Group } from 'three';
import { ModelProps } from '../model/model.props';

export const ModelRender = ({
	modelSrc,
	textureSrc,
	initialRotate,
	scale,
}: Pick<ModelProps, 'modelSrc' | 'textureSrc' | 'initialRotate' | 'scale'> & {
	animationPlay: boolean;
}) => {
	const group = useRef<Group>(null);
	const { scene } = useGLTF(modelSrc);
	const texture = useLoader(THREE.TextureLoader, textureSrc || '');

	scene.traverse(child => {
		if (child instanceof THREE.Mesh) {
			child.material.map = texture;
		}
	});

	if (initialRotate?.x) {
		scene.rotation.x = initialRotate.x;
	}

	if (initialRotate?.y) {
		scene.rotation.y = initialRotate.y;
	}

	if (initialRotate?.z) {
		scene.rotation.z = initialRotate.z;
	}

	return (
		<group ref={group}>
			<primitive object={scene} scale={scale || 1} />;
		</group>
	);
};
