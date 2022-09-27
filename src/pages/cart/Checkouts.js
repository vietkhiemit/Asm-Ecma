import toastr from "toastr";
import $ from "jquery";
import validate from "jquery-validation";
import { add } from "../../api/checkout";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import "toastr/build/toastr.min.css";

const Checkouts = {
    async render() {
        let cart = [];
        let user = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        if (localStorage.getItem("user")) {
            user = JSON.parse(localStorage.getItem("user"));
        }
        return /* html */ `
        ${await Nav.render()}
        <div class="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44">
        <div class="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
            <div class="flex w-full flex-col justify-start items-start">
                <div class="">
                    <p class="text-3xl lg:text-4xl dark:text-white font-semibold leading-7 lg:leading-9 text-gray-800">Check out</p>
                </div>
                <div class="mt-2">
                    <a href="/cart" class="text-base dark:text-gray-400 leading-4 underline hover:text-gray-800 text-gray-600">Back to my bag</a>
                </div>
                <div class="mt-12">
                    <p class="text-xl font-semibold dark:text-white leading-5 text-gray-800">Shipping Details</p>
                </div>
                <form action="" id="form-checkout" class="my-10 ">
                        
                        <input type="text" id="fullname" name="fullname" value="${localStorage.getItem("user") ? user.username : ""}" class="my-5 px-2 focus:outline-none dark:bg-transparent dark:text-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Full Name" />
                        <input type="email" id="emailCheckOut" name="emailCheckOut" value="${localStorage.getItem("user") ? user.email : ""}" class="my-5 px-2 focus:outline-none dark:bg-transparent dark:text-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Email" />
                        <input type="" id="phone" name="phone" class="my-5 focus:outline-none dark:text-gray-400 dark:bg-transparent dark:placeholder-gray-400 focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Phone Number" />
                        <input id="address" name="address" class="my-5 px-2 focus:outline-none dark:bg-transparent dark:text-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Address" />
                    <button type="submit" class="focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-white focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">Order Total : <span id="order-output"></span></button>
                
                </div>
                </form>
            <div class="flex flex-col justify-start items-start bg-gray-50 dark:bg-gray-800 w-full p-6 md:p-14">
                <div>
                    <h1 class="text-2xl  dark:text-white font-semibold leading-6 text-gray-800">Order Summary</h1>
                </div>
                <div class="flex mt-7 flex-col items-end w-full space-y-6">
                ${cart.map((item) => `
                    <div class="flex justify-between w-full items-center">
                        <p class="text-lg dark:text-gray-300 leading-4 text-gray-600">Product Image</p>
                        <img src=" ${item.image} " alt="Product" class="rounded w-1/4" id="img-oder">
                    </div>
                    <div class="flex justify-between w-full items-center">
                        <p class="text-lg dark:text-gray-300 leading-4 text-gray-600">Product Name</p>
                        <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">${item.name}</p>
                    </div>
                    <div class="flex justify-between w-full items-center">
                        <p class="text-lg dark:text-gray-300 leading-4 text-gray-600">Unit Price</p>
                        <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">${item.price_new}$</p>
                    </div>
                    <div class="flex justify-between w-full items-center">
                        <p class="text-lg dark:text-gray-300 leading-4 text-gray-600">Quantity * Unit Price</p>
                        <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">${item.quantity} x ${new Intl.NumberFormat("de-DE", { style: "currency", currency: "USD" }).format(item.price_new)}</p>
                    </div>
                    <div class="flex justify-between w-full items-center">
                        <p class="text-lg dark:text-gray-300 leading-4 text-gray-600">Total</p>
                        <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">${new Intl.NumberFormat("de-DE", { style: "currency", currency: "USD" }).format((item.price_new) * (item.quantity))}</p>
                    </div>`).join("")}
                </div>
                <div class="flex justify-between w-full items-center mt-32">
                    <p class="text-xl dark:text-white font-semibold leading-4 text-gray-800">Estimated Total </p>
                    <span id="price-output" class="text-xl dark:text-white font-semibold leading-4 text-gray-800"></span>
                </div>
            </div>
        </div>
    </div>

    ${Footer.render()}
        `;
    },
    afterRender() {
        Nav.afterRender();
        const formCheckout = $("#form-checkout");
        const cart = JSON.parse(localStorage.getItem("cart"));
        const outOrder = document.querySelector("#order-output");
        const outPrice = document.querySelector("#price-output");
        let sum = 0;
        for (let i = 0; i < cart.length; i++) {
            const percent = cart[i].price_new * cart[i].quantity;
            sum += percent;
            outOrder.innerHTML = `${sum.toLocaleString("de-DE")} $`;
            outPrice.innerHTML = `${sum.toLocaleString("de-DE")} $`;
        }

        formCheckout.validate({
            rules: {
                address: "required",
                email: "required",
                phone: {
                    required: true,
                    minlength: 5,
                },
            },
            messages: {
                emailCheckOut: "Required to enter this field!",
                address: "Required to enter this field!",
                phone: {
                    required: "Required to enter this field!",
                    minlength: "Enter at least 5 characters",
                },
            },
            submitHandler() {
                async function addOder() {
                    add({
                        name: document.querySelector("#fullname").value,
                        email: document.querySelector("#emailCheckOut").value,
                        address: document.querySelector("#address").value,
                        phone: document.querySelector("#phone").value,
                        oderprice: outOrder.innerHTML,
                    }).then(async () => {
                        localStorage.removeItem("cart");
                        toastr.success("Order has been sent");
                    });
                }
                addOder();
            },
        });
    },
};
export default Checkouts;