import React from 'react'
import { Container, PageTitle } from '../../ui'
import './ContactHeader.css'

const ConactHeader = () => {
	return (
		<header className="contact-header">
			<Container>
				<div className="contact-header-inner">
					<PageTitle>Contact Us</PageTitle>
					<p className='page-text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
				</div>
				<form className="contact-form">
					<div className="name-lastname">
						<div className="name-controller">
							<label>First Name</label>
							<input type="text" placeholder="First Name" />
						</div>
						<div className="lastname-controller">
							<label>Last Name</label>
							<input type="text" placeholder="Last Name" />
						</div>
					</div>
					<div className="email-controller">
						<label>Email</label>
						<input type="email" placeholder="Email" />
					</div>
					<div className="phone-controller">
						<label>Phone Number</label>
						<div>
							<select name="countires">
								<option value="US">US</option>
								<option value="UK">UK</option>
								<option value="UZB">UZB</option>
							</select>
							<input type="email" placeholder="Phone Number" />
						</div>
					</div>
					<div className='message-controller'>
						<label>Message</label>
						<textarea placeholder='Your message' name="message" id="" cols={20} rows={5}></textarea>
					</div>
						<button className='form-button'>Send Message</button>
				</form>
			</Container>
		</header>
	)
}

export default ConactHeader
