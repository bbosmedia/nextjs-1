import React, { FC, PropsWithChildren } from 'react'
import './SectionTitle.css'

const SectionTitle: FC<PropsWithChildren> = ({ children }) => {
	return <h4 className="section-title">{children} <div className='section-title-line'></div></h4>
}

export default SectionTitle
