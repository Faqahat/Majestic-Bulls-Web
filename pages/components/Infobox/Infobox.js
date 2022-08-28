import forestImg from '@imgs/bg forest.png'
import downloadImg from '@imgs/download.png'
import Image from 'next/image'

function InfoBox() {
	return (
		<section className="w-full h-full  relative py-12 px-5 bg-black text-white">
			<Image
				src={forestImg}
				alt="img"
				className="w-full aspect-video md:aspect-auto md:h-full object-cover md:object-right"
				layout="fill"
			/>

			<h1 className="relative text-4xl font-light text-center md:text-6xl 2xl:text-6xl mb-[130px]">
				<strong className="font-bold font-Abreto">Download Digest</strong>{' '}
				<br />
				<span className="text-2xl"> Version 1.0 </span>
			</h1>
			<ul className="relative flex  items-center justify-center gap-4 flex-wrap sm:gap-7 xl:gap-16">
				<li>
					<a
						href="#"
						className="flex w-fit items-center text-base text-black bg-white px-7 pt-3 pb-3 leading-normal sm:text-xl md:text-2xl 2xl:text-3xl font-nexa hover:-translate-y-1 hover:scale-110"
					>
						<span className="text-xl mr-6 font-semibold ">Download</span>
						<Image
							src={downloadImg}
							alt="img"
							className="w-full aspect-video md:aspect-auto md:h-full object-cover md:object-right"
							height="35"
							width="35"
						/>
					</a>
				</li>
				<li className="text-base sm:text-xl md:text-3xl font-bold font-nexa">
					or
				</li>
				<li>
					<a
						href="#"
						className="text-base sm:text-xl md:text-2xl xl:text-3xl font-light font-nexa underline"
					>
						View Online
					</a>
				</li>
			</ul>
		</section>
	)
}

export default InfoBox
