import Image from 'next/image'
import taleImg from '@imgs/tale.png'
import taleHeader from '@imgs/tale-head.png'
function Tale() {
	return (
		<section
			id="tale"
			className="w-full h-full lg:h-[1150px] relative scroll-mt-28 xl:scroll-mt-40"
		>
			<Image
				src={taleImg}
				alt="img"
				className="w-full aspect-video md:aspect-auto md:h-full object-cover md:object-right"
			/>
			<div className="max-w-full lg:max-w-[860px] w-full bg-black ml-auto p-5 sm:p-14 static lg:absolute top-20 right-20">
				<div className="flex items-center gap-5">
					<h2 className="text-3xl md:text-[55px] text-white leading-[70px] font-light">
						{'//'} <span className="font-bold text-white">The</span> Tale
					</h2>
					<Image
						src={taleHeader}
						alt="img"
						className="w-16 md:w-auto h-auto object-contain"
					/>
				</div>
				<p
					className="text-white md:text-2xl text-base leading-relaxed md:leading-[50px] font-bold pr-3 md:pr-12 font-nexa h-[350px] md:h-[770px] overflow-auto"
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
