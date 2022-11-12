import React from 'react'
import { TeamDesigner, TeamHeader } from '../../app-src/components'
import AboutServiceSection from '../../app-src/components/AbooutServiceSection'

const Team = () => {
	return (
		<main>
			<TeamHeader />
			<TeamDesigner />
			<AboutServiceSection />
		</main>
	)
}

export default Team
