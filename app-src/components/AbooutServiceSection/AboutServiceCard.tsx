import React from 'react'

const AboutServiceCard = ({ title, text }: { title: string; text: string }) => {
	return (
		<div className="about-service-box">
			<div className="circle"></div>
			<h5>{title}</h5>
			<p>{text}</p>
		</div>
	)
}

export default AboutServiceCard
