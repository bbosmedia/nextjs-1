'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Container, MainButton } from '../../ui'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { IoCloseSharp } from 'react-icons/io5'
import logo from '../../../public/assets/images/site-logo.svg'
import './Navbar.css'
import { useEffect, useState } from 'react'

const Navbar = () => {
	const [sticky, setSticky] = useState(false)
	const [menu, setMenu] = useState(false)
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
					<div className={menu ? 'main-nav active' : 'main-nav'}>
						<button className="toggle toggle-close" onClick={() => setMenu(false)} type="button">
							<IoCloseSharp />
						</button>
						<ul className="nav-list">
							<li className="nav-item">
								<Link className="nav-link active" href="/" onClick={() => setMenu(false)}>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" href="/" onClick={() => setMenu(false)}>
									About Us
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" href="/" onClick={() => setMenu(false)}>
									Services
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" href="/" onClick={() => setMenu(false)}>
									Our Teams
								</Link>
							</li>
							<li className="nav-item">
								<MainButton href="/" onClick={() => setMenu(false)}>
									Contact Us
								</MainButton>
							</li>
						</ul>
					</div>
					<button className="toggle" onClick={() => setMenu(true)} type="button">
						<HiOutlineMenuAlt4 />
					</button>
				</div>
			</Container>
		</nav>
	)
}

export default Navbar
