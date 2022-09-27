import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { add } from "../api/contact";
import Footer from "./Footer";
import Nav from "./Nav";

const Contact = {
    render() {
        return /* html */ `
        ${Nav.render()}
    <section class="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 pt-10">
    <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white">Get in touch</h2>
    <p class="mt-3 text-center text-gray-600 dark:text-gray-400 mb-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8638558814187!2d105.744598414678!3d21.03813279283474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1645236041915!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    <div class="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
        <a href="#" class="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>

            <span class="mt-2"> FPT Polytechnic</span>
        </a>

        <a href="#" class="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>

            <span class="mt-2">+2499999666600</span>
        </a>

        <a href="#" class="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>

            <span class="mt-2">Khiemnvph10889@fpt.edu.vn</span>
        </a>
    </div>
    
    <form action="" id="form-contact">
            <div class="mt-6 ">
            <div class="items-center -mx-2 md:flex">
                <div class="w-full mx-2">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Name</label>

                    <input id="fullname" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text">
                </div>

                <div class="w-full mx-2 mt-4 md:mt-0">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">E-mail</label>

                    <input id="title-email" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="email">
                </div>
            </div>

            <div class="w-full mt-4">
                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Message</label>

                <textarea id="title-mess" class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></textarea>
            </div>

            <div class="flex justify-center mt-6">
                <button class="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Send Message</button>
            </div>
        </div>
    </form>
</section>
${Footer.render()}
        `;
    },
    afterRender() {
        const formContact = document.querySelector("#form-contact");

        // submit form
        formContact.addEventListener("submit", async (e) => {
            e.preventDefault();

            // Lấy giá trị của file upload cho sử dụng formData

            add({
                name: document.querySelector("#fullname").value,
                email: document.querySelector("#title-email").value,
                message: document.querySelector("#title-mess").value,

            });
            toastr.success("Submitted Successfully");
        });
    },
};
export default Contact;