import Head from 'next/head'
import Image from 'next/image'
import React, { createContext, useReducer } from 'react'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import InfoBox from './components/Infobox/Infobox'
import Minting from './components/Minting/Minting'
import Navigation from './components/Navigation/Navigation.js'
import RoadMap from './components/RoadMap/RoadMap'
import ShortDescription from './components/ShortDescription/ShortDescription'
import Tale from './components/Tale/Tale'
import TheAlphas from './components/TheAlphas/TheAlphas'
import TheCounsil from './components/TheCounsil/TheCounsil'
import TheMajesticOnes from './components/TheMajesticOnes/TheMajesticOnes'
import TheDesign from './components/TheDesign/TheDesign'

import '../styles/globals.css'

function LandingPage() {
	return (
		<>
			<Head>
				<title>Majestic Bulls</title>
				<link
					rel="icon"
					type="image/x-icon"
					href="static/bull_skull_footer.png"
				/>
				<link rel="shortcut icon" href="/static/bull_skull_footer.png" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/static/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/static/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/static/favicon-16x16.png"
				/>
			</Head>
			<div className="overflow-hidden">
				<Navigation />
				<Hero />
				<div id="content">
					<main>
						{/*<Minting />*/}
						<ShortDescription />
						<TheDesign />
						<Tale />
						<TheMajesticOnes />
						<TheAlphas />
						<RoadMap />
						<InfoBox />

						{/* <TheCounsil /> */}
						<Footer />
					</main>
				</div>
			</div>
		</>
	)
}

export default LandingPage
