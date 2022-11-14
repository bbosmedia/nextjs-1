import React from 'react'
import { Container, SectionTitle } from '../../ui'
import './ContactLoaction.css'

const ContactLocation = () => {
	return (
		<section className="contact-loaction page-section">
			<Container>
				<SectionTitle>Location</SectionTitle>
				<div className="contact-loaction-inner">
					<div className="contact-location-main">
						<h3>Visit Our Stores</h3>
						<p>Find us at these locations.</p>
						<div>
							<h5>Email</h5>
							<p>dananz@gmail.com</p>
						</div>
						<div>
							<h5>Phone</h5>
							<p>+62 815 002 1000</p>
						</div>
					</div>
					<div className="contact-location-cards">
						<div className="contact-location-card">
							<h5 className="contact-location-card-title">Jakarta</h5>
							<p>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
						</div>
						<div className="contact-location-card">
							<h5 className="contact-location-card-title">Surakarta</h5>
							<p>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
						</div>
						<div className="contact-location-card">
							<h5 className="contact-location-card-title">Yogyakarta</h5>
							<p>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
						</div>
						<div className="contact-location-card">
							<h5 className="contact-location-card-title">Bandung</h5>
							<p>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default ContactLocation
