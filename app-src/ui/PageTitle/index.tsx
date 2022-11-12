import React, { FC, PropsWithChildren } from 'react'
import './PageTitle.css'

const PageTitle: FC<PropsWithChildren> = ({ children, ...props }) => {
	return (
		<h2 className="page-title" {...props}>
			{children}
		</h2>
	)
}

export default PageTitle
