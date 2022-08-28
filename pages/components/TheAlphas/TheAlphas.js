import Image from 'next/image'

import img_alpha_png from '@imgs/alpha.png'
import img_alpha_heading_png from '@imgs/alpha-heading.png'
import img_coffee_png from '@imgs/coffee-cup.png'
import img_online_learning from '@imgs/online-learning.png'
import img_hoodie from '@imgs/hoodie.png'
import img_bomber from '@imgs/bomb (1).png'
import img_checklist from '@imgs/checklist.png'
import img_arrow from '@imgs/arrow.png'
function TheAlphas() {
	return (
		<section
			id="alpha"
			className="scroll-mt-28 xl:scroll-mt-40 w-full bg-black grid grid-cols-1 xl:grid-cols-[minmax(400px,810px),minmax(450px,1140px)]"
		>
			<Image
				src={img_alpha_png}
				alt="img"
				className="w-full lg:aspect-video xl:aspect-auto xl:h-full "
				// height="100%"
				// width="100%"
			/>
			<div className="w-full px-5 sm:px-12 2xl:px-[90px] py-12">
				<div className="flex items-center md:items-end gap-2 sm:gap-5 mb-11 sm:mb-[65px]">
					<h2 className="text-3xl sm:text-[45px] text-white leading-[70px] font-light font-Abreto text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
						{'//'} <span className="font-bold text-white">The</span> Alpha Bulls
					</h2>
					<Image
						src={img_alpha_heading_png}
						alt="img"
						className="w-12 md:w-20 xl:w-auto xl:h-20 sm:h-auto "
						height="65"
						width="65"
					/>
				</div>
				<ul className="mb-[40px] space-y-2 md:space-y-0">
					<li className="text-white font-normal font-pt-mono text-base md:text-xl 2xl:text-[24px] 2xl:leading-[40px]">
						Alpha Bulls Club is a group of TOP HODLRS.
					</li>
					<li className="text-white font-normal font-pt-mono text-base md:text-xl 2xl:text-[24px] 2xl:leading-[40px]">
						Alpha Group members get exclusive access to XYZ features.
					</li>
					<li className="text-white font-normal font-pt-mono text-base md:text-xl 2xl:text-[24px] 2xl:leading-[40px]">
						Alpha Bulls get free Starbucks Coupon On Every Alpha Session.
					</li>
					<li className="text-white font-normal font-pt-mono text-base md:text-xl 2xl:text-[24px] 2xl:leading-[40px]">
						12 Slots of Alpha Bulls Club are reserved for HODLRs of The Majestic
						Ones.
					</li>
				</ul>
				<div>
					<p className="text-3xl md:text-[30px] underline text-[#717171] font-light font-nexa underline-offset-2">
						Perks
					</p>
					<div className="grid sm:grid-cols-2 gap-10 sm:gap-6 xl:gap-10 w-full mt-5">
						<div className="flex items-center gap-4">
							<Image
								src={img_coffee_png}
								alt="img"
								className="w-11 sm:w-auto h-auto object-contain"
								height="50"
								width="50"
							/>
							<p className="text-xl xl:text-[22px] font-nexa font-light leading-9 text-white">
								Free Coffees (i)
							</p>
						</div>
						<div className="flex items-center gap-4">
							<Image
								src={img_online_learning}
								alt="img"
								className="w-11 sm:w-auto h-auto object-contain"
								height="50"
								width="50"
							/>
							<p className="text-xl xl:text-[22px] font-nexa font-light leading-9 text-white">
								Exclusive Sessions
							</p>
						</div>
						<div className="flex items-center gap-4">
							<Image
								src={img_hoodie}
								alt="img"
								className="w-11 sm:w-auto h-auto object-contain"
								height="50"
								width="50"
							/>
							<p className="text-xl xl:text-[22px] font-nexa font-light leading-9 text-white">
								Exclusive Merch
							</p>
						</div>
						<div className="flex items-center gap-4">
							<Image
								src={img_bomber}
								alt="img"
								className="w-11 sm:w-auto h-auto object-contain"
								height="50"
								width="50"
							/>
							<p className="text-xl xl:text-[22px] font-nexa font-light leading-9 text-white">
								Airdrop of Utility Token
							</p>
						</div>
						<div className="flex items-center gap-4">
							<Image
								src={img_checklist}
								alt="img"
								className="w-11 sm:w-auto h-auto object-contain"
								height="50"
								width="50"
							/>
							<p className="text-xl xl:text-[22px] font-nexa font-light leading-9 text-white">
								W/L in Future Projects
							</p>
						</div>
						<a
							href="#"
							className="text-xl xl:text-[22px] font-nexa font-light leading-9 text-white underline inline-block"
						>
							And more…
						</a>
					</div>
					<div className="flex justify-center mt-32">
						<button className="bg-white md:max-w-[250px] md:w-full md:h-[60px] text-xl md:text-[30px] text-black font-bold font-nexa px-10 py-4 md:p-0 md:leading-[55px] flex justify-center items-center gap-3 hover:-translate-y-1 hover:scale-110 duration-300">
							Join Club
							<Image
								src={img_arrow}
								alt="arrow"
								className="w-7 md:w-auto h-auto object-contain"
								height="40"
								width="40"
							/>
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TheAlphas
