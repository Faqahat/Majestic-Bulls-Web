import Town from '@imgs/Town@2x.png'
import Image from 'next/image'
function ShortDescription() {
	return (
		<div className="bg-black">
			<p className=" text-white text-3xl  md:text-5xl lg:text-5xl xl:text-5xl  font-bold  mb-[20px]  md:leading-normal max-w-[1410px] w-full px-5 mx-auto  pt-12 pb-6 font-Abreto text-left">
				Majestic Bulls is a Blockchain{' '}
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
					EcoSystem
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
			<p className="text-justify flex sm:text-xs md:text-xl mt-[20px]  md:mb-10  text-white md:leading-normal max-w-[1410px] w-full px-5 mx-auto  pb-12 pt-6 font-Abreto ">
				In the kingdom of Bullsmania, deep inside the walls of the castle
				surrounded by huge forests, reside the creatures of wonder, the forces
				of unnatural power, and the apex predator at the summit of the food
				chain, The Majestic Bulls. Bulls are seen as labor, food, and
				entertainment in old times and even today. Well, not these bulls though.
				These hold the strength of unimaginable proportion
			</p>
		</div>
	)
}

export default ShortDescription
