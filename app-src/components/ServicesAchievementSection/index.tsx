import React from 'react'
import { Container, SectionTitle } from '../../ui'
import ServicesAchievementCard from './ServicesAchievementCard'
import './ServicesAchievementSection.css'
import image1 from '../../../public/assets/images/services-achievment/1.jpg'
import image2 from '../../../public/assets/images/services-achievment/2.jpg'
import image3 from '../../../public/assets/images/services-achievment/3.jpg'

const SerivesAchievement = () => {
	return (
		<section className="services-achievement">
			<Container>
				<SectionTitle>Achievement</SectionTitle>
				<div className="services-achievement-inner">
					<ServicesAchievementCard image={image1} title="Interior design" text="Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations." />
					<ServicesAchievementCard image={image2} title="Consultant" text="Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations." />
					<ServicesAchievementCard image={image3} title="Construction consultant" text="Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations." />
				</div>
			</Container>
		</section>
	)
}

export default SerivesAchievement
