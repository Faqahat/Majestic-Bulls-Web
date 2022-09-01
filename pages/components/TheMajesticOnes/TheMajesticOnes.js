import b1 from '@imgs/b-1.png'
import b10 from '@imgs/b-10.png'
import b11 from '@imgs/b-11.png'
import b12 from '@imgs/b-12.png'
import b2 from '@imgs/b-2.png'
import b3 from '@imgs/b-3.png'
import b4 from '@imgs/b-4.png'
import b5 from '@imgs/b-5.png'
import b6 from '@imgs/b-6.png'
import b7 from '@imgs/b-7.png'
import b8 from '@imgs/b-8.png'
import b9 from '@imgs/b-9.png'
import img_magestic_ones from '@imgs/fire.png'
import Image from 'next/image'
//import Link from 'next/link'
import React, { useState } from 'react'

import Modal from '../Modal'
import SpecialOne from "./SpecialOne"

// import af from '../../img/arrow_forward_go_back_left_icon.png'
// import ar from '../../img/arrow_forward_go_next_right_icon.png'
// import opensea from '../../img/opensea_logo_icon.png'

function TheMajesticOnes() {
	const [showModal, setShowModal] = useState(false)
	const [imgName, setImgName] = useState()
	const [selected, setSelected] = useState(null)

	let tmo = [
		{
			name: 'The Devil',
			description:
				"The Devil, often known as Satan, tempts people to commit sin or believe lies. He has the power to arouse people's illicit passions. His presence does not constrain the scope of his abilities, giving them a nearly infinite range. The devil has the power to hinder lesser supernatural entities from using their powers, paralyzing all the other being in his path.",
			image: b1,

			specialPower: 'Temp People to Commit Sins',
			specialPowerIcon: '🔯',
			minted: false,
			openSeaLink: '',
		},
		{
			name: 'The Golden',
			description:
				"The golden, a divinely-gifted beast with superior strength.The golden is described as monstrous, as could be expected of a bull; Gigantic ,rugged and hulking.His power was too great for the mortals cause He has the ability to melt any metal. His supersonic power over metallic things causes his enemies' ear lobes to break and renders their hearing useless. Even he is capable of blowing their mind. He  is one of the most feared deities.",

			image: b2,
			specialPower: 'Melt any Metal',
			specialPowerIcon: '🌡️',
			minted: false,
			openSeaLink: '',
		},
		{

			name: 'The Plasma',
			description:
				'The sun bull, originally a deity of radiant purity, was more and more interpreted as a sun god. Anything that gets in his way will be burned by his intense fire.Every day, The sun bull ascends from a golden palace beneath the ocean and pilots his fiery chariot across the sky.He possesses the might of 100 suns.',
			image: b3,
			specialPower: 'Firey Death',
			specialPowerIcon: '☠️',
			minted: false,
			openSeaLink: '',

		},
		{
			name: 'The Electric',
			description:
				'The electric, master, and ruler of all the electricity. Everything that functions and is powered by electricity bows down before him. He is the king without a crown in a world that runs on technology. he is described as extremely strong with a violent temper.',
			image: b4,

			specialPower: 'Control Electronics',
			specialPowerIcon: '⚡',
			minted: false,
			openSeaLink: '',
		},
		{
			name: 'The Light',
			description:
				'The light , a legendary man-beast combining features of a Bovine and human,held the destructive power of lighting but also brought beneficial rain to agricultural land and would, therefore, be a powerful symbol of the force of nature.The light is among the most powerful diety as those who dread the darkness have never seen what the light can do.',
			image: b5,
			specialPower: 'Control Weather',
			specialPowerIcon: '🌦️',
			minted: false,
			openSeaLink: '',
		},
		{
			name: 'The Prisim',
			description:
				'The prism, he is  radiance of the glory  and the exact imprint of his nature. Besides being an immortal, one of his special powers was invisibility.It confers power over other people by being invisible to the naked eye.',
			image: b6,
			specialPower: 'Invisibility',
			specialPowerIcon: '🪞',
			minted: false,
			openSeaLink: '',

		},
		{
			name: 'The Metalic',
			description:
				'The metallic, he is powerless. but everyone is enamored with him because of his attractive, shining skin. he is eye candy. He is the strongest bull in the majestic bull series since love is the greatest force in the universe.',
			image: b7,

			specialPower: 'Love',
			specialPowerIcon: '💘',
			minted: false,
			openSeaLink: '',

		},
		{
			name: 'The Stone',
			description:
				"The Stone's skin resembles stone, giving him superhuman strength and endurance. His exceptional physical makeup enables him to lift almost one hundred tonnes, endure extremely high or low temperatures, and withstand powerful energy blasts and explosive detonations.",
			image: b8,

			specialPower: 'Toughness',
			specialPowerIcon: '🛡️',
			minted: false,
			openSeaLink: '',

		},
		{
			name: 'The Mage',
			description:
				"Mage typically resides in the fifth dimension, in the realm of the fantastical, far from reality. However, the fury that it brings upon his foes gives him a very substantial existence. The Fifth Dimension is your imagination. Mage has authority over everyone's imagination because he is the fifth dimension's potentate.",
			image: b9,

			specialPower: 'Time Travel',
			specialPowerIcon: '⏳',
			minted: false,
			openSeaLink: '',

		},
		{
			name: 'The Galaxy',
			description:
				"The galaxy can manipulate the motions of planets and asteroids throughout the cosmos, sending his adversaries into a tizzy. He has the ability to rain asteroids down on foes from space. Moreover, he has the power to alter gravity, raise sea levels, and trigger powerful floods by interfering with planets' motion. In order to govern the space-time continuum, bend reality, and alter time and space, he can modify gravity.",
			image: b10,

			specialPower: 'Meteor Shower',
			specialPowerIcon: '☄️',
			minted: false,
			openSeaLink: '',

		},
		{
			name: 'The Bolt',
			description:
				"According to legend, The thunder has a power equivalent to 10 million thunders. When there is warfare, the thunder can unleash destructive thunderstorms on the enemy. The capacity of the Thunder to control the thunderstorm at the tip of its stick makes him indeed one of the most powerful bulls in history. The Thunder is true 'Majestic'.",
			image: b11,

			specialPower: 'Thunderstorms',
			specialPowerIcon: '🌩️',
			minted: false,
			openSeaLink: '',

		},
		{
			name: 'The Sonar',
			description:
				"The Sonar is among the First Majestic Ones. It has the power to influence people's thoughts, perceptions, memories, emotions, and personalities. with the capacity to read thoughts up to 10 km away. One of the most feared Bulls in Bullsmania and its environs is the sonar. The Sonar is extremely valuable since it can gather intelligence by penetrating the thoughts of adversaries and debunking their strategies!",
			image: b12,

			specialPower: 'Read Minds',
			specialPowerIcon: '🧠',
			minted: false,
			openSeaLink: '',

		},
	]

	return (
		<section
			className="mt-12  max-w-[1750px] w-full px-5 mx-auto mb-20 md:mb-[170px] scroll-mt-28 xl:scroll-mt-40"
			id="majestic"
		>
			<div className="max-w-[1344px] w-full md:px-5 mx-auto text-center mb-12 md:mb-20">
				<div className="flex items-center  justify-center  mb-7 md:mb-16">
					<h2 className="text-xl md:text-[35px] text-black  font-light mt-[46px] md:mt-[37px] font-Abreto text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
						{'//'} <span className="font-bold text-black">The</span> Majestic
						Ones
					</h2>
					<span className="ml-[-13px]  ">
						<Image
							src={img_magestic_ones}
							alt="img"
							width="100"
							height="100"
							//layout="fill" // required
							// objectFit="contain" // change to suit
							// className="mt-[25px]"
						/>
					</span>
				</div>
				<p className="text-justify font-Abreto sm:text-[23px] font-normal leading-relaxed sm:leading-[40px] ">
					Majestic Bulls NFTS from our “The Majestic Ones” collection is
					exquisite. There are total of 12 TMOS which are minted randomly.{' '}
					<span className="color">
						read more in our{' '}
						<a href="#infobox">
							{' '}
							<strong> digest</strong>{' '}
						</a>
						..
					</span>
				</p>
			</div>

			<div className="w-full grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-[62px]">
				{tmo.map((e, i) => {
					return (
						<span
							onClick={() => {
								console.log('OpenModal')
								setShowModal(true)
								setSelected(i)
							}}
							key={i}
						>
							<SpecialOne info={e} />
						</span>
					)
				})}

				{showModal && (
					<Modal
						openModal={setShowModal}
						info={tmo[selected]}
						current={selected}
						total={tmo.length}
						setSelected={setSelected}
					/>
				)}
			</div>
		</section>
	)
}

export default TheMajesticOnes
