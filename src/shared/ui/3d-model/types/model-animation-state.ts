export interface Animation {
	duration: number;
	playing: boolean;
	handleStop: () => void;
	handleStart: () => void;
}

export interface ModelAnimationState {
	animations: Record<string, Animation>;

	registerAnimations: (
		animations: Record<string, Omit<Animation, 'playing'>>,
	) => void;
	playAnimations: (ids?: string[]) => void;
	stopAnimations: (ids?: string[]) => void;
}
