import React, { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import { MainButton } from '../../ui'
import './PortfolioPost.css'

interface IPortolioPost {
	id: number
	author: string
	authorImage: string | StaticImageData
	mainImage: string | StaticImageData
	job: string
	postText: string
}

const PortfolioPost: FC<IPortolioPost> = ({ author, mainImage, authorImage, job, id, postText }) => {
	return (
		<div className="portfolio-post" key={id}>
			<Image className="portfolio-post-main-image" loading="lazy" fill unoptimized src={mainImage} alt={author} />
			<div className="portfolio-post-info">
				<div className="portofolio-post-author-card">
					<Image src={authorImage} loading="lazy" fill unoptimized alt={author} />
					<div>
						<h5 className="portfolio-post-author-name">{author}</h5>
						<span className="portolio-post-author-job">{job}</span>
					</div>
				</div>
				<p className="portfolio-post-text">{postText}</p>
				<MainButton href={"#"}>Learn More</MainButton>
			</div>
		</div>
	)
}

export default PortfolioPost
