import toastr from "toastr";
import { reRender } from "../utils";
import "toastr/build/toastr.min.css";

const Nav = {
    render() {
        return /* html */ `
        <div class= "max-w-7xl mx-auto pt-6 ">
        <div class=" bg-white">
        <nav class="2xl:container 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4">
            <!-- For large and Medium-sized Screen -->
            <div class="flex justify-between "> 
                <div class="hidden sm:flex flex-row items-center space-x-6">
                    <a href="/#/"><img src="./lib/images/logo/4.png"></a>                                                             
                </div>
                <div class=" flex space-x-3 items-center">
                <nav class="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                    <a href="" class="py-2 px-6 flex hover:text-indigo-500">
                        Home
                    </a>
                    <a href="/#/productscate" class="py-2 px-6 flex hover:text-indigo-500">
                        Product
                    </a>
                    <a href="/#/blog" class="py-2 px-6 flex hover:text-indigo-500">
                        Blog
                    </a>
                    <a href="/#/contact" class="py-2 px-6 flex hover:text-indigo-500">
                        Contact
                    </a>
                    <a href="/#/" class="py-2 px-6 flex hover:text-indigo-500">
                        Page
                    </a>
                    
                </nav>
                </div>
                
                <!--<div class="hidden sm:flex flex-row space-x-4">
                    <a href="/sign-up"><button class="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-indigo-700 bg-white border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center" >Sign Up</button></a>
                </div> -->
                

                
                
                ${localStorage.getItem("user") ? /* html */ `
                        <ul class="flex">
                            
                            <li class="flex items-center"> <a href="/" class="block px-4 py-3" id="email"></a></li>
                            
                            <li><a href="/#/"><button class="rounded-md flex space-x-2 w-20 h-7 m-4 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center" id="logout" >Logout</button></a></li>
                            </ul>
                    ` : ""} 

                <div class="flex justify-center lg:block">
                
                        <a class="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="/#/cart">
                            
                                <svg class="w-8 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                        
                                <span class="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
                            </a>
                        </a>
                </div>
  
                <!-- Burger Icon -->
                <div id="bgIcon" onclick="toggleMenu()"  class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  flex justify-center items-center sm:hidden cursor-pointer">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg6.svg" alt="burger" />
                    <img class=" hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg7.svg" alt="cross" />
                </div>
            </div>
  
            <!-- Mobile and small-screen devices (toggle Menu) -->
            
        </nav>    
    </div>
        </div>
        
        `;
    },
    afterRender() {
        // Lấy thông tin từ localStorage
        // Sử dụng JSON.parse để chuyển đổi chuỗi sang object
        const email = document.querySelector("#email");
        const logout = document.querySelector("#logout");
        if (email) {
            email.innerHTML = JSON.parse(localStorage.getItem("user")).username;
        }
        if (logout) {
            logout.addEventListener("click", () => {
                localStorage.removeItem("user");
                reRender(Nav, "#nav");
                toastr.success("Logout thành công");
            });
        }
    },
};
export default Nav;