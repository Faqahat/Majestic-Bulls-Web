import img_alpha_heading_png from '@imgs/alpha-heading.png'
import img_alpha_png from '@imgs/alpha.png'
import img_arrow from '@imgs/arrow.png'
import img_coffee_png from '@imgs/aviation.png'
import img_online_learning from '@imgs/discord.png'
import img_checklist from '@imgs/list.png'
import img_hoodie from '@imgs/merchandise.png'
import Treasury from '@imgs/Treasury.png'
import img_bomber from '@imgs/role-playing.png'
import OmenDao from '@imgs/OmenDao.png'
import Image from 'next/image'
import { Tooltip } from "@nextui-org/react";

function TheAlphas() {
	return (
		<section
			id="omen"
			className="scroll-mt-28 xl:scroll-mt-40 w-full bg-black grid grid-cols-1 xl:grid-cols-[minmax(400px,810px),minmax(450px,1140px)]"
		>
			<Image
				src={OmenDao}
				alt="img"
				className="w-full lg:aspect-video xl:aspect-auto xl:h-full "
				 height="100%"
				 width="100%"
				 layout='responsive'
    			objectFit='cover'
			/>
			<div className="w-full content-center px-5 sm:px-12 2xl:px-[90px] py-12">
				<div className="flex items-center md:items-end gap-2 sm:gap-5 mb-11 sm:mb-[65px]">
					<h2 className="text-2xl  md:text-[45px] text-white leading-[70px] font-light font-Abreto text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
						{'//'} <span className="font-bold text-white">The</span> Omen DAO
					</h2>
					<Image
						src={img_alpha_heading_png}
						alt="img"
						className="w-12 md:w-20 xl:w-auto xl:h-20 sm:h-auto "
						height="55"
						width="55"
					/>
				</div>
				<ul className="mb-[40px] space-y-2 md:space-y-0">
					<li className="text-justify text-white font-normal font-pt-mono text-base md:text-xl 2xl:text-[24px] 2xl:leading-[40px]">
					OmenDAO is an Independent Decentralised Autonomous Organization in the Solana Web3. It is not just another project, but a decentralized community of professionals working together to benefit the future of web3  by bringing new and innovative projects.
					</li>
					
				</ul>
				<div>
					<p className="text-2xl md:text-[20px]  text-[#717171] font-light font-nexa ">
						Why Join OmenDAO?
					</p>
					<div className="grid sm:grid-cols-2 gap-10 sm:gap-6 xl:gap-10 w-full mt-5">
						<Tooltip
							content={"The elected board members of OmenDAO will have governing rights"}
							rounded={false}
							placement={"top"}
						>
						<div className="flex items-center gap-4">
							<Image
								src={img_coffee_png}
								alt="img"
								className="w-11 sm:w-auto h-auto object-contain"
								height="50"
								width="50"
							/>
							<p className="text-xl xl:text-[18px] font-nexa font-light leading-9 text-white">
							Governing Rights 
							</p>
						</div>
					</Tooltip>

					<Tooltip
							content={"Omen DAO will create its own Treasury."}
							rounded={false}
							placement={"top"}
						>
						<div className="flex items-center gap-4">
							<Image
								src={Treasury}
								alt="img"
								className="w-11 sm:w-auto h-auto object-contain"
								height="50"
								width="50"
							/>
							<p className="text-xl xl:text-[18px] font-nexa font-light leading-9 text-white">
							Transparent DAO Treasury
							</p>
						</div>
						</Tooltip>

						<Tooltip
							content={"The DAO participants will be able to get beautifully desgined merch."}
							rounded={false}
							placement={"top"}
						>
						<div className="flex items-center gap-4">
							<Image
								src={img_hoodie}
								alt="img"
								className="w-11 sm:w-auto h-auto object-contain"
								height="50"
								width="50"
							/>
							<p className="text-xl xl:text-[18px] font-nexa font-light leading-9 text-white">
							Exclusive  Merch
							</p>
						</div>
						</Tooltip>

						{/* <div className="flex items-center gap-4">
							<Image
								src={img_bomber}
								alt="img"
								className="w-11 sm:w-auto h-auto object-contain"
								height="50"
								width="50"
							/>
							<p className="text-xl xl:text-[18px] font-nexa font-light leading-9 text-white">
							Special Discord Role
							</p>
						</div> */}
						
						<Tooltip
							content={"All members of the DAO will have exclusive & early access in our future Projects."}
							rounded={false}
							placement={"bottom"}
						> 
						<div className="flex items-center gap-4">
							<Image
								src={img_checklist}
								alt="img"
								className="w-11 sm:w-auto h-auto object-contain"
								height="50"
								width="50"
							/>
							<p className="text-xl xl:text-[18px] font-nexa font-light leading-9 text-white">
							 Early Access
							</p>
						</div>
						</Tooltip>
						<a
							href="#WL"
							className="text-xl xl:text-[15px] font-nexa font-light leading-9 text-white  inline-block"
						>
							Be a part of our Bigger vision…
						</a>
					</div>
					{/* <div className="flex justify-center mt-32">
					<li className="flex items-center justify-center mb-5 md:mb-auto">
					<a
						href="#"
						className="flex w-fit  items-center text-base text-black bg-white px-7 pt-3 pb-3 leading-normal sm:text-xl md:text-2xl 2xl:text-3xl font-nexa hover:-translate-y-1 hover:scale-110 duration-300"
					>
						<span className="text-xl mr-6 font-semibold ">Join Club</span>
						<Image
							src={img_arrow}
							alt="img"
							className="w-full aspect-video md:aspect-auto md:h-full object-cover md:object-right"
							height="35"
							width="35"
						/>
					</a>
				</li>
					</div> */}
					
				</div>
			</div>
		</section>
	)
}

export default TheAlphas
