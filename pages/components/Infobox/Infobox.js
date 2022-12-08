import forestImg from '@imgs/bg forest.png'
import downloadImg from '@imgs/download.png'
import Apply from '@imgs/Apply_WL.svg'
import Image from 'next/image'

function InfoBox() {
	return (
		<section id='infobox' className="w-full h-full  relative py-12 px-5 bg-black text-white">
			<Image
				src={forestImg}
				alt="img"
				className="w-full aspect-video md:aspect-auto md:h-full object-cover md:object-right"
				layout="fill"
			/>

			<h1 className="relative text-3xl font-light text-center md:text-6xl 2xl:text-6xl mb-[130px]">
				<strong className="font-extrabold font-Abreto">GET WHITELIST</strong>{' '}
				<br />
				<span className="text-2xl"> WLs can be claimed on MagicEden OR if you do not have a role on Discord, you can apply below.  </span>
			</h1>
			<ul className="relative   items-center justify-center gap-4 flex-wrap sm:gap-7 xl:gap-16 sm:block text-center md:flex ">
				<li className="flex items-center justify-center mb-5 md:mb-auto">
					<a
						href="https://forms.gle/M2g7EPNxdCHaKX3z9"
						target="_blank"
						rel="noreferrer"
						className="flex w-fit  items-center text-base text-black bg-white px-7 pt-3 pb-3 leading-normal sm:text-xl md:text-2xl 2xl:text-3xl font-nexa hover:-translate-y-1 hover:scale-110 duration-300"
					>
						<span className="text-xl mr-6 font-semibold ">Apply For WhiteList</span>
						<Image
							src={Apply}
							alt="img"
							className="w-full aspect-video md:aspect-auto md:h-full object-cover md:object-right"
							height="35"
							width="35"
						/>
					</a>
				</li>
				<li className="flex items-center justify-center text-base sm:text-xl md:text-3xl font-bold font-nexa mb-5 md:mb-auto">
					or
				</li>
				<li>
					<a
						href="https://magiceden.io/drops/majesticbulls" 
						target="_blank"
						rel="noreferrer"
						className="text-base sm:text-xl md:text-2xl xl:text-3xl font-light font-nexa  mb-5 md:mb-auto"
					>
						Clam WhiteList
					</a>
				</li>
			</ul>
		</section>
	)
}

export default InfoBox
