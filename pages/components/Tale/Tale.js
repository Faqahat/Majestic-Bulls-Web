import taleHeader from '@imgs/tale-head.png'
import taleImg from '@imgs/tale.png'
import Image from 'next/image'

function Tale() {
	return (
		<section
			id="tale"
			className="w-full h-full  relative scroll-mt-28 xl:scroll-mt-40"
		>
			<Image
				src={taleImg}
				alt="img"
				className="w-full aspect-video md:aspect-auto md:h-full object-cover md:object-right"
				layout="responsive" objectFit="contain"
			/>

			<div className=" mt-[-9px] md:mt-[0px]  max-w-full lg:max-w-[554px] w-full bg-black ml-auto p-5 sm:p-[2rem] static lg:absolute  md:top-[1px] xl:top-[8rem]  right-20">
				<div className="flex items-center gap-5 pb-[15px]">
					<h2 className="text-3xl md:text-[43px] text-white leading-[70px] font-normal font-Abreto text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
						{'//'} <span className="font-normal text-white ">The</span> Tale
					</h2>

					<Image
						src={taleHeader}
						alt="img"
						className="w-16 md:w-auto h-auto object-contain"
						height="50"
						width="50"
					/>
				</div>
				
				<br />
				<p
					className="text-justify font-Abreto text-white md:text-[16px] text-base leading-relaxed md:leading-[30px] font-light pr-3 md:pr-12  h-[380px] md:h-[380px] overflow-auto"
					id="scrollbar-custom"
				>
					Welcome to the kingdom of Bullsmania, a land of wonder and magic, where the majestic bulls reign supreme. Nestled within the walls of their castle, surrounded by sprawling forests, these creatures of unparalleled strength and power hold sway over all who dare to enter their domain.

						In the past, bulls were seen as nothing more than labor, food, and entertainment. But these bulls are different. They are focused on physical fitness, spending their days honing their muscles and perfecting their buff, muscular builds. They are the apex predators of their world, feared and respected by all who encounter them.

						But the kingdom of Bullsmania is not all about brute force. It is home to bulls of all professions and cultures, from working bulls to mercenary tyrants. And its history is rich and complex, built on a foundation of struggle and bloodshed.

						For years, the bulls of Bullsmania lived under the yoke of oppression, treated as little more than cattle. But one day, a group of brave young bulls rose up against their oppressors, choosing rebellion over submission. Wars were fought, and the hierarchy of the world was forever changed. The kings of Bullsmania were crowned as the guardians of their land, charged with protecting their people for generations to come.

						But who knows what the future holds? What would it take to overthrow the kingdom once again? Only time will tell.
				</p>
				<br />
			</div>
		</section>
	)
}

export default Tale
