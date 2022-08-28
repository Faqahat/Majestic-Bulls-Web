import WeaponIcon from '@imgs/2730363_game_inkcontober_steal_sword_tools_icon.png'
import BackgroundsIcon from '@imgs/background.png'
import BodiesIcon from '@imgs/bullicon.png'
import HornsIcon from '@imgs/deer.png'
import bull from '@imgs/Design2.png'
import EyeIcon from '@imgs/eye-care.png'
import skull from '@imgs/skull.png'
import AccessoriesIcon from '@imgs/spears.png'
import Image from 'next/image'

export default function TheDesign() {
 
	
	return (
	 
		<section id="thedesign" className=" md:pt-[40px] scroll-mt-28 xl:scroll-mt-40 w-full bg-white grid grid-cols-1 xl:grid-cols-[minmax(400px,810px),minmax(450px,1140px)]">
			
            <div className="w-full px-5 sm:px-12 2xl:px-[40px] py-12">
				<div className="flex items-center md:items-end gap-2 sm:gap-5 mb-11 sm:mb-[65px]">
					<h2 className="text-3xl sm:text-[45px] text-black leading-[70px] font-light">
						{'//'} <span className="font-bold text-black">The</span> Design
					</h2>
					<Image
						src={skull}
						alt="img"
						className="w-12 md:w-20 xl:w-auto xl:h-20 sm:h-auto object-contain"
						height="65"
						width="65"
					/>
				</div>
				<ul className="mb-[40px] space-y-2 md:space-y-0">
					<li className="text-black font-normal font-pt-mono text-base md:text-xl 2xl:text-[24px] 2xl:leading-[40px]">
                    The NFT complements the unique chemistry of our beasts and makes the perfect specimen. A total of 06 rare attributes were selected. Each attribute has, on average, 12 instances that accumulate to 132 distinct features, making up an NFT. Characteristics like Head, Horns, Accessories, Backgrounds, etc., make up most of the NFT. These attributes and their chemistry with each other define the worth of the specific art. Rare NFTs have considerably perfect symmetry and the hottest merchandise than the rest.
					</li>
					
				</ul>
				<div>
					
					<div className="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6 xl:gap-10 w-full mt-5">
						<div className=" block max-w-[150px] text-center items-center  bg-black">
						<button className="  h-[100px] text-xl md:text-[40px] text-white font-bold font-nexa px-5 py-4 md:p-0   justify-center items-center gap-3 hover:-translate-y-1 hover:scale-110">
						<span className='ml-[22px] md:mr-4'>25</span>
							<Image
								src={WeaponIcon}
								alt="arrow"
								className="w-7 md:w-auto h-auto object-contain"
								height="30"
								width="30"
							/>
						</button>
						<p className="text-white mt-[-27px] text-lg md:mr-[10px] pb-3">Weapons</p>
						</div>

							<div className=" block max-w-[150px] text-center items-center  bg-black">
						<button className="  h-[100px]  text-xl md:text-[40px] text-white font-bold font-nexa px-10 py-4 md:p-0   justify-center items-center gap-3 hover:-translate-y-1 hover:scale-110">
							<span className='md:mr-4'>25</span>
							<Image
								src={EyeIcon}
								alt="arrow"
								className="w-7 md:w-auto h-auto object-contain"
								height="30"
								width="30"
							/>
						</button>
						<p className="text-white mt-[-27px] text-lg md:mr-[50px] pb-3">Eyes</p>
						</div>

							<div className=" block max-w-[150px] text-center items-center  bg-black">
						<button className="  h-[100px]  text-xl md:text-[40px] text-white font-bold font-nexa px-10 py-4 md:p-0   justify-center items-center gap-3 hover:-translate-y-1 hover:scale-110">
							<span className='md:mr-4'>25</span>
							<Image
								src={AccessoriesIcon}
								alt="arrow"
								className="w-7 md:w-auto h-auto object-contain"
								height="30"
								width="30"
							/>
						</button>
						<p className="text-white mt-[-27px] text-lg md:mr-[8px] pb-3">Accessories</p>
						</div>

						<div className=" block max-w-[150px] text-center items-center  bg-black">
						<button className=" h-[100px]  text-xl md:text-[40px] text-white font-bold font-nexa px-10 py-4 md:p-0   justify-center items-center gap-3 hover:-translate-y-1 hover:scale-110">
							<span className='md:mr-4'>25</span>
							<Image
								src={BackgroundsIcon}
								alt="arrow"
								className="w-7 md:w-auto h-auto object-contain"
								height="30"
								width="30"
							/>
						</button>
						<p className="text-white mt-[-27px] text-lg md:mr-[1px] pb-3">Backgrounds</p>
						</div>

						<div className=" block max-w-[150px] text-center items-center  bg-black">
						<button className="  h-[100px]  text-xl md:text-[40px] text-white font-bold font-nexa px-10 py-4 md:p-0   justify-center items-center gap-3 hover:-translate-y-1 hover:scale-110">
							<span className='md:mr-4'>25</span>
							<Image
								src={BodiesIcon}
								alt="arrow"
								className="w-7 md:w-auto h-auto object-contain"
								height="40"
								width="40"
							/>
						</button>
						<p className="text-white mt-[-27px] text-lg md:mr-[50px] pb-3">Bodies</p>
						</div>

						<div className=" block max-w-[150px] text-center items-center  bg-black">
						<button className="   h-[100px]  text-xl md:text-[40px] text-white font-bold font-nexa px-10 py-4 md:p-0   justify-center items-center gap-3 hover:-translate-y-1 hover:scale-110">
							<span className='md:mr-4'>25</span>
							<Image
								src={HornsIcon}
								alt="arrow"
								className="w-7 md:w-auto h-auto object-contain"
								height="40"
								width="40"
							/>
						</button>
						<p className="text-white mt-[-27px] text-lg md:mr-[50px] pb-3">Horns</p>
						</div>
					</div>
				
				</div>
			</div>
            
			<div className='self-end'>
            <Image
				src={bull}
				alt="img"
				className="w-full lg:aspect-video xl:aspect-auto xl:h-full  "
				//height="300"
				//width="700"
				width="75%" height="75%" layout="responsive" objectFit="contain"
			/>
			</div>
			
		</section>
	)
}
