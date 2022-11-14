import Image from 'next/image'
import React from 'react'
import { SectionTitle } from '../../ui'
import './AboutAchievementSection.css'
import image from '../../../public/assets/images/about-page-achievement.jpg'

const AboutAchievmentSection = () => {
	return (
		<section className="about-achievement page-section">
			<div className="container">
				<SectionTitle>Achievement</SectionTitle>
				<h3>Interior customization with Danaanz, best quality with professional workers</h3>
				<div className="about-achievement-inner">
					<Image src={image} fill unoptimized alt="About Achievement" />
					<div className="blue-box">
						<div>
							<h4 className="number">350+</h4>
							<span>Project Completed</span>
						</div>
						<div>
							<h4 className="number">23+</h4>
							<span>Professional Teams</span>
						</div>
						<div>
							<h4 className="number">15+</h4>
							<span>Years Experience</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutAchievmentSection
