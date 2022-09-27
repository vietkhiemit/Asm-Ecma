const Header = {
    render() {
        return /* html */`
            
<main class="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">

<div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
    <div class="container mx-auto px-6 flex relative py-16">
        <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20 ml-28">
            <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
            </span>
            
            <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Bringing  
                <span class="text-5xl sm:text-7xl">
                Natural Beauty 
                </span>
            </h1>
            <p class="text-sm sm:text-base text-gray-700 dark:text-white">
                Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
            </p>
            <div class="flex mt-8">
                <a href="#" class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                    Get started
                </a>
                <a href="#" class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                    Read more
                </a>
            </div>
        </div>
        
        <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative mr-20">
        
            <img src="./lib/images/banner/big-img/1.png" class="max-w-xl md:max-w-xl m-auto pt-20 mr-0 "/>
        </div>
        
    </div>
</div>
        <div role="main" class="flex flex-col items-center justify-center ">
            <h1 class="text-5xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">New Arrivals
            </h1>
            <p class="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12 ">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
        </div>
        
</main>
<!--
    <div class="relative float-right max-w-2xl mr-40  z-20 ">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </span>
            <input type="text" class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Search" />
    </div> -->
        `;
    },

};
export default Header;