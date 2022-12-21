import Dot from '@imgs/dot.png'
import diamonds from '@imgs/diamonds.png'
import filledDot from '@imgs/diamonds.png'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'


export default function Tale() {

	let [playing, setPlaying] = useState(false)
	const [preview, setPreview] = useState(1)
	const [hasWindow, setHasWindow] = useState(false)
	useEffect(() => {
		if (typeof window !== 'undefined') {
			setHasWindow(true)
		}
	}, [])
	return (
		<>
			<section
				id="roadmap"
				className="py-20 pb-0  2xl:pl-20 pl-7 block md:flex justify-between gap-5"
			>
				<div className="lg:max-w-[1000px]   w-full mb-10 md:mb-0">
					<h3 className="text-2xl mb-[40px] md:text-3xl xl:text-4xl font-bold font-nexa text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
						What’s Coming Next?
					</h3>
					<div className="text-center w-[80%] ml-[50px] md:w-[100%] md:ml-[0px] ">
					<Image
								src={diamonds}
								alt="img"
								//layout="responsive"
								//  objectFit="contain"
								 width="400px"
								 height="400px"
							/>
							</div>
				</div>
				<div className="lg:max-w-[880px] w-full">
					<h2 className="text-2xl lg:text-3xl 2xl:text-[40px] font-bold leading-none font-nexa mb-10 xl:mb-20">
						1. NFT Collection
					</h2>
					<ul className="text-justify space-y-6 xl:space-y-10 mb-10 xl:mb-20 pr-4">
						<li className="font-light font-nexa text-black text-base  text-[16px]">
							- Majestic Bulls is our inaugural non-fungible token (NFT) series, offering exclusive access to ongoing projects and a private community within the Majestic ecosystem. The collection is scheduled to debut on the Magic Eden platform in December 2022, with a total supply of 3333 units, including 1000 reserved for the whitelist.
						</li>
						{/* <li className="font-light font-nexa text-black text-base  text-[16px]">
							- TMBs are built on Ethereum Blockchain and To be Listed on
							OpenSea.
						</li> */}
						<li className="font-light font-nexa text-black text-base  text-[16px]">
							- The Majestic Bulls collection is inspired by the powerful and majestic creatures that roam the kingdom of Bullsmania. Each NFT in the series captures the unique spirit and personality of these incredible beasts, making them a one-of-a-kind addition to any collection.
						</li>
						<li className="font-light font-nexa text-black text-base  text-[16px]">
							- In addition to the NFTs themselves, members of the Majestic Bulls community will also have access to exclusive content and experiences. This could include behind-the-scenes access to our projects, early access to new releases, and the opportunity to participate in special events and activities. 
							{/* <a href="https://forms.gle/M2g7EPNxdCHaKX3z9"
						target="_blank"
						rel="noreferrer"
						className=' font-bold font-nexa text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
							here</a>. */}
						</li>
						<li className="font-light font-nexa text-black text-base  text-[16px]">
							- To be eligible for the Majestic Bulls whitelist, you can either participate in a giveaway hosted by one of our partners or submit an application through the provided link. Previews of the collection can be found on our Twitter page 
							 <a href="https://twitter.com/MajesticBullNFT"
							target="_blank"
							rel="noreferrer" 
							className='font-bold font-nexa text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'> (@MajesticBullNFT)  </a> 
							or by watching the teaser videos below. Don't miss this exciting opportunity to be a part of the Majestic Bulls community! 
						{/* <a href="https://twitter.com/MajesticBullNFT"
							target="_blank"
							rel="noreferrer" 
							className='font-bold font-nexa text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'> @MajesticBullNFT</a> or teaser videos can be found below. */}
						</li>
					</ul>
				</div>
			</section>
			<p className="font-light font-nexa text-black underline text-2xl lg:text-[35px]  mb-[-13px] md:mb-10 xl:mb-16 text-center decoration-1 underline-offset-8">
				Teasers
			</p>
			<div className="w-[90%] md:w-[50%] ml-[5%] md:ml-[23%] pb-10">
				<div>
					<div className="flex justify-center items-center ">
						{hasWindow &&
							(preview === 1 ? (
								<ReactPlayer
									playing={playing}
									pip={true}
									muted={false}
									light={false}
									onEnded={() => setPlaying(false)}
									url={require('../../img/vid-1.mp4')}
									config={{ file: { attributes: { playsInline: true } } }}
									onClick={() => {
										if (playing) {
											return setPlaying(false)
										}
					
										setPlaying(true)
									}}
								/>
								
							) : preview === 2 ? (
								<ReactPlayer
									playing={playing}
									pip={true}
									muted={false}
									light={false}
									onEnded={() => setPlaying(false)}
									url={require('../../img/vid-2.mp4')}
									config={{ file: { attributes: { playsInline: true } } }}
									onClick={() => {
										if (playing) {
											return setPlaying(false)
										}
					
										setPlaying(true)
									}}
								/>
							) : preview === 3 ? (
								<ReactPlayer
									playing={playing}
									pip={true}
									muted={false}
									light={false}
									onEnded={() => setPlaying(false)}
									url={require('../../img/header.mp4')}
									config={{ file: { attributes: { playsInline: true } } }}
									onClick={() => {
										if (playing) {
											return setPlaying(false)
										}
					
										setPlaying(true)
									}}
								/>
							) 
							: preview === 4 ? (
								<ReactPlayer
									playing={playing}
									pip={true}
									muted={false}
									light={false}
									onEnded={() => setPlaying(false)}
									url={require('../../img/Electric_Preview.mp4')}
									config={{ file: { attributes: { playsInline: true } } }}
									onClick={() => {
										if (playing) {
											return setPlaying(false)
										}
					
										setPlaying(true)
									}}
								/>
							) 
							: preview === 5 ? (
								<ReactPlayer
									playing={playing}
									pip={true}
									muted={false}
									light={false}
									onEnded={() => setPlaying(false)}
									url={require('../../img/Solar_Preview.mp4')}
									config={{ file: { attributes: { playsInline: true } } }}
									onClick={() => {
										if (playing) {
											return setPlaying(false)
										}
					
										setPlaying(true)
									}}
								/>
							) 
							: preview === 6 ? (
								<ReactPlayer
									playing={playing}
									pip={true}
									muted={false}
									light={false}
									onEnded={() => setPlaying(false)}
									url={require('../../img/Light_Preview.mp4')}
									config={{ file: { attributes: { playsInline: true } } }}
									onClick={() => {
										if (playing) {
											return setPlaying(false)
										}
					
										setPlaying(true)
									}}
								/>
								
							) 
							:
							 (
								<></>
							))}

					<div className="flex items-center justify-center  top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 gap-5 group">
						{!playing ? (
							<button
								className=" absolute mr-[350px] md:mr-[600px] btn-play text-black w-16 h-16 lg:h-16 lg:w-16 opacity-100 flex items-center justify-center transition-all duration-200 rounded-full bg-white"
								open
								onClick={() => {
									if (!playing) {
										setPlaying(true)
									} else {
										setPlaying(false)
									}
								}}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 384 512"
									className="w-8 h-8 fill-current group-open:hidden block"
								>
									<path d="M24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13V38.13zM64.69 52.7C54.81 46.66 42.44 46.43 32.35 52.09C22.25 57.75 16 68.42 16 80V432C16 443.6 22.25 454.2 32.35 459.9C42.44 465.6 54.81 465.3 64.69 459.3L352.7 283.3C362.2 277.5 368 267.1 368 256C368 244.9 362.2 234.5 352.7 228.7L64.69 52.7z" />
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 320 512"
									className="w-8 h-8 fill-current group-open:block hidden"
								>
									<path d="M64 64C59.58 64 56 67.58 56 72v368C56 444.4 59.58 448 64 448s8-3.578 8-8V72C72 67.58 68.42 64 64 64zM256 64c-4.422 0-8 3.578-8 8v368c0 4.422 3.578 8 8 8s8-3.578 8-8V72C264 67.58 260.4 64 256 64z" />
								</svg>
							</button>
						) : (
							<></>
						)}
					</div>

					</div>
				</div>

				<div className="flex flex-col items-center justify-center  mt-8 ">
					<div className="grid gap-4 grid-cols-6">
						{preview === 1 ? (
							<Image src={filledDot} width="24px" height="24px" />
						) : (
							<Image
								src={Dot}
								width="24px"
								height="24px"
								onClick={() => {
									setPreview(1)
								}}
							/>
						)}
						{preview === 2 ? (
							<Image src={filledDot} width="24px" height="24px" />
						) : (
							<Image
								src={Dot}
								width="24px"
								height="24px"
								onClick={() => {
									setPreview(2)
								}}
							/>
						)}
						{preview === 3 ? (
							<Image src={filledDot} width="24px" height="24px" />
						) : (
							<Image
								src={Dot}
								width="24px"
								height="24px"
								onClick={() => {
									setPreview(3)
								}}
							/>
						)}

						{preview === 4 ? (
							<Image src={filledDot} width="24px" height="24px" />
						) : (
							<Image
								src={Dot}
								width="24px"
								height="24px"
								onClick={() => {
									setPreview(4)
								}}
							/>
						)}

						{preview === 5 ? (
							<Image src={filledDot} width="24px" height="24px" />
						) : (
							<Image
								src={Dot}
								width="24px"
								height="24px"
								onClick={() => {
									setPreview(5)
								}}
							/>
						)}

						{preview === 6 ? (
							<Image src={filledDot} width="24px" height="24px" />
						) : (
							<Image
								src={Dot}
								width="24px"
								height="24px"
								onClick={() => {
									setPreview(6)
								}}
							/>
						)}
					</div>
				</div>

				<div className="flex items-center gap-10 sm:gap-20 justify-end mt-10 md:mt-12 pr-4 xl:pr-10">
					<button
						className="nft-back p-2 disabled:opacity-40 "
						disabled={preview === 1}
						onClick={e => {
							if (preview != 1) {
								setPreview(preview - 1)
							} else e.disabled = true
						}}
					>
						<svg
							className="sm:w-10 w-6 h-6 sm:h-10 fill-current hover:p-1 p-1 "
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 320 512"
						>
							<path d="M206.7 464.6l-183.1-191.1C18.22 267.1 16 261.1 16 256s2.219-11.97 6.688-16.59l183.1-191.1c9.152-9.594 24.34-9.906 33.9-.7187c9.625 9.125 9.938 24.37 .7187 33.91L73.24 256l168 175.4c9.219 9.5 8.906 24.78-.7187 33.91C231 474.5 215.8 474.2 206.7 464.6z" />
						</svg>
					</button>
					<button
						className="nft-back p-2 disabled:opacity-40 "
						disabled={preview === 3}
						onClick={e => {
							if (preview != 3) {
								setPreview(preview + 1)
							} else e.disabled = true
						}}
					>
						<svg
							className="sm:w-10 w-6 h-6 sm:h-10 fill-current  hover:p-1 p-1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 320 512"
						>
							<path d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z" />
						</svg>
					</button>
				</div>
			</div>
		</>
	)
}
