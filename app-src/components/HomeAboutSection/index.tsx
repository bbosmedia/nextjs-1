import React from 'react'
import { Container, SectionTitle } from '../../ui'
import PortfolioPost from '../PortfolioPost'
import mainImage from "../../../public/assets/images/portfolio-post/1.jpg"
import authorImage from "../../../public/assets/images/author.png"
import './HomeAboutSection.css'

const HomeAboutSection = () => {
	return (
		<section className="home-about">
			<Container>
				<SectionTitle>About</SectionTitle>
				<h3 className="home-about-main-text">“We're one of the best furniture agency. Prioritizing customers and making purchases easy are the hallmarks of our agency.”</h3>
				<PortfolioPost id={1} job="CEO of Dananz" mainImage={mainImage} author="Arga Danaan" authorImage={authorImage} postText="Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere."  />
			</Container>
		</section>
	)
}

export default HomeAboutSection
