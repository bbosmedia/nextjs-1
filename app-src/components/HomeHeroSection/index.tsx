import React from 'react'
import { Container } from '../../ui'
import Image from 'next/image'
import image from '../../../public/assets/images/home-hero.jpg'
import './HomeHeroSection.css'

const HomeHeroSection = () => {
	return (
		<section className="home-hero-section">
			<Container>
				<div className="home-hero-top">
					<h1 className="home-hero-title">Design your interor with high quality.</h1>
					<div className="home-hero-line"></div>
					<div className="home-hero-left">
						<div className="home-hero-left-boxes">
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
						<div className="home-hero-left-text">
							<span>2022</span>
							<span>ALL RIGHT RESERVED</span>
						</div>
					</div>
				</div>
				<Image className="home-hero-image" src={image} unoptimized fill alt="Home Hero" />
			</Container>
		</section>
	)
}

export default HomeHeroSection
