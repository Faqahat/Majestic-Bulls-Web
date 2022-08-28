
import Image from 'next/image'

function SpecialOne({info}) {

   return <div className="relative hover:transform hover:-translate-y-2 transition-all duration-300">
					<a href="#popup" className="open-popup inline-block">
						<p className="mb-1 text-sm md:text-[20px] text-link text-[#9d9d9d] text-right sm:pr-10">
							{'//'} {info.name}
						</p>
						<Image
							src={info.image}
							alt="img"
							className="w-96 h-auto object-contain"
							height="500"
							width="500"
							onClick={() => {
								// setShowModal(true)
								// setImgName(b1)
							}}
						/>
						{ info.minted && <p className="text-sm sm:text-xl lg:text-[24px] font-bold sm:leading-[27px] bg-black text-white inline-block p-1 sm:p-1.5 transform rotate-[30deg] absolute top-12 sm:top-14 md:top-[70px] -right-[2px]">
							Minted!
						</p>}
					</a>
				</div>
}
export default SpecialOne;