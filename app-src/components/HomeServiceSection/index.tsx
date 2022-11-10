import React from 'react'
import './HomeServiceSection.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Container, SectionTitle } from '../../ui'
import Image from 'next/image'
import image from '../../../public/assets/images/home-service.jpg'
import Link from 'next/link'

const HomeServiceSection = () => {
	return (
		<section className="home-service">
			<Container>
				<SectionTitle>Service</SectionTitle>
				<div className="home-service-info-box">
					<h3 className="home-service-title">attractive furniture with the best quality.</h3>
					<p className="home-service-body-text">Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
					<ul className="home-service-services-list">
						<li>
							<Link className="home-service-services-list-link" href="#">
								<div className="left">
									<h5>01</h5>
									<h5>Interior Design</h5>
								</div>
								<AiOutlineArrowRight />
							</Link>
						</li>
						<li>
							<Link className="home-service-services-list-link" href="#">
								<div className="left">
									<h5>02</h5>
									<h5>Consultant</h5>
								</div>
								<AiOutlineArrowRight />
							</Link>
						</li>
						<li>
							<Link className="home-service-services-list-link" href="#">
								<div className="left">
									<h5>03</h5>
									<h5>Construction Consultant</h5>
								</div>
								<AiOutlineArrowRight />
							</Link>
						</li>
					</ul>
				</div>
				<Image className="home-service-img" unoptimized src={image} fill alt="Home Service" />
			</Container>
		</section>
	)
}

export default HomeServiceSection
