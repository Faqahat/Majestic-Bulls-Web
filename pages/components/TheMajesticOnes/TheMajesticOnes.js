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
import SpecialOne from "./SpecialOne"
import Image from 'next/image'
//import Link from 'next/link'
import React, { useState } from 'react'
import Modal from '../Modal'

// import af from '../../img/arrow_forward_go_back_left_icon.png'
// import ar from '../../img/arrow_forward_go_next_right_icon.png'
// import opensea from '../../img/opensea_logo_icon.png'

function TheMajesticOnes() {
	const [showModal, setShowModal] = useState(false)
	const [imgName, setImgName] = useState()
	const [selected, setSelected] = useState(null) 

	let tmo = [
		{
			name: "The Devil",
			description: "The Devil, often known as Satan, tempts people to commit sin or believe lies. He has the power to arouse people's illicit passions. His presence does not constrain the scope of his abilities, giving them a nearly infinite range. The devil has the power to hinder lesser supernatural entities from using their powers, paralyzing all the other being in his path.",
			image: b1,
			specialPower: "Some Power",
			specialPowerIcon: "😈",
			minted : true,
			openSeaLink: "https://google.com"
		},
		{
			name: "The Golden",
			description: "The golden, a divinely-gifted beast with superior strength.The golden is described as monstrous, as could be expected of a bull; Gigantic ,rugged and hulking.His power was too great for the mortals cause He has the ability to melt any metal. His supersonic power over metallic things causes his enemies' ear lobes to break and renders their hearing useless. Even he is capable of blowing their mind. He  is one of the most feared deities.",
			image: b2,
			specialPower: "Some Power",
			specialPowerIcon: "😈",
			minted : false,
			openSeaLink: "https://google.com"
		},
		{
			name: "The PLasma",
			description: "The sun bull, originally a deity of radiant purity, was more and more interpreted as a sun god. Anything that gets in his way will be burned by his intense fire.Every day, The sun bull ascends from a golden palace beneath the ocean and pilots his fiery chariot across the sky.He possesses the might of 100 suns.",
			image: b3,
			specialPower: "Some Power",
			specialPowerIcon: "😈",
			minted : true,
			openSeaLink: "https://google.com"
		},
		{
			name: "The Electric",
			description: "The electric, master, and ruler of all the electricity. Everything that functions and is powered by electricity bows down before him. He is the king without a crown in a world that runs on technology. he is described as extremely strong with a violent temper.",
			image: b4,
			specialPower: "Some Power",
			specialPowerIcon: "😈",
			minted : true,
			openSeaLink: "https://google.com"
		},
		{
			name: "The Light",
			description: "The light , a legendary man-beast combining features of a Bovine and human,held the destructive power of lighting but also brought beneficial rain to agricultural land and would, therefore, be a powerful symbol of the force of nature.The light is among the most powerful diety as those who dread the darkness have never seen what the light can do.",
			image: b5,
			specialPower: "Some Power",
			specialPowerIcon: "😈",
			minted : true,
			openSeaLink: "https://google.com"
		},
		{
			name: "The Prisim",
			description: "The prism, he is  radiance of the glory  and the exact imprint of his nature. Besides being an immortal, one of his special powers was invisibility.It confers power over other people by being invisible to the naked eye.",
			image: b6,
			specialPower: "Some Power",
			specialPowerIcon: "😈",
			minted : true,
			openSeaLink: "https://google.com"
		},
		{
			name: "The Metalic",
			description: "The Thunder is said to have power of 10 Million Thunders. In Times of war The Thunder can cause havoc on enemies by Creating Thunder Storms. The History has proven that The Thunder is one of the most powerful Bull with ability to control of weather at tip of its stick The Thunder is Truly Majestic",
			image: b7,
			specialPower: "Some Power",
			specialPowerIcon: "😈",
			minted : true,
			openSeaLink: "https://google.com"
		},
		{
			name: "The Solar",
			description: "The solar's skin resembles stone, giving him superhuman strength and endurance. His exceptional physical makeup enables him to lift almost one hundred tonnes, endure extremely high or low temperatures, and withstand powerful energy blasts and explosive detonations.",
			image: b8,
			specialPower: "Some Power",
			specialPowerIcon: "😈",
			minted : true,
			openSeaLink: "https://google.com"
		},
		{
			name: "The Mage",
			description: "Mage typically resides in the fifth dimension, in the realm of the fantastical, far from reality. However, the fury that it brings upon his foes gives him a very substantial existence. The Fifth Dimension is your imagination. Mage has authority over everyone's imagination because he is the fifth dimension's potentate.",
			image: b9,
			specialPower: "Some Power",
			specialPowerIcon: "😈",
			minted : true,
			openSeaLink: "https://google.com"
		},
		{
			name: "The Galaxy",
			description: "The galaxy can manipulate the motions of planets and asteroids throughout the cosmos, sending his adversaries into a tizzy. He has the ability to rain asteroids down on foes from space. Moreover, he has the power to alter gravity, raise sea levels, and trigger powerful floods by interfering with planets' motion. In order to govern the space-time continuum, bend reality, and alter time and space, he can modify gravity.",
			image: b10,
			specialPower: "Some Power",
			specialPowerIcon: "😈",
			minted : true,
			openSeaLink: "https://google.com"
		},
		{
			name: "The Thunder",
			description: "According to legend, The thunder has a power equivalent to 10 million thunders. When there is warfare, the thunder can unleash destructive thunderstorms on the enemy. The capacity of the Thunder to control the thunderstorm at the tip of its stick makes him indeed one of the most powerful bulls in history. The Thunder is true 'Majestic'.",
			image: b11,
			specialPower: "Some Power",
			specialPowerIcon: "😈",
			minted : true,
			openSeaLink: "https://google.com"
		},
		{
			name: "The Sonar",
			description: "The Sonar is among the First Majestic Ones. It has the power to influence people's thoughts, perceptions, memories, emotions, and personalities. with the capacity to read thoughts up to 10 km away. One of the most feared Bulls in Bullsmania and its environs is the sonar. The Sonar is extremely valuable since it can gather intelligence by penetrating the thoughts of adversaries and debunking their strategies!",
			image: b12,
			specialPower: "Some Power",
			specialPowerIcon: "😈",
			minted : true,
			openSeaLink: "https://google.com"
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
					exquisite. There are total of 12 TMOS which are minted reandomly.{' '}
					
					<span className="color">
						read more in our <a href="#infobox"> <strong > digest</strong> </a>..
					</span>
				</p>
			</div>

			<div className="w-full grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-[62px]">
				
				{tmo.map((e,i)=>{
					return <span onClick={()=>{ console.log("OpenModal"); setShowModal(true); setSelected(i) }}  ><SpecialOne info={e} key={i} / ></span>

				})}
				
				
				{showModal && <Modal openModal={setShowModal} info={tmo[selected]} current={selected} total={tmo.length} setSelected={setSelected}/>}

				{/* {showModal ? (
					<>
						<div
							className="` absolute w-full  h-screen overflow-auto bg-black/70 z-50 p-5 md:p-10 grid items-center justify-center"
							id="popup"
						>
							<div className="` my-auto max-w-[868px] w-full mx-auto border-[10px] border-black/40 bg-white/20 backdrop-blur-3xl pt-8 md:px-9 p-6 md:pb-9">
								<h2 className="text-white text-2xl text-center font-nomral font-nexa sm:text-3xl lg:text-[42px] mb-9">
									The Majestic Ones
								</h2>
								<div className="flex flex-col sm:flex-row justify-between items-center gap-3">
									<div className="max-w-md w-full text-white">
										<h1
											className="text-3xl sm:text-4xl 2xl:text-[67px] font-normal font-nexa text-white mb-6 md:mb-12"
											style={{ textShadow: '10px 5px 1px rgba(0, 0, 0, 0.31)' }}
										>
											The Thunder
										</h1>
										<p className="text-base lg:text-xl 2xl:text-2xl 2xl:leading-tight font-nexa font-light">
											The Thunder is said to have power of 10 Million Thunders.
											In Times of war The Thunder can cause havoc on enemies by
											Creating Thunder Storms. The History has proven that The
											Thunder is one of the most powerful Bull with ability to
											control of weather at tip of its stick The Thunder is
											Truly “Majestic”
										</p>
									</div>
									<div className="max-w-xs w-full order-first sm:order-none">
										<Image
											src={imgName}
											alt="Thunder"
											className="object-contain w-3/5 sm:w-full block mx-auto sm:mx-0"
										/>
									</div>
								</div>

								<div className="flex flex-col sm:flex-row justify-between items-center gap-5 my-8 xl:my-14">
									<div className="max-w-[275px] w-full text-white">
										<p className="text-base text-white/40 before:content-[''] before:h-px before:w-full before:bg-white/40 grid grid-cols-[1fr_max-content] items-center gap-2">
											Special Power
										</p>
										<p className="text-right text-xl lg:text-2xl text-white font-light mt-4 md:mt-7">
											Thunder ⚡️
										</p>
									</div>
									<div className="max-w-[300px] w-full">
										<button className="bg-white flex items-center justify-between gap-3 text-black text-lg md:text-2xl font-bold font-nexa py-2 px-4 w-full border border-[#707070] shadow-normal hover:shadow-none transition-all duration-300">
											View on OpenSea
											<Image
												src={opensea}
												alt=""
												className="w-8 h-auto object-contain"
											/>
										</button>
									</div>
								</div>

								<div className="flex justify-between items-center gap-4">
									<button>
										<Image
											src={af}
											alt=""
											className="w-8 h-8 md:w-auto md:h-auto"
										/>
									</button>
									<button>
										<Image
											src={ar}
											alt=""
											className="w-8 h-8 md:w-auto md:h-auto"
										/>
									</button>
								</div>

								<button className="popup-close absolute top-5 right-5 text-white">
									<svg
										className="w-6 h-6 md:w-9 md:h-9 fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
										onClick={() => setShowModal(false)}
									>
										<path d="M180.7 180.7C186.9 174.4 197.1 174.4 203.3 180.7L256 233.4L308.7 180.7C314.9 174.4 325.1 174.4 331.3 180.7C337.6 186.9 337.6 197.1 331.3 203.3L278.6 256L331.3 308.7C337.6 314.9 337.6 325.1 331.3 331.3C325.1 337.6 314.9 337.6 308.7 331.3L256 278.6L203.3 331.3C197.1 337.6 186.9 337.6 180.7 331.3C174.4 325.1 174.4 314.9 180.7 308.7L233.4 256L180.7 203.3C174.4 197.1 174.4 186.9 180.7 180.7zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32z" />
									</svg>
								</button>
							</div>
						</div>
					</>
				) : null} */}
			</div>
		</section>
	)
}

export default TheMajesticOnes
