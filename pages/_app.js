import Head from 'next/head'
import Image from 'next/image'

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


import '../styles/globals.css'

function LandingPage() {
	return (
		<>
			<Head>
				<title>Majestic Bulls</title>
			</Head>
			<div className="overflow-hidden">
				<Navigation />
				<div id="content">
					<Hero />
					<main>
						{/*<Minting />*/}
						<ShortDescription />
						<Tale />
						<TheMajesticOnes />
						<TheAlphas />
						<RoadMap />
						<InfoBox />
						<TheCounsil />
						<Footer />
					</main>
				</div>
			</div>
		</>
	)
}

export default LandingPage
