import React from 'react'
import { HomeProductSection, ServicesHeader } from '../../app-src/components'
import SerivesAchievement from '../../app-src/components/ServicesAchievementSection'

const ServicesPage = () => {
	return (
		<main className="services-page">
			<ServicesHeader />
			<SerivesAchievement />
			<HomeProductSection />
		</main>
	)
}

export default ServicesPage
