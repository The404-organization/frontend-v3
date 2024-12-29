import { useAnimations, useGLTF } from '@react-three/drei';
import { ThreeEvent, useLoader, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Group } from 'three';
import { useModelAnimation } from '../../hooks/use-model-animation';
import { Animation } from '../../types/model-animation-state';
import { ModelProps } from '../model/model.props';

const { playAnimations, stopAnimations, registerAnimations } =
	useModelAnimation.getStore();

export const ModelRender = ({
	modelSrc,
	textureSrc,
	initialRotate,
	scale,
}: Pick<ModelProps, 'modelSrc' | 'textureSrc' | 'initialRotate' | 'scale'> & {
	animationPlay: boolean;
}) => {
	const { animations: registeredAnimations } = useModelAnimation();
	const group = useRef<Group>(null);
	const { scene, animations } = useGLTF(modelSrc);
	const texture = useLoader(THREE.TextureLoader, textureSrc || '');
	const { actions } = useAnimations(animations, scene);
	const { camera } = useThree();

	const raycaster = new THREE.Raycaster();
	const mouse = new THREE.Vector2();

	const handleMouseMove = (event: ThreeEvent<PointerEvent>) => {
		if (!group.current) {
			return;
		}

		mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
		mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

		raycaster.setFromCamera(mouse, camera);
		const intersects = raycaster.intersectObject(scene, true);

		const playingAnimations = Object.entries(registeredAnimations)
			.filter(([_, animation]) => animation.playing)
			.map(([id]) => id);

		const keys = intersects.map(intersect => {
			if (!intersect.object.parent) {
				return '';
			}

			return intersect.object.parent.name;
		});

		stopAnimations(playingAnimations);
		playAnimations(keys);
	};

	useEffect(() => {
		if (!actions) {
			return;
		}

		const animations: Record<
			string,
			Omit<Animation, 'playing'>
		> = Object.entries(actions).reduce((acc, [key, animation]) => {
			if (!animation) {
				return acc;
			}

			const id = (animation as any)?._propertyBindings?.[0]?.binding?.node
				?.name;
			if (!id) {
				return acc;
			}

			Object.assign(acc, {
				[id]: {
					duration: (animation.getClip().duration || 0) * 1000,
					handleStop: () => animation?.stop(),
					handleStart: () => animation?.play(),
				},
			});

			return acc;
		}, {});

		registerAnimations(animations);
	}, [actions]);

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
		<group ref={group} onPointerMove={handleMouseMove}>
			<primitive object={scene} scale={scale || 1} />;
		</group>
	);
};
