//import bull_skull_footer from '@imgs/bull_skull_footer.png'
import bull_skull_footer from '@imgs/bull (1).png'
import { Tooltip } from '@nextui-org/react'
import Image from 'next/image'

function Footer() {
	return (
		<footer className="bg-black w-full px-5 pb-10 pt-[70px] ">
			<div className="max-w-[1670px] w-full mx-auto grid grid-cols-1 xl:grid-cols-[minmax(150px,460px),minmax(700px,1fr)] gap-9 2xl:gap-52 gap-y-12">
				<div className="w-full text-center">
					<div className="flex justify-center ">
						<Image
							src={bull_skull_footer}
							alt="footer-logo"
							className="w-auto h-auto object-contain block mx-auto invert"
							width="120"
							height="120"
						/>
					</div>

					<p className="text-link  text-white text-[30px] leading-normal mb-2 xl:mb-0 xl:leading-[98px]">
						Majestic Bulls
					</p>
				</div>
				<div className="w-full grid grid-cols-2 md:grid-cols-3 gap-7 2xl:gap-10">
					<div>
						<p className="font-nexa text-[25px] leading-[38px] text-[#5D5D5D] mb-4">
							Sections
						</p>
						<ul>
							<li className="mb-4">
								<a
									href="#intro"
									className="text-lg sm:text-[20px] 2xl:text-[20px] font-nexa font-normal text-white leading-[38px]"
								>
									{'//'} <span className="font-bold">The</span> Intro
								</a>
							</li>
							<li className="mb-4">
								<a
									href="#theart"
									className="text-lg sm:text-[20px] 2xl:text-[20px] font-nexa font-normal text-white leading-[38px]"
								>
									{'//'} <span className="font-bold">The</span> Art
								</a>
							</li>

							<li className="mb-4">
								<a
									href="#tale"
									className="text-lg sm:text-[20px] 2xl:text-[20px] font-nexa font-normal text-white leading-[38px]"
								>
									{'//'} <span className="font-bold">The</span> Tale
								</a>
							</li>
							<li className="mb-4">
								<a
									href="#majestic"
									className="text-lg sm:text-[20px] 2xl:text-[20px] font-nexa font-normal text-white leading-[38px]"
								>
									{'//'} <span className="font-bold">The</span> Majestic Ones{' '}
								</a>
							</li>
							{/* <li className="mb-4">
								<a
									href="#alpha"
									className="text-lg sm:text-[20px] 2xl:text-[24px] font-nexa font-normal text-white leading-[38px]"
								>
									{'//'} <span className="font-bold">The</span> Alphas{' '}
								</a>
							</li> */}

							{/* <li className="mb-4">
								<a
									href="#"
									className="text-lg sm:text-[20px] 2xl:text-[24px] font-nexa font-normal text-white leading-[38px]"
								>
									{'//'} <span className="font-bold">The</span> Council{' '}
								</a>
							</li> */}
						</ul>
					</div>
					<div>
						<p className="font-nexa  text-[25px] leading-[38px] text-[#5D5D5D] mb-4">
							NFT
						</p>
						<ul>
						<li className="mb-6">
								<a
									href="https://magiceden.io/drops/majesticbulls" 
									target="_blank"
									rel="noopener noreferrer"
									className="text-lg sm:text-[20px] font-nexa font-normal text-white leading-[24px]"
								>
									{' '}
									WhiteList{' '}
								</a>
							</li>
							<li className="mb-6">
								<a
									href="https://forms.gle/PtnMWtZWMdvE5aZg6" 
									target="_blank"
									rel="noopener noreferrer"
									className="text-lg sm:text-[20px] font-nexa font-normal text-white leading-[24px]"
								>
									{' '}
									 WL Collab Form{' '}
								</a>
							</li>
							<li className="mb-4">
							<Tooltip
										content={"Coming Soon"}
										
										rounded={false}
										placement={"top"}
									>
								<span
									// href="#"
									className="text-lg sm:text-[20px] font-nexa font-normal text-white leading-[24px]"
								>
									{' '}
									Magic Eden <br/> Collection{' '}
								</span>
								</Tooltip>
							</li>
							{/* <li className="mb-4">
								<Tooltip
									content={'Coming Soon'}
									trigger="click"
									rounded={false}
									placement={'top'}
								>
									<span className="text-lg sm:text-[20px] font-nexa font-normal text-white leading-[24px]">
										Open Sea
									</span>
								</Tooltip>
							</li> */}

							{/* <li className="mb-4">
								<Tooltip
									content={'Coming Soon'}
									trigger="click"
									rounded={false}
									placement={'top'}
								>
									<span className="text-lg sm:text-[20px] font-nexa font-normal text-white leading-[24px]">
										Ether Scan{' '}
									</span>
								</Tooltip>
							</li> */}

							{/* <li className="mb-4">
								<Tooltip
									content={'Coming Soon'}
									trigger="click"
									rounded={false}
									placement={'top'}
								>
									<span className="text-lg sm:text-[20px] font-nexa font-normal text-white leading-[24px]">
										Rarity Sniper{' '}
									</span>
								</Tooltip>
							</li>
							<li className="mb-4">
								<Tooltip
									content={'Coming Soon'}
									trigger="click"
									rounded={false}
									placement={'top'}
								>
									<span
										href="#"
										className="text-lg sm:text-[20px] font-nexa font-normal text-white leading-[24px]"
									>
										Looks Rare{' '}
									</span>
								</Tooltip>
							</li> */}
						</ul>
					</div>
					<div className=" ml-[80%] md:ml-0">
						<p className="font-nexa  text-[25px] leading-[38px] text-[#5D5D5D] mb-4">
							Social
						</p>
						<ul>
							<li className="mb-10">
								<a
									href="https://discord.gg/k9RnGPxSdc"
									target="_blank"
									rel="noreferrer"
									className="text-lg sm:text-[20px] font-nexa font-normal text-white leading-[24px] hover:text-[#406da2]"
								>
									{' '}
									Discord{' '}
								</a>
							</li>
							<li className="mb-10">
								<a
									href="https://twitter.com/MajesticBullNFT"
									target="_blank"
									rel="noreferrer"
									className="text-lg sm:text-[20px] font-nexa font-normal text-white leading-[24px] hover:text-[#00acee]"
								>
									Twitter
								</a>
							</li>
							{/* <li className="mb-10">
								<a
									href="https://www.instagram.com/majestic.bulls/?hl=en"
									target="_blank"
									rel="noreferrer"
									className="text-lg sm:text-[20px] font-nexa font-normal text-white leading-[24px] hover:text-[#8a3ab9] "
								>
									Instagram{' '}
								</a>
							</li> */}
						</ul>
					</div>
				</div>
			</div>

			{/* <a href="https://www.fox.so/" target="_blank"  rel="noreferrer">
			<p className="font-nexa font-light mt-16 text-xl sm:text-[22px] leading-[30px] text-white text-center hover:text-[#C67312]">
			Project By <span className="text-[#C67312] hover:text-[#FFFFFF]">Cyber Fox</span> 
			</p>
			</a> */}
		</footer>
	)
}

export default Footer
