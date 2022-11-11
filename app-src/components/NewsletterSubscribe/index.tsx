'use client'
import React, { ReactEventHandler, useState } from 'react'
import Image from 'next/image'
import icon from '../../../public/assets/images/half-arrow-left.svg'
import './NewsletterSubscribe.css'

function NewsletterSubscribe() {
	const [email, setEmail] = useState('')
	const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
		e.preventDefault()
		console.log(email)
	}
	return (
		<form className="newsletter-subscribe-form" onSubmit={(e) => handleSubmit(e)}>
			<div className="newsletter-subscribe-controller">
				<input type="email" value={email} placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
				<button>
					<Image src={icon} fill unoptimized alt="Right Arrow Icon" />
				</button>
			</div>
		</form>
	)
}

export default NewsletterSubscribe
