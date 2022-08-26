import Image from 'next/image'

import HeaderLogo from '../../img/logo.png'

function Navigation() {
	return (
		<nav
			id="navbar"
			className="px-5 w-full mx-auto h-[100px] xl:h-[150px] fixed bg-white border-b-2 border-black/20 xl:border-none z-50"
		>
			<div className="max-w-[1820px] w-full mx-auto flex items-center justify-between gap-28 h-full">
				<a href="#" className="flex items-center gap-1 h-full relative">
					
					<Image
						src={HeaderLogo}
						alt="logo"
						width="130" 
						// height="auto" 
						// layout="responsive" 
						 objectFit="contain"
						className="w-16 md:w-20 lg:w-24 2xl:w-auto h-auto object-contain"
					/>
					
					<span className="text-lg md:text-1xl lg:text-2xl 2xl:text-[28px] font-nexa font-bold text-black whitespace-nowrap">
						Majestic Bulls
					</span>
				</a>

				<div className="navbar w-auto">
					<ul className="flex flex-col desktop:flex-row items-center justify-center desktop:justify-between gap-4 w-full">
						<li>
							<div href="#intro" className="text-link active">
								<span className="font-bold">The </span> Intro
							</div>
						</li>
						<li>
							<div href="#tale" className="text-link">
								<span className="font-bold"> The </span> Tale
							</div>
						</li>
						<li>
							<div href="#majestic" className="text-link">
								<span className="font-bold"> The </span>Majestics
							</div>
						</li>
						<li>
							<div href="#alpha" className="text-link">
								<span className="font-bold"> The </span> Alphas
							</div>
						</li>
						<li>
							<div href="#roadmap" className="text-link">
								<span className="font-bold"> The </span> Roadmap
							</div>
						</li>
						<li>
							<div href="#council" className="text-link">
								<span className="font-bold"> The </span>Council
							</div>
						</li>
					</ul>
					<a
						href="#"
						className="2xl:h-14 w-10 h-10 2xl:w-14 border border-[#707070] rounded-full flex justify-center items-center text-[#707070]"
					>
						<svg
							className="2xl:w-8 w-6 h-6 2xl:h-8"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							fill="currentColor"
						>
							<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
						</svg>
					</a>
				</div>
				<button className="inline-block desktop:hidden nav-btn" open>
					<svg
						className="md:w-[50px] text-black w-6 h-6 md:h-[50px] group-open:hidden block"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
						fill="currentColor"
					>
						<path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="md:w-[50px] text-black w-6 h-6 md:h-[50px] fill-current group-open:block hidden"
						viewBox="0 0 320 512"
					>
						<path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
					</svg>
				</button>
			</div>
		</nav>
	)
}

export default Navigation