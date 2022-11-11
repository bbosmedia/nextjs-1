import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '../../../public/assets/images/site-logo.svg'
import { Container } from '../../ui'
import './Footer.css'
import { RiFacebookFill, RiInstagramLine, RiYoutubeFill } from 'react-icons/ri'
import { FaTiktok } from 'react-icons/fa'
import NewsletterSubscribe from '../NewsletterSubscribe'

const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<div className="footer-inner">
					<div className="footer-left">
						<Link href="/">
							<Image src={logo} width="126" height="54" alt="Site logo" />
						</Link>
						<h3>One of the best furniture agency.</h3>
					</div>
					<div className="footer-right">
						<span>Enter your email to get the laterst news</span>
						<NewsletterSubscribe />
						<div className="footer-socials">
							<span>Follow us On</span>
							<ul className="footer-socials-list">
								<li>
									<Link href="#">
										<RiFacebookFill />
									</Link>
								</li>
								<li>
									<Link href="#">
										<RiInstagramLine />
									</Link>
								</li>
								<li>
									<Link href="#">
										<FaTiktok />
									</Link>
								</li>
								<li>
									<Link href="#">
										<RiYoutubeFill />
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
