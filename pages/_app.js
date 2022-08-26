import Image from 'next/image'
import '../styles/globals.css'

import Head from 'next/head'
import Navigation from './components/Navigation/Navigation.js'
import Hero from './components/Hero/Hero'
import Minting from './components/Minting/Minting'
import Tale from './components/Tale/Tale'
import TheAlphas from './components/TheAlphas/TheAlphas'
import TheMajesticOnes from './components/TheMajesticOnes/TheMajesticOnes'
import RoadMap from './components/RoadMap/RoadMap'
import InfoBox from './components/Infobox/Infobox'
import TheCounsil from './components/TheCounsil/TheCounsil'
import Footer from './components/Footer/Footer'
import ShortDescription from './components/ShortDescription/ShortDescription'

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
						<TheAlphas />
						<TheMajesticOnes />
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
