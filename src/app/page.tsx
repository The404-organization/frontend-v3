import { FactionalizationSection } from '@/sections/fractionalization-section/fractionalization-section';
import { MissionSection } from '@/sections/mission-section/mission-section';
import { WelcomeSection } from '@/sections/welcome-section/welcome-section';

const HomePage = () => {
	return (
		<main>
			<WelcomeSection />
			<MissionSection />
			<FactionalizationSection />
		</main>
	);
};

export default HomePage;
