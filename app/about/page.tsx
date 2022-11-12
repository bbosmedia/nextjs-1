import React from 'react'
import { AbooutServiceSection, AboutAchievementSection, AboutHeader } from '../../app-src/components'
import './index.css'

const AboutPage = () => {
	return (
		<main className="about-page">
			<AboutHeader></AboutHeader>
			<AboutAchievementSection />
			<AbooutServiceSection />
		</main>
	)
}

export default AboutPage
