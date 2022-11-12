import React from 'react'
import { Container, SectionTitle } from '../../ui'
import './TeamDesigner.css'
import TeamDesignerCard from './TeamDesignerCard'
import image1 from '../../../public/assets/images/team/1.png'
import image2 from '../../../public/assets/images/team/2.png'
import image3 from '../../../public/assets/images/team/3.png'
import image4 from '../../../public/assets/images/team/4.png'
import image5 from '../../../public/assets/images/team/5.png'
import image6 from '../../../public/assets/images/team/6.png'
import image7 from '../../../public/assets/images/team/7.png'
import image8 from '../../../public/assets/images/team/8.png'

const TeamDesigner = () => {
	return (
		<div className="team-designer">
			<Container>
				<SectionTitle>Designer</SectionTitle>
				<h3>Creative Person</h3>
				<p className="text">Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
				<div className="team-designer-inner">
					<TeamDesignerCard image={image1} name="Shoo Phar Dhie" job="CEO" />
					<TeamDesignerCard image={image2} name="Shoo Phar Dhie" job="CEO" />
					<TeamDesignerCard image={image3} name="Shoo Phar Dhie" job="CEO" />
					<TeamDesignerCard image={image4} name="Shoo Phar Dhie" job="CEO" />
					<TeamDesignerCard image={image5} name="Shoo Phar Dhie" job="CEO" />
					<TeamDesignerCard image={image6} name="Shoo Phar Dhie" job="CEO" />
					<TeamDesignerCard image={image7} name="Shoo Phar Dhie" job="CEO" />
					<TeamDesignerCard image={image8} name="Shoo Phar Dhie" job="CEO" />
				</div>
			</Container>
		</div>
	)
}

export default TeamDesigner
