import React from 'react'
import { Container, PageTitle } from '../../ui'
import image from '../../../public/assets/images/team-header.jpg'
import Image from 'next/image'
import './TeamHeader.css'

const TeamHeader = () => {
	return (
		<header className="team-header">
			<Container>
				<div className="team-header-inner">
					<PageTitle>Our Teams</PageTitle>
					<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
					<Image src={image} fill unoptimized alt="Our Team" />
				</div>
			</Container>
		</header>
	)
}

export default TeamHeader
