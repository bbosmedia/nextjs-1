import Link from 'next/link'
import React, { FC, PropsWithChildren } from 'react'
import './MainButton.css'

interface IMainButton {
	href: string
}

const MainButton: FC<PropsWithChildren<IMainButton>> = ({ href, children }) => {
	return (
		<Link className="main-btn" href={href}>
			{children}
		</Link>
	)
}

export default MainButton
