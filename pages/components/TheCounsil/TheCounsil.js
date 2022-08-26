import Image from 'next/image'
import bull1 from '@imgs/bulls/1.png'
import bull2 from '@imgs/bulls/2.png'
import bull3 from '@imgs/bulls/3.png'
import bull4 from '@imgs/bulls/4.png'
import bull5 from '@imgs/bulls/5.png'
function TheCounsil() {
	return (
		<section
			className="px-5 py-20 md:py-44 scroll-mt-28 xl:scroll-mt-40"
			id="council"
		>
			<div className="flex items-center md:items-end justify-center gap-2 sm:gap-5 mb-7 md:mb-16 xl:mb-28">
				<h2 className="text-3xl md:text-[55px] text-black md:leading-[70px] font-light">
					{'//'} <span className="font-bold">The</span> Council
				</h2>
			</div>

			<div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] sm:grid-cols-3 lg:grid-cols-4 gap-x-6 sm:gap-x-10 2xl:gap-x-28 gap-y-16 xl:gap-y-36 max-w-[1500px] w-full mx-auto">
				<div>
					<Image
						src={bull1}
						alt="onyx bull"
						className="w-full h-auto object-contain block mx-auto mb-2.5 "
					/>
					<p className="text-xl md:text-3xl xl:text-[40px] mb-2 md:mb-4 font-nexa">
						The Councillor
					</p>
					<p className="text-base sm:text-lg lg:text-2xl font-light font-nexa">
						Role Of Councillor
					</p>
				</div>

				<div>
					<Image
						src={bull2}
						alt="onyx bull"
						className="w-full h-auto object-contain block mx-auto mb-2.5"
					/>
					<p className="text-xl md:text-3xl xl:text-[40px] mb-2 md:mb-4 font-nexa">
						The Councillor
					</p>
					<p className="text-base sm:text-lg lg:text-2xl font-light font-nexa">
						Role Of Councillor
					</p>
				</div>

				<div>
					<Image
						src={bull5}
						alt="onyx bull"
						className="w-full h-auto object-contain block mx-auto mb-2.5"
					/>
					<p className="text-xl md:text-3xl xl:text-[40px] mb-2 md:mb-4 font-nexa">
						The Councillor
					</p>
					<p className="text-base sm:text-lg lg:text-2xl font-light font-nexa">
						Role Of Councillor
					</p>
				</div>

				<div>
					<Image
						src={bull1}
						alt="onyx bull"
						className="w-full h-auto object-contain block mx-auto mb-2.5"
					/>
					<p className="text-xl md:text-3xl xl:text-[40px] mb-2 md:mb-4 font-nexa">
						The Councillor
					</p>
					<p className="text-base sm:text-lg lg:text-2xl font-light font-nexa">
						Role Of Councillor
					</p>
				</div>

				<div>
					<Image
						src={bull2}
						alt="onyx bull"
						className="w-full h-auto object-contain block mx-auto mb-2.5"
					/>
					<p className="text-xl md:text-3xl xl:text-[40px] mb-2 md:mb-4 font-nexa">
						The Councillor
					</p>
					<p className="text-base sm:text-lg lg:text-2xl font-light font-nexa">
						Role Of Councillor
					</p>
				</div>

				<div>
					<Image
						src={bull3}
						alt="onyx bull"
						className="w-full h-auto object-contain block mx-auto mb-2.5"
					/>
					<p className="text-xl md:text-3xl xl:text-[40px] mb-2 md:mb-4 font-nexa">
						The Councillor
					</p>
					<p className="text-base sm:text-lg lg:text-2xl font-light font-nexa">
						Role Of Councillor
					</p>
				</div>

				<div>
					<Image
						src={bull4}
						alt="onyx bull"
						className="w-full h-auto object-contain block mx-auto mb-2.5"
					/>
					<p className="text-xl md:text-3xl xl:text-[40px] mb-2 md:mb-4 font-nexa">
						The Councillor
					</p>
					<p className="text-base sm:text-lg lg:text-2xl font-light font-nexa">
						Role Of Councillor
					</p>
				</div>

				<div>
					<Image
						src={bull5}
						alt="onyx bull"
						className="w-full h-auto object-contain block mx-auto mb-2.5"
					/>
					<p className="text-xl md:text-3xl xl:text-[40px] mb-2 md:mb-4 font-nexa">
						The Councillor
					</p>
					<p className="text-base sm:text-lg lg:text-2xl font-light font-nexa">
						Role Of Councillor
					</p>
				</div>
			</div>
		</section>
	)
}

export default TheCounsil
