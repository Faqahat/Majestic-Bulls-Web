import Head from 'next/head'
import Image from 'next/image'
import React, { createContext, useState } from 'react'

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
import { Waypoint } from 'react-waypoint'

import '../styles/globals.css'

function LandingPage() {
	let [active, setActive] = useState('intro')
	return (
		<>
			<Head>
				<title>Majestic Bulls</title>
				<link rel="icon" type="image/x-icon" href="static/favicon.png" />
				<link rel="shortcut icon" href="/static/favicon.png" />
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
				<Navigation active={active} />
				<Waypoint onEnter={() => setActive('intro')} />
				<Hero />
				<div id="content">
					<main>
						{/*<Minting />*/}
						<ShortDescription />
						<Waypoint onEnter={() => setActive('design')} />
						<TheDesign />
						<Waypoint onEnter={() => setActive('tale')} />
						<Tale />
						<Waypoint onEnter={() => setActive('majestic')} />
						<TheMajesticOnes />
						<Waypoint onEnter={() => setActive('alphas')} />
						<TheAlphas />
						<Waypoint onEnter={() => setActive('')} />
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
