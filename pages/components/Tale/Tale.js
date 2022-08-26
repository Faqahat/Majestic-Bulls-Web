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
			<div className="max-w-full lg:max-w-[574px] w-full bg-black ml-auto p-5 sm:p-[2rem] static lg:absolute  md:top-[1px] xl:top-[8rem]  right-20">
				<div className="flex items-center gap-5 pb-[15px]">
					<h2 className="text-3xl md:text-[43px] text-white leading-[70px] font-normal">
						{'//'} <span className="font-normal text-white">The</span> Tale
					</h2>
					
					<Image
						src={taleHeader}
						alt="img"
						className="w-16 md:w-auto h-auto object-contain"
						height="80"
						width="80"
					/>
				</div>
				<p
					className="text-white md:text-[16px] text-base leading-relaxed md:leading-[30px] font-light pr-3 md:pr-12 font-nexa h-[350px] md:h-[330px] overflow-auto"
					id="scrollbar-custom"
				>
					It is the year 2222. Life in Animatopia is the same as its been for
					the past 100 years. The mighty rule over the weak, and the weak submit
					to the strong. The kingdom is divided into various towns with several
					species ruling over their areas. The kingdom is in harmony, but it has
					not been that fair for every type. Little do the noble realise how
					much struggle the frail have to commit to survive in this chain. The
					hierarchy of power is not impartial for everyone, misusing the
					authority to break the typical reasoning.It is the year 2222. Life in
					Animatopia is the same as its been for the past 100 years. The mighty
					rule over their areas. The kingdom is in harmony, but it has not been
					that fair for every type. Little do the noble realise how much
					struggle the frail have to commit to survive in this chain. The
					hierarchy of power is not impartial for everyone, misusing the
					authority to break the typical reasoning.It is the year 2222. Life in
					Animatopia is the same as its been for the past 100 years. The mighty
					rule over the weak, and
				</p>
			</div>
		</section>
	)
}

export default Tale
