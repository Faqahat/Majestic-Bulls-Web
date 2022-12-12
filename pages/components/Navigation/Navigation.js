//import HeaderLogo from '../../img/logo.png'
import HeaderLogo from '@imgs/bull (1).png'
import Image from 'next/image'
import React, { useState } from 'react'

function Navigation({ active }) {
	const [tgl, setTgl] = useState(false)
//console.log(active);
	return (
		<>
			<nav
				id="navbar"
				className="pl-0 z-50 px-5 w-full mx-auto h-[100px] xl:h-[120px] fixed bg-white border-b-2 border-black/20 xl:border-none  drop-shadow-lg"
			>
				<div className="max-w-[1820px] md:px-4 w-full mx-auto flex items-center justify-between gap-[4rem] h-full">
					<a href="#" className="flex items-center gap-1 h-full relative">
						<Image
							src={HeaderLogo}
							alt="logo"
							width="90"
							height="90"
							className="w-16 md:w-20 lg:w-24 2xl:w-auto h-auto object-contain"
						/>

						<span className="text-lg md:text-1xl lg:text-2xl 2xl:text-[28px] text-link font-bold text-black whitespace-nowrap">
							Majestic Bulls
						</span>
					</a>

					{!tgl ? (
						<div className="navbar w-auto">
							<ul className="flex flex-col desktop:flex-row items-center justify-center desktop:justify-between gap-4 w-full">
								<li>
									<a
										href="#intro"
										className={
											active === 'intro'
												? 'text-link  bg-[#000000] text-[#ffffff]'
												: 'text-link hover:transition ease-in-out delay-150  hover:border-black hover:-translate-y-1 hover:scale-110  duration-300 '
										}
									>
										<span className="font-bold">The </span> Intro
									</a>
								</li>
								<li>
									<a
										href="#theart"
										className={
											active === 'design'
												? 'text-link  bg-[#000000] text-[#ffffff]'
												: 'text-link hover:transition ease-in-out delay-150  hover:border-black hover:-translate-y-1 hover:scale-110  duration-300 '
										}
									>
										<span className="font-bold"> The </span> Art
									</a>
								</li>
								<li>
									<a
										href="#tale"
										className={
											active === 'tale'
												? 'text-link  bg-[#000000] text-[#ffffff]'
												: 'text-link hover:transition ease-in-out delay-150  hover:border-black hover:-translate-y-1 hover:scale-110  duration-300 '
										}
									>
										<span className="font-bold"> The </span> Tale
									</a>
								</li>
								
								 <li>
									<a
										href="#majestic"
										className={
											active === 'majestic'
												? 'text-link  bg-[#000000] text-[#ffffff]'
												: 'text-link hover:transition ease-in-out delay-150  hover:border-black hover:-translate-y-1 hover:scale-110  duration-300 '
										}
									>  
										 <span className="font-bold"> The </span>Majestics Ones
									</a>
								</li>

								<li>
									<a
										href="#omen"
										className={
											active === 'omen'
												? 'text-link  bg-[#000000] text-[#ffffff]'
												: 'text-link hover:transition ease-in-out delay-150  hover:border-black hover:-translate-y-1 hover:scale-110  duration-300 '
										}
									>
										<span  className="font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"> ? ?</span> 
									</a>
								</li>
								
								<li>
									<a
										href="#WL"
										className={
											active === 'WL'
												? 'text-link  bg-[#000000] text-[#ffffff]'
												: 'text-link hover:transition ease-in-out delay-150  hover:border-black hover:-translate-y-1 hover:scale-110  duration-300 '
										}
									>
										<span className="font-bold"> The </span> W/L
									</a>
								</li>

								{/* <li>
									<a
										href="#alpha"
										className={
											active === 'alphas'
												? 'text-link  bg-[#000000] text-[#ffffff]'
												: 'text-link hover:transition ease-in-out delay-150  hover:border-black hover:-translate-y-1 hover:scale-110  duration-300 '
										}
									> */} 
									
										{/* <span className="font-bold"> The </span> Alphas */}
									{/* </a>
								</li> */}
								
							</ul>
							<a
								href="https://twitter.com/MajesticBullNFT"
								target="_blank"
								rel="noreferrer"
								className="2xl:h-14 w-10 h-10 2xl:w-14 border border-[#707070] rounded-full flex justify-center items-center text-[#707070] hover:bg-[#00acee] hover:-translate-y-1 hover:scale-110 duration-300"
							>
								<svg
									className="2xl:w-8 w-6 h-6 2xl:h-8 hover:fill-[#FFFFFF]"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									fill="currentColor "
								>
									<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
								</svg>
							</a>
						</div>
					) : (
						<div className="absolute z-[-1] mt-[112%] md:mt-[28%] w-full">
							<ul className="items-center pt-7 pb-7 bg-white text-center justify-center desktop:justify-between gap-4 w-full">
								<li
									className="h-14"
									onClick={() => {
										setTgl(!tgl)
									}}
								>
									<a
										href="#intro"
										className={
											active === 'intro'
												? 'text-link active p-[9px]'
												: 'text-link hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#000000] hover:text-[#ffffff] duration-300'
										}
									>
										<span className="font-bold">The </span> Intro
									</a>
								</li>
								<li
									className="h-14"
									onClick={() => {
										setTgl(!tgl)
									}}
								>
									<a
										href="#theart"
										className={
											active === 'design'
												? 'text-link  bg-[#000000] text-[#ffffff]'
												: 'text-link hover:transition ease-in-out delay-150  hover:border-black hover:-translate-y-1 hover:scale-110  duration-300 '
										}
									>
										<span className="font-bold"> The </span> Art
									</a>
								</li>
								<li
									className="h-14"
									onClick={() => {
										setTgl(!tgl)
									}}
								>
									<a
										href="#tale"
										className={
											active === 'tale'
												? 'text-link  bg-[#000000] text-[#ffffff]'
												: 'text-link hover:transition ease-in-out delay-150  hover:border-black hover:-translate-y-1 hover:scale-110  duration-300 '
										}
									>
										<span className="font-bold"> The </span> Tale
									</a>
								</li>

								<li
									className="h-14"
									onClick={() => {
										setTgl(!tgl)
									}}
								>
									<a
										href="#majestic"
										className={
											active === 'majestic'
												? 'text-link  bg-[#000000] text-[#ffffff]'
												: 'text-link hover:transition ease-in-out delay-150  hover:border-black hover:-translate-y-1 hover:scale-110  duration-300 '
										}
									>
										<span className="font-bold"> The </span>Majestics Ones
									</a>
								</li>

								<li
									className="h-14"
									onClick={() => {
										setTgl(!tgl)
									}}
								>
									<a
										href="#WL"
										className={
											active === 'WL'
												? 'text-link  bg-[#000000] text-[#ffffff]'
												: 'text-link hover:transition ease-in-out delay-150  hover:border-black hover:-translate-y-1 hover:scale-110  duration-300 '
										}
									>
										<span className="font-bold"> The </span>W/L
									</a>
								</li>

								{/* <li
									className="h-14 "
									onClick={() => {
										setTgl(!tgl)
									}}
								>
									<a
										href="#alpha"
										className={
											active === 'alphas'
												? 'text-link  bg-[#000000] text-[#ffffff]'
												: 'text-link hover:transition ease-in-out delay-150  hover:border-black hover:-translate-y-1 hover:scale-110  duration-300 '
										}
									>
										<span className="font-bold"> The </span> Alphas
									</a>
								</li> */}

								<li className="h-14 flex justify-center">
									<a
										href="https://twitter.com/MajesticBullNFT"
										target="_blank"
										rel="noreferrer"
										className="2xl:h-14 w-10 h-10 2xl:w-14 border border-[#707070] rounded-full flex justify-center items-center text-[#707070] hover:bg-[#00acee] hover:-translate-y-1 hover:scale-110 duration-300"
									>
										<svg
											className="2xl:w-8 w-6 h-6 2xl:h-8 hover:fill-[#FFFFFF]"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
											fill="currentColor "
										>
											<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
										</svg>
									</a>
								</li>
							</ul>
						</div>
					)}

					<button
						className="inline-block desktop:hidden nav-btn"
						open
						onClick={() => {
							setTgl(!tgl)
						}}
					>
						<svg
							className="md:w-[50px] text-black w-6 h-6 md:h-[50px] group-open:hidden block"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
							fill="currentColor"
						>
							<path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="md:w-[50px] text-black w-6 h-6 md:h-[50px] fill-current group-open:block hidden"
							viewBox="0 0 320 512"
						>
							<path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
						</svg>
					</button>
				</div>
			</nav>
		</>
	)
}

export default Navigation
