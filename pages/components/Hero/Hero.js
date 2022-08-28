import ReactPlayer from 'react-player'
import { useRef, useState, useEffect } from 'react'
function Header() {
	let video = useRef()
	let [playing, setPlaying] = useState(false)
	const [hasWindow, setHasWindow] = useState(false)
	useEffect(() => {
		if (typeof window !== 'undefined') {
			setHasWindow(true)
		}
	}, [])
	return (
		<div>
			<header
				id="intro"
				onContextMenu={e => e.preventDefault()}
				className="mt-[100px] scroll-mt-28 xl:scroll-mt-40 relative"
				onClick={() => {
					console.log('clicked video')
					if (playing) {
						console.log('pauseing video')
						return setPlaying(false)
					}

					setPlaying(true)
				}}
			>
				<span className="aspect-[16/12] md:aspect-auto md:h-screen object-cover w-full">
					{/* <video
					src={require('../../img/header.mp4')}
					type="video/mp4"
					autoPlay
					ref={video}
				/> */}
					{hasWindow && (
						<ReactPlayer
							width={'100%'}
							height={'220%'}
							playing={playing}
							pip={true}
							muted={false}
							light={false}
							ref={video}
							onEnded={() => setPlaying(false)}
							url={require('../../img/header.mp4')}
							config={{ file: { attributes: { playsInline: true } } }}
						/>
					)}
					<div className="flex items-center justify-center absolute top-1/2 left-1/2 transform p-10 -translate-x-1/2 -translate-y-1/2 gap-5 group">
						{!playing ? (
							<button
								className="btn-play text-black w-16 h-16 lg:h-24 lg:w-24 opacity-100 flex items-center justify-center transition-all duration-200 rounded-full bg-white"
								open
								onClick={() => {
									if (!playing) {
										setPlaying(true)
									} else {
										setPlaying(false)
									}
								}}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 384 512"
									className="w-8 h-8 fill-current group-open:hidden block"
								>
									<path d="M24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13V38.13zM64.69 52.7C54.81 46.66 42.44 46.43 32.35 52.09C22.25 57.75 16 68.42 16 80V432C16 443.6 22.25 454.2 32.35 459.9C42.44 465.6 54.81 465.3 64.69 459.3L352.7 283.3C362.2 277.5 368 267.1 368 256C368 244.9 362.2 234.5 352.7 228.7L64.69 52.7z" />
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 320 512"
									className="w-8 h-8 fill-current group-open:block hidden"
								>
									<path d="M64 64C59.58 64 56 67.58 56 72v368C56 444.4 59.58 448 64 448s8-3.578 8-8V72C72 67.58 68.42 64 64 64zM256 64c-4.422 0-8 3.578-8 8v368c0 4.422 3.578 8 8 8s8-3.578 8-8V72C264 67.58 260.4 64 256 64z" />
								</svg>
							</button>
						) : (
							<></>
						)}
					</div>
				</span>
			</header>
		</div>
	)
}

export default Header
