import React from 'react'
import { Container, PageTitle } from '../../ui'
import image from '../../../public/assets/images/about-page-header.jpg'
import Image from 'next/image'
import './AboutHeader.css'

const AboutHeader = () => {
	return (
		<header className="about-header">
			<Container>
				<div className="about-header-inner">
					<PageTitle>About</PageTitle>
					<p className='page-text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
					<Image src={image} fill unoptimized alt="Funriture" />
				</div>
			</Container>
		</header>
	)
}

export default AboutHeader
