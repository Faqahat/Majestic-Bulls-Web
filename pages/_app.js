import Head from 'next/head'
//import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Waypoint } from 'react-waypoint'

import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import InfoBox from './components/Infobox/Infobox'
import Minting from './components/Minting/Minting'
import Navigation from './components/Navigation/Navigation.js'
import RoadMap from './components/RoadMap/RoadMap'
import ScrollToTop from "./components/ScrollToTop";
import ShortDescription from './components/ShortDescription/ShortDescription'
import Tale from './components/Tale/Tale'
import TheAlphas from './components/TheAlphas/TheAlphas'
import TheCounsil from './components/TheCounsil/TheCounsil'
import TheDesign from './components/TheDesign/TheDesign'
import TheMajesticOnes from './components/TheMajesticOnes/TheMajesticOnes'
import mixpanel from 'mixpanel-browser';
import '../styles/globals.css'

function LandingPage() {
	let [active, setActive] = useState('intro')

	
// or with require() syntax:
// const mixpanel = require('mixpanel-browser');

// Enabling the debug mode flag is useful during implementation,
// but it's recommended you remove it for production
mixpanel.init('bf037040a1efd8980192695d12547dae', {debug: true});

useEffect(()=>{
	setActive(active)
},[])
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
			<div className="overflow-hidden scrollbar-thin selection:bg-black selection:text-white">
				<Navigation active={active} />
				<Waypoint onEnter={() => setActive('intro')} />
				<Hero />
				<div id="content">
					<main>
						{/* <Minting /> */}
						<Waypoint onEnter={() => setActive('intro')} />
						<ScrollToTop/>
						<Waypoint onEnter={() => setActive('intro')} />
						<ShortDescription />
						<Waypoint onEnter={() => setActive('design')} />
						<TheDesign />
						<Waypoint onEnter={() => setActive('tale')} />
						<Tale />
						<Waypoint onEnter={() => setActive('majestic')} />
						<TheMajesticOnes />
						<Waypoint onEnter={() => setActive('omen')} />
						<TheAlphas />
						<Waypoint onEnter={() => setActive('WL')} />
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
