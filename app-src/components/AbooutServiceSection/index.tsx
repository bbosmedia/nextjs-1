import React from 'react'
import { Container, SectionTitle } from '../../ui'
import AboutServiceCard from './AboutServiceCard'
import './AboutServiceSection.css'

const AboutServiceSection = () => {
	return (
		<section className="about-service">
			<Container>
				<SectionTitle>Service</SectionTitle>
				<h3>Why Choose Us</h3>
				<p className="about-service-text">Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
				<div className="about-service-boxes">
					<AboutServiceCard title="High Quality" text="Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations." />
					<AboutServiceCard title="Professional Designer" text="Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations." />
					<AboutServiceCard title="The Best Services" text="Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations." />
				</div>
			</Container>
		</section>
	)
}

export default AboutServiceSection
