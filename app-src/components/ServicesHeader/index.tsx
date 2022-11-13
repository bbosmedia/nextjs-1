import React from 'react'
import { Container, PageTitle } from '../../ui'
import './ServicesPageHeader.css'
import Image from 'next/image'
import image from '../../../public/assets/images/services-page-header.jpg'

const ServicesHeader = () => {
	return (
		<header className="services-header">
			<Container>
				<div className="services-header-inner">
					<PageTitle>Services</PageTitle>
					<p className='page-text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
					<Image src={image} fill unoptimized alt="Services" />
				</div>
			</Container>
		</header>
	)
}

export default ServicesHeader
