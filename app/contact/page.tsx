import React from 'react'
import { ContactLocation } from '../../app-src/components'
import ConactHeader from '../../app-src/components/ContactHeader'

const Contact = () => {
	return (
		<main className="contact-page">
			<ConactHeader />
			<ContactLocation />
		</main>
	)
}

export default Contact
