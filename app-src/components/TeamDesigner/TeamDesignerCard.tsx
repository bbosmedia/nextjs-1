import Image, { ImageProps } from 'next/image'
import React, { FC } from 'react'
import './TeamDesigner.css'


interface ITeamDesignerCard {
	image: ImageProps['src']
	name: string
	job: string
}

const TeamDesignerCard: FC<ITeamDesignerCard> = ({image, name, job}) => {
	return (
		<div className="team-designer-card">
			<Image src={image} fill unoptimized alt="Person" />
			<div className="card-info">
				<h5>{name}</h5>
				<p>{job}</p>
			</div>
		</div>
	)
}

export default TeamDesignerCard
