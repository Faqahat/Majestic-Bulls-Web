
import React from 'react'

import b2 from '@imgs/b-2.png'
import Image from 'next/image'
import React from "react";

import al from '../img/arrow_forward_go_back_left_icon.png'
import ar from '../img/arrow_forward_go_next_right_icon.png'
//import opensea from '../img/opensea_logo_icon.png'
import opensea from '../img/Logomark-Blue.svg'


export default function Modal({ openModal, info ,current, setSelected ,total }) {
    return (
        <>
            <div className="z-[100] fixed inset-0  overflow-y-auto">
                <div
                    className="fixed inset-0 w-full h-full bg-black opacity-60"
                    onClick={() => openModal(false)}
                ></div>
               <div
							className="` absolute w-full  h-screen overflow-auto bg-black/40 z-50 p-5 md:p-10 grid items-center justify-center"
							id="popup"
						>
							<div className="` my-auto max-w-[868px] w-full mx-auto   bg-white/20 backdrop-blur-xl pt-8 md:px-9 p-6 md:pb-9">
								<h2 className="text-white text-2xl text-center font-nomral font-nexa sm:text-2xl lg:text-[35px] mb-9">
									The Majestic Ones
								</h2>
								<div className="flex flex-col sm:flex-row justify-between items-center gap-3">
									<div className="max-w-md w-full text-white">
										<h1
											className="text-2xl sm:text-2xl xl:text-[30px] font-normal font-nexa text-white mb-6 md:mb-12"
											style={{ textShadow: '10px 5px 1px rgba(0, 0, 0, 0.31)' }}
										>
											{info.name}
										</h1>
										<p className="text-justify text-base lg:text-xl 2xl:text-xl 2xl:leading-tight font-nexa font-light">
											{info.description}
										</p>
									</div>
									<div className="text-center max-w-xs w-full order-first sm:order-none">
										<Image
											src={info.image}
											alt={info.name}
											className="object-contain w-3/5 sm:w-full block mx-auto sm:mx-0"
                                            width="250"
                                            height="250"
										/>
                                       
									</div>
								</div>

								<div className="flex flex-col sm:flex-row justify-between items-center gap-5 my-8 xl:my-14">
									<div className="max-w-[275px] w-full text-white">
										<p className="text-base text-white/40 before:content-[''] before:h-px before:w-full before:bg-white/20 grid grid-cols-[1fr_max-content] items-center gap-2">
											Special Power
										</p>
										<p className="text-right text-xl lg:text-2xl text-white font-light mt-1 md:mt-4">
											{info.specialPower} {info.specialPowerIcon}
										</p>
									</div>
									<div className="max-w-[300px] w-full">
										<button className="bg-white  flex items-center justify-between gap-2 text-black text-[14px] md:text-xl font-bold font-nexa py-1 px-4 w-full border border-[#707070] shadow-normal hover:shadow-none transition-all duration-300">
											View on OpenSea
											<Image
												src={opensea}
												alt=""
												className="w-8 h-auto object-contain"
                                                width="30"
                                                height="30"
											/>
										</button>
									</div>
								</div>

								<div className="flex justify-between items-center gap-4">
									<button 
                                    disabled={current === 0}
                                    className="disabled:invert"
                                    onClick ={()=>{if(current > 0) setSelected(current-1)}} >
										<Image
											src={ar}
											alt=""
											className="w-8 rotate-180 h-8 md:w-auto md:h-auto"
											width="50"
											height="50"
											
											
										/>
									</button>
									<button 
                                    className="disabled:invert"
                                    disabled={current  === total-1}
                                    onClick ={()=>{ if(current  < total-1) setSelected(current+1)}} >
										<Image
											src={ar}
											alt=""
											className="w-8 h-8 md:w-auto md:h-auto"
											width="50"
											height="50"
										/>
									</button>
								</div>

								<button className="popup-close absolute top-5 right-5 text-white" >
									<svg
										className="w-6 h-6 md:w-9 md:h-9 fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
										onClick={() => openModal(false)}
									>
										<path d="M180.7 180.7C186.9 174.4 197.1 174.4 203.3 180.7L256 233.4L308.7 180.7C314.9 174.4 325.1 174.4 331.3 180.7C337.6 186.9 337.6 197.1 331.3 203.3L278.6 256L331.3 308.7C337.6 314.9 337.6 325.1 331.3 331.3C325.1 337.6 314.9 337.6 308.7 331.3L256 278.6L203.3 331.3C197.1 337.6 186.9 337.6 180.7 331.3C174.4 325.1 174.4 314.9 180.7 308.7L233.4 256L180.7 203.3C174.4 197.1 174.4 186.9 180.7 180.7zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32z" />
									</svg>
								</button>

							</div>
							{/*<div className="max-w-[200px] w-full">
								<button className="bg-white  flex items-center justify-between gap-2 text-black text-[14px] md:text-l font-bold font-nexa py-1 px-4 w-full border border-[#707070] shadow-normal hover:shadow-none transition-all duration-300">
									View on OpenSea
									<Image
										src={opensea}
										alt=""
										className="w-8 h-auto object-contain"
										width="30"
										height="30"
									/>
								</button>
							</div>*/}
						</div>

						<div className="flex justify-between items-center gap-4">
							<button
								disabled={current === 0}
								className="disabled:invert"
								onClick={() => {
									if (current > 0) setSelected(current - 1)
								}}
							>
								<Image
									src={af}
									alt=""
									className="w-8 h-8 md:w-auto md:h-auto"
								/>
							</button>
							<button
								className="disabled:invert"
								disabled={current === total - 1}
								onClick={() => {
									if (current < total - 1) setSelected(current + 1)
								}}
							>
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
								onClick={() => openModal(false)}
							>
								<path d="M180.7 180.7C186.9 174.4 197.1 174.4 203.3 180.7L256 233.4L308.7 180.7C314.9 174.4 325.1 174.4 331.3 180.7C337.6 186.9 337.6 197.1 331.3 203.3L278.6 256L331.3 308.7C337.6 314.9 337.6 325.1 331.3 331.3C325.1 337.6 314.9 337.6 308.7 331.3L256 278.6L203.3 331.3C197.1 337.6 186.9 337.6 180.7 331.3C174.4 325.1 174.4 314.9 180.7 308.7L233.4 256L180.7 203.3C174.4 197.1 174.4 186.9 180.7 180.7zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32z" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</>
	)
}
