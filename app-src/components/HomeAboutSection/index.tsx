import React from 'react'
import { Container, SectionTitle } from '../../ui'
import PortfolioPost from '../PortfolioPost'
import './HomeAboutSection.css'

const HomeAboutSection = () => {
	return (
		<section className="home-about">
			<Container>
				<SectionTitle>About</SectionTitle>
				<h3 className="home-about-main-text">“We're one of the best furniture agency. Prioritizing customers and making purchases easy are the hallmarks of our agency.”</h3>
				{/* <PortfolioPost id={1} job="CEO of Dananz" mainImage={require('../../../public/assets/images/portfolio-post/1.jpg')} author="Arga Danaan" authorImage={require('../../../public/assets/author.png')} postText="Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere."  /> */}
			</Container>
		</section>
	)
}

export default HomeAboutSection
