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
import img_magestic_ones from '@imgs/majestic-one.png'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import af from '../../img/arrow_forward_go_back_left_icon.png'
import ar from '../../img/arrow_forward_go_next_right_icon.png'
import opensea from '../../img/opensea_logo_icon.png'

function TheMajesticOnes() {
	const [showModal, setShowModal] = useState(false)
	const [imgName, setImgName] = useState()
	console.log(imgName)
	return (
		<section
			className="mt-12  max-w-[1750px] w-full px-5 mx-auto mb-20 md:mb-[170px] scroll-mt-28 xl:scroll-mt-40"
			id="majestic"
		>
			<div className="max-w-[1344px] w-full md:px-5 mx-auto text-center mb-12 md:mb-20">
				<div className="flex items-center md:items-end justify-center  mb-7 md:mb-16">
					<h2 className="text-3xl md:text-[35px] text-black  font-light sm:pt-14 font-Abreto ">
						{'//'} <span className="font-bold">The</span> Majestic Ones
					</h2>
					<Image
						src={img_magestic_ones}
						alt="img"
						className="w-12 md:w-auto h-auto object-contain pb-1"
						height="100"
						width="100"
					/>
				</div>
				<p className="font-Abreto sm:text-[23px] font-normal leading-relaxed sm:leading-[40px] ">
					Majestic Bulls NFTS from our “The Majestic Ones” collection is
					exquisite. There are total of 12 TMOS which are minted reandomly.{' '}
					<br />
					<span className="color">
						read more in our <strong>digest</strong>..
					</span>
				</p>
			</div>

			<div className="w-full grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-[62px]">
				<div className="relative hover:transform hover:-translate-y-2 transition-all duration-300">
					<a href="#popup" className="open-popup inline-block">
						<p className="mb-1 text-lg md:text-[20px] text-link text-[#9d9d9d] text-right sm:pr-10">
							{'//'} The Devil Bull
						</p>
						<Image
							src={b1}
							alt="img"
							className="w-96 h-auto object-contain"
							height="500"
							width="500"
							onClick={() => {
								setShowModal(true)
								setImgName(b1)
							}}
						/>
						<p className="text-sm sm:text-xl lg:text-[24px] font-bold sm:leading-[27px] bg-black text-white inline-block p-1 sm:p-1.5 transform rotate-[30deg] absolute top-12 sm:top-14 md:top-[70px] -right-[2px]">
							Minted!
						</p>
					</a>
				</div>
				<div className="relative hover:transform hover:-translate-y-2 transition-all duration-300">
					<a href="#popup" className="open-popup inline-block">
						<p className="mb-1 text-lg md:text-[20px] text-link text-[#9d9d9d] text-right sm:pr-10">
							{'//'} The Golden
						</p>
						<Image
							src={b2}
							alt="img"
							className="w-full h-auto object-contain"
							height="500"
							width="500"
							onClick={() => {
								setShowModal(true)
								setImgName(b2)
							}}
						/>
					</a>
				</div>

				<div className="relative hover:transform hover:-translate-y-2 transition-all duration-300">
					<a href="#popup" className="open-popup inline-block">
						<p className="mb-1 text-lg md:text-[20px] text-link text-[#9d9d9d] text-right sm:pr-10">
							{'//'} The Sun Bull
						</p>
						<Image
							src={b3}
							alt="img"
							className="w-full h-auto object-contain"
							height="500"
							width="500"
							onClick={() => {
								setShowModal(true)
								setImgName(b3)
							}}
						/>
					</a>
				</div>

				<div className="relative hover:transform hover:-translate-y-2 transition-all duration-300">
					<a href="#popup" className="open-popup inline-block">
						<p className="mb-1 text-lg md:text-[20px] text-link text-[#9d9d9d] text-right sm:pr-10">
							{'//'} The Electric
						</p>
						<Image
							src={b4}
							alt="img"
							className="w-[200px] h-auto object-contain"
							height="500"
							width="500"
							onClick={() => {
								setShowModal(true)
								setImgName(b4)
							}}
						/>
					</a>
				</div>

				<div className="relative hover:transform hover:-translate-y-2 transition-all duration-300">
					<a href="#popup" className="open-popup inline-block">
						<p className="mb-1 text-lg md:text-[20px] text-link text-[#9d9d9d] text-right sm:pr-10">
							{'//'} The Light
						</p>
						<Image
							src={b5}
							alt="img"
							className="w-full h-auto object-contain"
							height="500"
							width="500"
							onClick={() => {
								setShowModal(true)
								setImgName(b5)
							}}
						/>
						<p className="text-sm sm:text-xl lg:text-[24px] font-bold sm:leading-[27px] bg-black text-white inline-block p-1 sm:p-1.5 transform rotate-[30deg] absolute top-12 sm:top-14 md:top-[70px] -right-[2px]">
							Minted!
						</p>
					</a>
				</div>

				<div className="relative hover:transform hover:-translate-y-2 transition-all duration-300">
					<a href="#popup" className="open-popup inline-block">
						<p className="mb-1 text-lg md:text-[20px] text-link text-[#9d9d9d] text-right sm:pr-10">
							{'//'} The Prism
						</p>
						<Image
							src={b6}
							alt="img"
							className="w-full h-auto object-contain"
							height="500"
							width="500"
							onClick={() => {
								setShowModal(true)
								setImgName(b6)
							}}
						/>
					</a>
				</div>

				<div className="relative hover:transform hover:-translate-y-2 transition-all duration-300">
					<a href="#popup" className="open-popup inline-block">
						<p className="mb-1 text-lg md:text-[20px] text-link text-[#9d9d9d] text-right sm:pr-10">
							{'//'} The Metallic
						</p>
						<Image
							src={b7}
							alt="img"
							className="w-full h-auto object-contain"
							height="500"
							width="500"
							onClick={() => {
								setShowModal(true)
								setImgName(b7)
							}}
						/>
					</a>
				</div>

				<div className="relative hover:transform hover:-translate-y-2 transition-all duration-300">
					<a href="#popup" className="open-popup inline-block">
						<p className="mb-1 text-lg md:text-[20px] text-link text-[#9d9d9d] text-right sm:pr-10">
							{'//'} The Solar
						</p>
						<Image
							src={b8}
							alt="img"
							className="w-full h-auto object-contain"
							height="500"
							width="500"
							onClick={() => {
								setShowModal(true)
								setImgName(b8)
							}}
						/>
						<p className="text-sm sm:text-xl lg:text-[24px] font-bold sm:leading-[27px] bg-black text-white inline-block p-1 sm:p-1.5 transform rotate-[30deg] absolute top-12 sm:top-14 md:top-[70px] -right-[2px]">
							Minted!
						</p>
					</a>
				</div>

				<div className="relative hover:transform hover:-translate-y-2 transition-all duration-300">
					<a href="#popup" className="open-popup inline-block">
						<p className="mb-1 text-lg md:text-[20px] text-link text-[#9d9d9d] text-right sm:pr-10">
							{'//'} The Mage
						</p>
						<Image
							src={b9}
							alt="img"
							className="w-full h-auto object-contain"
							height="500"
							width="500"
							onClick={() => {
								setShowModal(true)
								setImgName(b9)
							}}
						/>
					</a>
				</div>

				<div className="relative hover:transform hover:-translate-y-2 transition-all duration-300">
					<a href="#popup" className="open-popup inline-block">
						<p className="mb-1 text-lg md:text-[20px] text-link text-[#9d9d9d] text-right sm:pr-10">
							{'//'} The Galaxy
						</p>
						<Image
							src={b10}
							alt="img"
							className="w-full h-auto object-contain"
							height="500"
							width="500"
							onClick={() => {
								setShowModal(true)
								setImgName(b10)
							}}
						/>
					</a>
				</div>

				<div className="relative hover:transform hover:-translate-y-2 transition-all duration-300">
					<a href="#popup" className="open-popup inline-block">
						<p className="mb-1 text-lg md:text-[20px] text-link text-[#9d9d9d] text-right sm:pr-10">
							{'//'} The Thunder
						</p>
						<Image
							src={b11}
							alt="img"
							className="w-full h-auto object-contain"
							height="500"
							width="500"
							onClick={() => {
								setShowModal(true)
								setImgName(b11)
							}}
						/>
						<p className="text-sm sm:text-xl lg:text-[24px] font-bold sm:leading-[27px] bg-black text-white inline-block p-1 sm:p-1.5 transform rotate-[30deg] absolute top-12 sm:top-14 md:top-[70px] -right-[2px]">
							Minted!
						</p>
					</a>
				</div>

				<div className="relative hover:transform hover:-translate-y-2 transition-all duration-300">
					<a href="#popup" className="open-popup inline-block">
						<p className="mb-1 text-lg md:text-[20px] text-link text-[#9d9d9d] text-right sm:pr-10">
							{'//'} The Sonar
						</p>
						<Image
							src={b12}
							alt="img"
							className="w-full h-auto object-contain"
							height="500"
							width="500"
							onClick={() => {
								setShowModal(true)
								setImgName(b12)
							}}
						/>
					</a>
				</div>

				{showModal ? (
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
				) : null}
			</div>
		</section>
	)
}

export default TheMajesticOnes
