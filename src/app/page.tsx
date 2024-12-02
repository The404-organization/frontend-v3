import { FactionalizationSection } from '@/sections/fractionalization-section/fractionalization-section';
import { LiquidityPoolsSection } from '@/sections/liquidity-pools-section/liquidity-pools-section';
import { MissionSection } from '@/sections/mission-section/mission-section';
import { TeamSection } from '@/sections/team-section/team-section';
import { TradingSection } from '@/sections/trading-section/trading-section';
import { WelcomeSection } from '@/sections/welcome-section/welcome-section';
import { Why404Section } from '@/sections/why-404-section/why-404-section';

const HomePage = () => {
	return (
		<main>
			<WelcomeSection />
			<MissionSection />
			<FactionalizationSection />
			<TradingSection />
			<LiquidityPoolsSection />
			<Why404Section />
			<TeamSection />
		</main>
	);
};

export default HomePage;
