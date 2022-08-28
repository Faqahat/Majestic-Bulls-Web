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
			/>
			<div className="max-w-full lg:max-w-[554px] w-full bg-black ml-auto p-5 sm:p-[2rem] static lg:absolute  md:top-[1px] xl:top-[8rem]  right-20">
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
					className="font-Abreto text-white md:text-[16px] text-base leading-relaxed md:leading-[30px] font-light pr-3 md:pr-12  h-[380px] md:h-[380px] overflow-auto"
					id="scrollbar-custom"
				>
					In the kingdom of Bullsmania, deep inside the walls of the castle
					surrounded by huge forests, reside the creatures of wonder, the forces
					of unnatural power, and the apex predator at the summit of the food
					chain, The Majestic Bulls. Bulls are seen as labor, food, and
					entertainment in old times and even today. Well, not these bulls
					though. These hold the strength of unimaginable proportion. Even the
					jungle king would think twice before interfering in their affairs. To
					be fair, who wouldn’t? These vast mountains of muscle would give
					nightmares to anyone they deem to pray. These focused on physical
					fitness spend most of their time working on their bodies and
					maintaining the buff and muscular build. However, these oxen do not
					interfere in the matters of the other kingdoms and solely retain their
					affairs within the domain of Bullsmania. It’s not like they need to
					leave the kingdom for any need to get fulfilled within the dynasty’s
					locality. Bulls of all professions and cultures are found here. You’ve
					got the working bulls and the tyrant of the land, the mercenaries. It
					hasn’t always been this way, though. The history of Bullsmania is
					built on a solid foundation and years of struggle and blood. Bulls
					were no more than cattle until the year of reckoning. Tired of the
					injustice and pressure imposed on them, there seemed no way out for
					these magnificent beings until a group of brave young Bulls refused to
					give in. Until, one day, they chose rebellion. Wars broke out. Bulls
					that were seen as pure mammals were ruthless murdering maniacs. They
					didn’t get to be majestic overnight. Nevertheless, the hierarchy of
					the world changed that year. The King crowned the heroes of Bullsmania
					as the guardians of the land and protectors of the generations to
					come. The question is: What would it take to overthrow the kingdom
					again?
				</p>
				<br />
			</div>
		</section>
	)
}

export default Tale
