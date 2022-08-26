import Image from 'next/image'
import img_magestic_ones from '@imgs/majestic-one.png'
import b1 from '@imgs/b-1.png'
import b2 from '@imgs/b-2.png'
import b3 from '@imgs/b-3.png'
import b4 from '@imgs/b-4.png'
import b5 from '@imgs/b-5.png'
import b6 from '@imgs/b-6.png'
import b7 from '@imgs/b-7.png'
import b8 from '@imgs/b-8.png'
import b9 from '@imgs/b-9.png'
import b10 from '@imgs/b-10.png'
import b11 from '@imgs/b-11.png'
import b12 from '@imgs/b-12.png'
function TheMajesticOnes() {
	return (
		<section
			className="mt-12  max-w-[1750px] w-full px-5 mx-auto mb-20 md:mb-[170px] scroll-mt-28 xl:scroll-mt-40"
			id="majestic"
		>
			<div className="max-w-[1344px] w-full md:px-5 mx-auto text-center mb-12 md:mb-20">
				<div className="flex items-center md:items-end justify-center gap-2 sm:gap-5 mb-7 md:mb-16">
					<h2 className="text-3xl md:text-[55px] text-black md:leading-[70px] font-light">
						// <span className="font-bold">The</span> Majestic Ones
					</h2>
					<Image
						src={img_magestic_ones}
						alt="img"
						className="w-12 md:w-auto h-auto object-contain pb-1"
					/>
				</div>
				<p className="font-pt-mono sm:text-[27px] font-normal leading-relaxed sm:leading-[55px]">
					The Majestic Ones (TMO) are The Chosen 10 Bulls which hold undefinable
					powers. Each of These Bulls have Different Powers Which can be used ..
					For Lorem Epsom
				</p>
			</div>

			<div className="w-full grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-[62px]">
				<div className="relative hover:transform hover:-translate-y-2 transition-all duration-300">
					<a href="#popup" className="open-popup inline-block">
						<p className="mb-4 text-lg md:text-[25px] font-nexa font-bold text-[#9d9d9d] text-right sm:pr-5">
							// The Devil Bull
						</p>
						<Image
							src={b1}
							alt="img"
							className="w-full h-auto object-contain"
						/>
						<p className="text-sm sm:text-xl lg:text-[33px] font-bold sm:leading-[27px] bg-black text-white inline-block p-1 sm:p-1.5 transform rotate-[30deg] absolute top-12 sm:top-14 md:top-[60px] -right-3">
							Minted!
						</p>
					</a>
				</div>
				<div className="relative hover:transform hover:-translate-y-2 transition-all duration-300">
					<a href="#popup" className="open-popup inline-block">
						<p className="mb-4 text-lg md:text-[25px] font-nexa font-bold text-[#9d9d9d] text-right pr-5">
							// The Golden
						</p>
						<Image
							src={b2}
							alt="img"
							className="w-full h-auto object-contain"
						/>
					</a>
				</div>

				<div className="relative hover:transform hover:-translate-y-2 transition-all duration-300">
					<a href="#popup" className="open-popup inline-block">
						<p className="mb-4 text-lg md:text-[25px] font-nexa font-bold text-[#9d9d9d] text-right pr-5">
							// The Sun Bull
						</p>
						<Image
							src={b3}
							alt="img"
							className="w-full h-auto object-contain"
						/>
					</a>
				</div>

				<div className="relative hover:transform hover:-translate-y-2 transition-all duration-300">
					<a href="#popup" className="open-popup inline-block">
						<p className="mb-4 text-lg md:text-[25px] font-nexa font-bold text-[#9d9d9d] text-right pr-5">
							// The Electric
						</p>
						<Image
							src={b4}
							alt="img"
							className="w-[200px] h-auto object-contain"
						/>
					</a>
				</div>

				<div className="relative hover:transform hover:-translate-y-2 transition-all duration-300">
					<a href="#popup" className="open-popup inline-block">
						<p className="mb-4 text-lg md:text-[25px] font-nexa font-bold text-[#9d9d9d] text-right pr-5">
							// The Light
						</p>
						<Image
							src={b5}
							alt="img"
							className="w-full h-auto object-contain"
						/>
						<p className="text-sm sm:text-xl lg:text-[33px] font-bold sm:leading-[27px] bg-black text-white inline-block p-1 sm:p-1.5 transform rotate-[30deg] absolute top-12 sm:top-14 md:top-[60px] -right-3">
							Minted!
						</p>
					</a>
				</div>

				<div className="relative hover:transform hover:-translate-y-2 transition-all duration-300">
					<a href="#popup" className="open-popup inline-block">
						<p className="mb-4 text-lg md:text-[25px] font-nexa font-bold text-[#9d9d9d] text-right pr-5">
							// The Prism
						</p>
						<Image
							src={b6}
							alt="img"
							className="w-full h-auto object-contain"
						/>
					</a>
				</div>

				<div className="relative hover:transform hover:-translate-y-2 transition-all duration-300">
					<a href="#popup" className="open-popup inline-block">
						<p className="mb-4 text-lg md:text-[25px] font-nexa font-bold text-[#9d9d9d] text-right pr-5">
							// The Metallic
						</p>
						<Image
							src={b7}
							alt="img"
							className="w-full h-auto object-contain"
						/>
					</a>
				</div>

				<div className="relative hover:transform hover:-translate-y-2 transition-all duration-300">
					<a href="#popup" className="open-popup inline-block">
						<p className="mb-4 text-lg md:text-[25px] font-nexa font-bold text-[#9d9d9d] text-right pr-5">
							// The Solar
						</p>
						<Image
							src={b8}
							alt="img"
							className="w-full h-auto object-contain"
						/>
						<p className="text-sm sm:text-xl lg:text-[33px] font-bold sm:leading-[27px] bg-black text-white inline-block p-1 sm:p-1.5 transform rotate-[30deg] absolute top-12 sm:top-14 md:top-[60px] -right-3">
							Minted!
						</p>
					</a>
				</div>

				<div className="relative hover:transform hover:-translate-y-2 transition-all duration-300">
					<a href="#popup" className="open-popup inline-block">
						<p className="mb-4 text-lg md:text-[25px] font-nexa font-bold text-[#9d9d9d] text-right pr-5">
							// The Mage
						</p>
						<Image
							src={b9}
							alt="img"
							className="w-full h-auto object-contain"
						/>
					</a>
				</div>

				<div className="relative hover:transform hover:-translate-y-2 transition-all duration-300">
					<a href="#popup" className="open-popup inline-block">
						<p className="mb-4 text-lg md:text-[25px] font-nexa font-bold text-[#9d9d9d] text-right pr-5">
							// The Galaxy
						</p>
						<Image
							src={b10}
							alt="img"
							className="w-full h-auto object-contain"
						/>
					</a>
				</div>

				<div className="relative hover:transform hover:-translate-y-2 transition-all duration-300">
					<a href="#popup" className="open-popup inline-block">
						<p className="mb-4 text-lg md:text-[25px] font-nexa font-bold text-[#9d9d9d] text-right pr-5">
							// The Thunder
						</p>
						<Image
							src={b11}
							alt="img"
							className="w-full h-auto object-contain"
						/>
						<p className="text-sm sm:text-xl lg:text-[33px] font-bold sm:leading-[27px] bg-black text-white inline-block p-1 sm:p-1.5 transform rotate-[30deg] absolute top-12 sm:top-14 md:top-[60px] -right-3">
							Minted!
						</p>
					</a>
				</div>

				<div className="relative hover:transform hover:-translate-y-2 transition-all duration-300">
					<a href="#popup" className="open-popup inline-block">
						<p className="mb-4 text-lg md:text-[25px] font-nexa font-bold text-[#9d9d9d] text-right pr-5">
							// The Sonar
						</p>
						<Image
							src={b12}
							alt="img"
							className="w-full h-auto object-contain"
						/>
					</a>
				</div>
			</div>
		</section>
	)
}

export default TheMajesticOnes
