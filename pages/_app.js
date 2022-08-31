import Head from 'next/head'
import Image from 'next/image'

import React, { createContext, useReducer,useState  } from 'react'
import ScrollToTop from "react-scroll-to-top";


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
import TheDesign from './components/TheDesign/TheDesign'

import TheMajesticOnes from './components/TheMajesticOnes/TheMajesticOnes'

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
						<ScrollToTop smooth color="#000000" className='flex items-center justify-center' 
						viewBox="0 0 512 512"
						//svgPath="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"
						svgPath="M357.812,327.786c-7.482-9.101-20.926-10.414-30.027-2.931c-2.177,1.79-4.801,3.43-7.783,4.927V106.667
						c0-3.312-0.771-6.578-2.252-9.541l-42.667-85.333c-7.862-15.724-30.3-15.724-38.162,0l-42.667,85.333
						c-1.481,2.962-2.252,6.229-2.252,9.541v223.492c-2.799-1.458-5.226-3.056-7.195-4.798c-8.822-7.81-22.304-6.989-30.114,1.833
						c-7.81,8.822-6.989,22.304,1.833,30.114c11.941,10.571,30.577,17.992,51.986,22.28c0.258,0.06,0.51,0.134,0.772,0.185
						c2.906,0.562,5.875,1.055,8.874,1.507c0.221,0.034,0.44,0.069,0.661,0.102c0.953,0.141,1.909,0.277,2.87,0.406
						c0.845,0.115,1.694,0.221,2.544,0.327c1.075,0.133,2.153,0.26,3.236,0.379c0.978,0.108,1.958,0.211,2.942,0.307
						c0.694,0.068,1.388,0.136,2.085,0.198c0.722,0.064,1.446,0.121,2.171,0.179v86.158c-11.782,0-21.333,9.551-21.333,21.333
						S222.884,512,234.667,512h42.667c11.782,0,21.333-9.551,21.333-21.333s-9.551-21.333-21.333-21.333v-86.284
						c31.249-2.687,60.365-11.11,77.548-25.236C363.982,350.33,365.295,336.887,357.812,327.786z M234.669,340.357V111.703
						l21.333-42.667l21.333,42.667V340.17c-5.33,0.563-10.769,0.922-16.23,1.075c-0.362,0.01-0.724,0.016-1.086,0.024
						c-1.382,0.032-2.765,0.05-4.148,0.055c-0.477,0.002-0.954,0.001-1.431,0.001C247.701,341.302,241.09,340.979,234.669,340.357z"/>
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
