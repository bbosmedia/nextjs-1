/* eslint-disable @next/next/no-head-element */
import { BlueFooterSection, Footer, Navbar } from '../app-src/components'
import './global.css'

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width" />
				<title>Abbos Nurgulshanov</title>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
			</head>
			<body>
				<Navbar />
				{children}
				<BlueFooterSection />
				<Footer />
			</body>
		</html>
	)
}
