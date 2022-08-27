

function Header( ) {


return (


    <header id="intro" className=" scroll-mt-28 xl:scroll-mt-40 relative">
    <span  className="aspect-[16/12] md:aspect-auto md:h-screen object-cover w-full" >

      <video  src={require('../../img/header.mp4')} type="video/mp4"    autoPlay muted/>
 
      <div className="flex items-center justify-center absolute top-1/2 left-1/2 transform p-10 -translate-x-1/2 -translate-y-1/2 gap-5 group">
      <button className="btn-play text-white w-16 h-16 opacity-0 invisible group-hover:visible group-hover:opacity-100 flex items-center justify-center transition-all duration-200 rounded-full bg-black" open>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-8 h-8 fill-current group-open:hidden block">
          <path d="M24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13V38.13zM64.69 52.7C54.81 46.66 42.44 46.43 32.35 52.09C22.25 57.75 16 68.42 16 80V432C16 443.6 22.25 454.2 32.35 459.9C42.44 465.6 54.81 465.3 64.69 459.3L352.7 283.3C362.2 277.5 368 267.1 368 256C368 244.9 362.2 234.5 352.7 228.7L64.69 52.7z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-8 h-8 fill-current group-open:block hidden"><path d="M64 64C59.58 64 56 67.58 56 72v368C56 444.4 59.58 448 64 448s8-3.578 8-8V72C72 67.58 68.42 64 64 64zM256 64c-4.422 0-8 3.578-8 8v368c0 4.422 3.578 8 8 8s8-3.578 8-8V72C264 67.58 260.4 64 256 64z" /></svg>
      </button>
      <button className="btn-voice group text-white w-16 h-16 opacity-0 invisible group-hover:visible group-hover:opacity-100 flex items-center justify-center transition-all duration-200 rounded-full bg-black" open>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-8 h-8 fill-current group-open:hidden block">
          <path
            d="M333.2 34.84c-4.289-1.969-8.623-2.841-13.16-2.841c-7.496 0-14.92 2.632-20.82 7.714L196.2 159.1H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h132.2l102.1 120.3C305.1 477.4 312.5 480 320 480c4.531 0 8.881-.8687 13.16-2.837C344.5 471.9 352 460.5 352 448V64C352 51.5 344.5 40.06 333.2 34.84zM336 447.1c0 6.223-3.656 11.92-9.309 14.53C324.6 463.5 322.3 463.1 320 463.1c-3.477 0-6.844-1.133-9.582-3.207l-106.9-124.8H64c-8.824 0-16-7.178-16-16v-128c0-8.822 7.176-16 16-16h139.6l106.8-124.8c2.742-2.072 6.102-3.203 9.57-3.203c2.324 0 4.586 .4961 6.703 1.467C332.3 52.07 336 57.77 336 63.99V447.1zM510.1 120.4c-3.344-2.781-8.438-2.313-11.25 1.125c-2.812 3.406-2.312 8.438 1.125 11.25C538.4 163.6 560 208.5 560 255.1s-21.56 92.44-59.16 123.3c-3.438 2.813-3.938 7.844-1.125 11.25c1.594 1.938 3.875 2.938 6.188 2.938c1.781 0 3.594-.5938 5.062-1.813C552.3 357.7 576 308.3 576 256S552.3 154.2 510.1 120.4zM439.2 195.5c-2.812 3.406-2.312 8.469 1.125 11.25C455.4 219 464 236.1 464 255.1s-8.625 36.97-23.69 49.28c-3.438 2.781-3.938 7.844-1.125 11.25c1.562 1.938 3.875 2.938 6.188 2.938c1.781 0 3.594-.5938 5.062-1.813C469.2 302.3 480 279.8 480 256s-10.78-46.32-29.56-61.66C447 191.6 441.9 192 439.2 195.5z"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-8 h-8 fill-current group-open:block hidden">
          <path
            d="M301.2 34.85c-4.289-1.969-8.639-2.848-13.17-2.848c-7.496 0-14.92 2.632-20.82 7.714L164.2 159.1H32c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h132.2l102.1 120.3c5.906 5.094 13.32 7.719 20.82 7.719c4.529 0 8.894-.875 13.17-2.844c11.34-5.219 18.82-16.66 18.82-29.16V64C319.1 51.5 312.5 40.07 301.2 34.85zM303.1 448c0 6.223-3.656 11.92-9.309 14.53C292.6 463.5 290.3 464 287.1 464c-3.477 0-6.844-1.133-9.582-3.207L171.6 335.1H32c-8.824 0-16-7.178-16-16v-128c0-8.822 7.176-16 16-16h139.6l106.8-124.8C281.2 49.13 284.5 48 287.1 48c2.322 0 4.584 .4961 6.701 1.467c5.656 2.602 9.312 8.305 9.312 14.53V448zM491.3 255.1l66.34-66.34c3.125-3.125 3.125-8.188 0-11.31s-8.188-3.125-11.31 0L480 244.7l-66.34-66.34c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31l66.34 66.34l-66.34 66.34c-3.125 3.125-3.125 8.188 0 11.31c3.127 3.127 8.186 3.127 11.31 0L480 267.3l66.34 66.34c3.127 3.127 8.186 3.127 11.31 0c3.125-3.125 3.125-8.188 0-11.31L491.3 255.1z"
          />
        </svg>
      </button>
    </div>
    </span>
    

  </header> 
  )
}

export default Header
