import React , { useState } from "react";

export default function Tale() {

	const [slide1, setSlide1] = useState(true);
	const [slide2, setSlide2] = useState(false);
	
	return (
		<>
		<section id="roadmap" className="py-20 pb-0  2xl:pl-20 pl-7 block md:flex justify-between gap-5">
			<div className="lg:max-w-[1000px] w-full mb-10 md:mb-0">
				<h3 className="text-3xl md:text-4xl xl:text-5xl font-bold font-nexa">
					What’s Coming Next?
				</h3>
			</div>
			<div className="lg:max-w-[880px] w-full">
				<h2 className="text-4xl lg:text-5xl 2xl:text-[40px] font-bold leading-none font-nexa mb-10 xl:mb-20">
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

				<p className="font-light font-nexa text-black underline text-3xl lg:text-[42px] mb-10 xl:mb-16">
					Previews:
				</p>

				
				
				
			</div>
		</section>

		<div className="w-[50%] ml-[23%] pb-10">
		{slide1 ?
				<div  className= "nft-slider ">
					<div>
						<div className="relative video-wrapper">
							<video src={require('@imgs/vid-1.mp4')}></video>
							<div className="absolute inset-0 w-full h-full object-cover bg-black z-10 flex items-center justify-center video-upperlayer">
								<button className="text-white/50 video-playbtn p-4 transition-all duration-200 rounded-full hover:text-white">
								{/* <svg
										className="md:w-14 w-9 h-9 md:h-14 fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 384 512"
									>
										<path d="M24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13V38.13zM48 432L336 256L48 80V432z" />
									</svg> */}
								<video  src={require('../../img/vid-1.mp4')} type="video/mp4"    autoPlay />
								</button>
							</div>
						</div>
					</div>
				</div>  :null}

				{slide2 ?
				<div className="nft-slider">
					<div>
						<div className="relative video-wrapper">
							<video src={require('@imgs/vid-1.mp4')}></video>
							<div className="absolute inset-0 w-full h-full object-cover bg-black z-10 flex items-center justify-center video-upperlayer">
								<button className="text-white/50 video-playbtn p-4 transition-all duration-200 rounded-full hover:text-white">
									{/* <svg
										className="md:w-14 w-9 h-9 md:h-14 fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 384 512"
									>
										<path d="M24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13V38.13zM48 432L336 256L48 80V432z" />
									</svg> */}
									<video  src={require('../../img/vid-2.mp4')} type="video/mp4"    autoPlay />
								</button>
							</div>
						</div>
					</div>
				</div> :null}

				


				 <div className="flex items-center gap-10 sm:gap-20 justify-end mt-10 md:mt-12 pr-4 xl:pr-10">
					<button className="nft-back p-2 disabled:opacity-40 " onClick={()=>{setSlide1(false);setSlide2(true)}}>
						<svg
							className="sm:w-10 w-6 h-6 sm:h-10 fill-current hover:border rounded-full border-black hover:p-1 p-1 "
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 320 512"
							
						>
							<path d="M206.7 464.6l-183.1-191.1C18.22 267.1 16 261.1 16 256s2.219-11.97 6.688-16.59l183.1-191.1c9.152-9.594 24.34-9.906 33.9-.7187c9.625 9.125 9.938 24.37 .7187 33.91L73.24 256l168 175.4c9.219 9.5 8.906 24.78-.7187 33.91C231 474.5 215.8 474.2 206.7 464.6z" />
						</svg>
					</button>
					<button className="nft-next p-2 disabled:opacity-40" onClick={()=>{setSlide1(true);setSlide2(false)}}>
						<svg
							className="sm:w-10 w-6 h-6 sm:h-10 fill-current hover:border rounded-full border-black hover:p-1 p-1"
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
