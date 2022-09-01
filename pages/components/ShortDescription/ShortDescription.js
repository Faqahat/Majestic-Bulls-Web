import Town from '@imgs/Town@2x.png'
import Image from 'next/image'

function ShortDescription() {
	return (
		<div className="bg-black">
			<p className=" text-white text-3xl  md:text-5xl lg:text-5xl xl:text-5xl  font-bold  mb-[20px]  md:leading-normal max-w-[1410px] w-full px-5 mx-auto  pt-12 pb-6 font-Abreto text-left">
				Welcome to The{' '}
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
					Majestic Bulls
				</span>{' '}
			</p>{' '}
			<div className="h-64 w-screen relative">
				<Image
					src={Town}
					alt="Picture of the author"
					layout="fill" // required
					objectFit="cover" // change to suit your needs
					className="" // just an example
				/>
			</div>
			<p className="text-justify flex sm:text-xs md:text-xl md:mt-[40px] md:mb-[40px]    text-white md:leading-normal max-w-[1410px] w-full px-5 mx-auto  pb-12 pt-6 font-Abreto ">
			A unique collection of NFTs powered by Ethereum, Majestic Bulls. A community with a strong sense of belonging. An interesting theme and story with a strong community. Majestic Bulls is one of a kind with its scalable architecture and very dedicated & professional team. Majestic Bulls is more than just an NFT project. We strive to build an ecosystem where all stakeholders can benefit.
			</p>
		</div>
	)
}

export default ShortDescription
