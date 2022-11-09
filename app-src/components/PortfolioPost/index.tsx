import { StaticImageData } from 'next/image'
import React, { FC } from 'react'
import { MainButton } from '../../ui'
import './PortfolioPost.css'

interface IPortolioPost {
	id: number
	author: string
	authorImage: string
	mainImage: string
	job: string
	postText: string
}

const PortfolioPost: FC<IPortolioPost> = ({ author, mainImage, authorImage, job, id, postText }) => {
	return (
		<div className="portfolio-post" key={id}>
			<img className="portfolio-post-main-image" src={mainImage} alt={author} />
			<div className="portfolio-post-info">
				<div className="portofolio-post-author-card">
					<img src={authorImage} alt={author} />
					<div>
						<h5 className="portfolio-post-author-name">{author}</h5>
						<span className="portolio-post-author-job">{job}</span>
					</div>
				</div>
                <p className='portfolio-post-text'>{postText}</p>
				<MainButton href={`protfolio/${id}`}>Learn More</MainButton>
			</div>
		</div>
	)
}

export default PortfolioPost
