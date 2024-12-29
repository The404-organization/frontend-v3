import { createStore } from '@/shared/lib/store';
import { ModelAnimationState } from '../types/model-animation-state';

export const useModelAnimation = createStore<ModelAnimationState>(
	(get, set) => ({
		animations: {},

		registerAnimations: animations => {
			set({
				animations: {
					...get().animations,
					...Object.fromEntries(
						Object.entries(animations).map(([key, value]) => [
							key,
							{ ...value, playing: false },
						]),
					),
				},
			});
		},
		playAnimations: ids => {
			const animations = get().animations;
			const playAnimations = ids
				? Object.entries(animations).filter(([key]) =>
						ids.includes(key),
					)
				: Object.entries(animations);

			for (const [id, animation] of playAnimations) {
				const isPlaying = get().animations[id].playing;

				if (isPlaying) {
					continue;
				}

				animation.handleStart();

				const countinuePlayingFn = (clear: () => void) => {
					const isPlaying = get().animations[id].playing;

					if (!isPlaying) {
						clear();
						animation.handleStop();
					}
				};

				const timeout = setTimeout(
					() => countinuePlayingFn(() => clearTimeout(timeout)),
					animation.duration,
				);
				const interval = setInterval(
					() => countinuePlayingFn(() => clearInterval(interval)),
					animation.duration,
				);
			}
		},
		stopAnimations: ids => {
			const animations = get().animations;
			const newAnimtaions = Object.fromEntries(
				Object.entries(animations).map(([key, value]) => [
					key,
					{
						...value,
						playing:
							!ids || ids.includes(key) ? false : value.playing,
					},
				]),
			);

			set({ animations: newAnimtaions });
		},
	}),
);
