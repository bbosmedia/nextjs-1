import Link from 'next/link'
import React, { FC, PropsWithChildren, HTMLProps } from 'react'
import './MainButton.css'

interface IMainButton {
	href: string
	onClick?: () => void
}

const MainButton: FC<PropsWithChildren<IMainButton>> = ({ href, children, onClick }) => {
	return (
		<Link className="main-btn" href={href} onClick={onClick}>
			{children}
		</Link>
	)
}

export default MainButton
