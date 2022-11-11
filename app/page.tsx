import { HomeAboutSection, HomeHeroSection, HomeMaterialSection, HomeProductSection, HomeServiceSection } from '../app-src/components'

export default function HomePage() {
	return (
		<main className="home-page">
			<HomeHeroSection />
			<HomeAboutSection />
			<HomeServiceSection />
			<HomeProductSection />
			<HomeMaterialSection />
		</main>
	)
}
