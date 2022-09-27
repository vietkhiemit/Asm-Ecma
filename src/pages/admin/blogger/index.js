// import axios from "axios";
import toastr from "toastr";
import { reRender } from "../../../utils";
import { getAll, remove } from "../../../api/blog";
import AdminNav from "../../../components/AdminNav";
import "toastr/build/toastr.min.css";

const AdminBlog = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <div class="min-h-full">
        ${AdminNav.render()}
        <header class="bg-white shadow">
          <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="lg:flex lg:items-center lg:justify-between">
              <div class="flex-1 min-w-0">
                <h2
                  class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                >
                Blog management
                </h2>
              </div>
              <div class="mt-5 flex lg:mt-0 lg:ml-4">
                <a href="/admin/blog/add" class="sm:ml-3">
                  <button
                    type="button"
                    class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add new blog
                  </button>
                </a>
  
                <!-- Dropdown -->
                <span class="ml-3 relative sm:hidden">
                  <button
                    type="button"
                    class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    id="mobile-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    More
                    <!-- Heroicon name: solid/chevron-down -->
                    <svg
                      class="-mr-1 ml-2 h-5 w-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <div
                    class="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="mobile-menu-button"
                    tabindex="-1"
                  >
                    <!-- Active: "bg-gray-100", Not Active: "" -->
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="mobile-menu-item-0"
                      >Edit</a
                    >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="mobile-menu-item-1"
                      >View</a
                    >
                  </div>
                </span>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <!-- Replace with your content -->
            <div class="px-4 py-6 sm:px-0">
              <!-- This example requires Tailwind CSS v2.0+ -->
                    <div class="flex flex-col">
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        ID
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Title
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Image
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Description
                                        </th>
                                        
                                        <th scope="col" class="relative px-6 py-3">
                                            <span class="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                    ${data.map((blog, index) => /* html */ `
                                        <tr>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                              ${index + 1}
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="text-sm text-gray-900">${blog.title}</div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                              <img src="${blog.image}"  width="50"/>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">${blog.desc}</div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a href="/admin/blog/${blog.id}/edit" class="text-indigo-600 hover:text-indigo-900">Sửa</a>
                                                <button 
                                                data-id="${blog.id}" 
                                                class="btn btn-remove inline-block bg-indigo-500 hover:bg-indigo-800 text-white text-sm py-2 px-6 rounded mx-4">Xóa</button>
                                            </td>
                                        </tr>
                                        `).join("")}  
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    </div>

            </div>
            <!-- /End replace -->
          </div>
        </main>
      </div>
        `;
    },

    afterRender() {
        // lấy toàn bộ button thông qua class
        const buttons = document.querySelectorAll(".btn");
        // lấy từng button
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                // lấy ID thông qua thuộc tính data-id ở button
                const { id } = button.dataset;
                const confirm = window.confirm("Do you want to delete this product?");
                if (confirm) {
                    // call api
                    remove(id).then(() => console.log("Deleted successfully"));
                }
                toastr.success("Deleted successfully");
                reRender(AdminBlog, "#app");
            });
        });
    },
};
export default AdminBlog;