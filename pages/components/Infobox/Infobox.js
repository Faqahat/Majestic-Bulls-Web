import Image from 'next/image'

function InfoBox() {
	return (
		<section className="py-12 px-5 bg-black text-white">
			<h1 className="text-4xl font-light text-center md:text-6xl 2xl:text-2xl mb-44">
				<strong className="font-bold">Get</strong> Whitelisted{' '}
				<strong className="font-bold">!</strong>
			</h1>
			<ul className="flex items-center justify-center gap-4 flex-wrap sm:gap-7 xl:gap-16">
				<li>
					<a
						href="#"
						className="block w-fit text-base text-black bg-white px-8 pt-3 pb-4 leading-normal sm:text-xl md:text-4xl 2xl:text-6xl font-nexa"
					>
						Apply
					</a>
				</li>
				<li className="text-base sm:text-xl md:text-4xl font-bold font-nexa">
					or
				</li>
				<li>
					<a
						href="#"
						className="text-base sm:text-xl md:text-2xl xl:text-4xl font-light font-nexa underline"
					>
						View White List
					</a>
				</li>
			</ul>
		</section>
	)
}

export default InfoBox
