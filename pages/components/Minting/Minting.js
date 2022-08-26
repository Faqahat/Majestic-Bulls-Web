import Image from 'next/image'
import bullIcon from '@imgs/bull.png'
import powerIcon from '@imgs/power icon.png'

function Minting() {
	return (
		<div className="px-5 sm:px-12 mt-24 lg:-mt-20 z-10 relative md:mb-[100px]">
			<div className="bg-[#49475E] max-w-[1000px] 2xl:max-w-[1390px] w-full mx-auto rounded-[23px] border border-[#707070] shadow-normal py-[22px] px-5 md:px-10 relative">
				<div className="grid grid-cols-1 md:grid-cols-[minmax(60px,100px),minmax(280px,598px),minmax(177px,1fr)] lg:grid-cols-[minmax(100px,200px),minmax(280px,598px),minmax(177px,1fr)] gap-7 items-center">
					<Image
						src={bullIcon}
						alt="bull"
						className="w-auto h-auto object-contain block mx-auto md:mx-0"
					/>
					<div className="text-center md:text-left">
						<h4 className="text-2xl lg:text-4xl 2xl:text-5xl mb-4 font-nexa text-white font-bold">
							Minting Information
						</h4>
						<div className="flex items-center justify-center md:justify-start gap-3">
							<p className="text-xl lg:text-2xl 2xl:text-3xl font-bold font-nexa leading-normal lg:leading-[70px] text-white">
								Minting Date
							</p>
							<p className="text-xl lg:text-3xl font-light font-nexa xl:leading-[70px] text-white">
								xx/xx/xxxx
							</p>
						</div>
						<div className="flex items-center justify-center md:justify-start sm:gap-3">
							<p className="text-xl lg:text-2xl 2xl:text-3xl font-bold font-nexa leading-normal lg:leading-[70px] text-white">
								Time
							</p>
							<p className="text-xl lg:text-3xl font-light font-nexa leading-normal lg:leading-[70px] text-white">
								xx:xx:xx
							</p>
						</div>
						<div className="flex items-center justify-center md:justify-start gap-3">
							<div className="flex items-center gap-3">
								<p className="text-xl lg:text-2xl 2xl:text-3xl font-bold font-nexa 2xl:leading-[70px] text-white">
									WL
								</p>
								<p className="text-xl lg:text-[37px] font-light font-nexa xl:leading-[70px] text-white">
									: x.xx e
								</p>
							</div>
							<span className="w-[2px] h-10 bg-white inline-block"></span>
							<div className="flex items-center gap-3">
								<p className="text-xl lg:text-2xl 2xl:text-[37px] font-bold font-nexa leading-[70px] text-white">
									PB
								</p>
								<p className="text-xl lg:text-[37px] font-light font-nexa leading-[70px] text-white">
									: x.xx e
								</p>
							</div>
						</div>
					</div>
					<div className="w-full">
						<button className="max-w-full md:max-w-[300px] shadow-normal flex items-center justify-center gap-4 w-full h-14 2xl:h-[85px] bg-white text-black text-lg sm:text-2xl 2xl:text-[40px] font-bold mb-7">
							Mint Now
							<Image
								src={powerIcon}
								alt="icon"
								className="w-3 sm:w-5 2xl:w-auto h-auto object-contain"
							/>
						</button>
						<div className="max-w-full md:max-w-[300px] w-full">
							<div className="w-full relative z-10 flex items-center bg-white">
								<p className="text-[19px] font-light font-nexa text-white h-[31px] leading-normal w-full flex justify-center items-center text-center">
									1600
								</p>
								<p className="text-[19px] font-light font-nexa text-black h-[31px] leading-normal w-full flex justify-center items-center text-center">
									2000
								</p>
								<span className="block h-full top-0 left-0 bottom-0 absolute -z-10 pointer-events-none bg-[#006904] w-[60%]"></span>
							</div>
						</div>
						<p className="text-base sm:text-2xl 2xl:text-5xl font-bold font-nexa text-white bg-[#035300] max-w-[180px] 2xl:max-w-[260px] w-full h-12 xl:h-16 flex items-center justify-center transform top-0 right-1/2 -translate-y-1/2 translate-x-1/2 sm:translate-y-0 sm:rotate-[30deg] absolute sm:top-4 sm:right-0 sm:translate-x-1/4">
							Live Now!
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Minting
