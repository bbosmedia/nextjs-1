import Link from 'next/link'
import React from 'react'
import { Container } from '../../ui'
import './BlueFooterSection.css'

const BlueFooterSection = () => {
	return (
		<section className="blue-footer-section">
			<Container>
				<div className="blue-footer-inner">
					<h4>let's discuss making your interior like a dream place!</h4>
					<div className="right">
						<p>Contact us below to work together to build your amazing interior</p>
						<Link className='white-btn' href="#">Contact Us</Link>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default BlueFooterSection
