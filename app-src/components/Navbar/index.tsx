'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Container, MainButton } from '../../ui'
import logo from '../../../public/assets/images/site-logo.svg'
import './Navbar.css'
import { useEffect, useState } from 'react'

const Navbar = () => {
	const [sticky, setSticky] = useState(false)
	const scroll = () => {
		if (window.scrollY > 10) {
			setSticky(true)
		} else {
			setSticky(false)
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', scroll)
	}, [])
	return (
		<nav className={sticky ? 'navbar sticky' : 'navbar'}>
			<Container>
				<div className="navbar-inner">
					<Link href="/">
						<Image src={logo} width="126" height="54" alt="Site logo" />
					</Link>
					<div className="main-nav">
						<ul className="nav-list">
							<li className="nav-item">
								<Link className="nav-link active" href="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" href="/">
									About Us
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" href="/">
									Services
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" href="/">
									Our Teams
								</Link>
							</li>
							<li className="nav-item">
								<MainButton href="/">Contact Us</MainButton>
							</li>
						</ul>
					</div>
				</div>
			</Container>
		</nav>
	)
}

export default Navbar
