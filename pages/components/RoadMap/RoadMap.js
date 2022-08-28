import React, { useState, useEffect } from 'react'
import filledDot from '@imgs/rec.png'
import Dot from '@imgs/norec.png'
import Image from 'next/image'
import ReactPlayer from 'react-player'
export default function Tale() {
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
				<div className="lg:max-w-[1000px] w-full mb-10 md:mb-0">
					<h3 className="text-2xl md:text-3xl xl:text-4xl font-bold font-nexa text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
						What’s Coming Next?
					</h3>
				</div>
				<div className="lg:max-w-[880px] w-full">
					<h2 className="text-2xl lg:text-3xl 2xl:text-[40px] font-bold leading-none font-nexa mb-10 xl:mb-20">
						1. NFT Collection
					</h2>
					<ul className="space-y-6 xl:space-y-10 mb-10 xl:mb-20 pr-4">
						<li className="font-light font-nexa text-black text-base md:text-2xl 2xl:text-[30px]">
							- Exclusive 3D Generated NFT Collection
						</li>
						<li className="font-light font-nexa text-black text-base md:text-2xl 2xl:text-[30px]">
							- Exclusive 3D Generated NFT Collection
						</li>
						<li className="font-light font-nexa text-black text-base md:text-2xl 2xl:text-[30px]">
							- Exclusive 3D Generated NFT Collection
						</li>
					</ul>
				</div>
			</section>
			<p className="font-light font-nexa text-black underline text-2xl lg:text-[35px] mb-10 xl:mb-16 text-center decoration-1 underline-offset-8">
				Previews
			</p>
			<div className="w-[50%] ml-[23%] pb-10">
				<div>
					<div className="flex justify-center items-center ">
						{hasWindow &&
							(preview === 1 ? (
								<ReactPlayer
									playing
									pip={true}
									muted={false}
									light={false}
									// onEnded={() => setPlaying(false)}
									url={require('../../img/vid-1.mp4')}
									config={{ file: { attributes: { playsInline: true } } }}
								/>
							) : preview === 2 ? (
								<ReactPlayer
									playing
									pip={true}
									muted={false}
									light={false}
									// onEnded={() => setPlaying(false)}
									url={require('../../img/vid-2.mp4')}
									config={{ file: { attributes: { playsInline: true } } }}
								/>
							) : preview === 3 ? (
								<ReactPlayer
									playing
									pip={true}
									muted={false}
									light={false}
									// onEnded={() => setPlaying(false)}
									url={require('../../img/header.mp4')}
									config={{ file: { attributes: { playsInline: true } } }}
								/>
							) : (
								<></>
							))}
					</div>
				</div>

				<div className="flex flex-col items-center justify-center  mt-8 ">
					<div className="grid gap-4 grid-cols-3">
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
