import React, { FC } from 'react'
import Image, { ImageProps } from 'next/image'


interface IServicesAchievementCard {
	image: ImageProps['src']
	title: string
	text: string
}

const ServicesAchievementCard: FC<IServicesAchievementCard> = ({ image, title, text }) => {
	return (
		<div className="serivces-achievement-card">
			<Image src={image} fill unoptimized alt="" />
			<div className="serivces-achievement-card-info">
				<h5>{title}</h5>
				<p>{text}</p>
			</div>
		</div>
	)
}

export default ServicesAchievementCard
