import Navigo from "navigo";
import AboutPage from "./pages/about";
import AdminNewsPage from "./pages/admin/products";
import NotFoundPage from "./pages/notFound";
import HomePage from "./pages/home";
import Blog from "./components/Blog";
import CartPage from "./pages/cart/Cart";
import ProductsDetail from "./pages/products/ProductsDetail";
import ProductsPage from "./pages/products";
import Checkouts from "./pages/cart/Checkouts";
import AdminAddNewsPage from "./pages/admin/products/add";
import AdminEditProducts from "./pages/admin/products/edit";
import Signin from "./pages/sign-in";
import Signup from "./pages/sign-up";
import Contact from "./components/contact";
import ProductsCate from "./pages/products/productsCate";
import AdminUser from "./pages/admin/users";
import AdminContact from "./pages/admin/contact";
import AdminBlog from "./pages/admin/blogger";
import AdminAddBlog from "./pages/admin/blogger/add";
import AdminOrder from "./pages/admin/order";
import AdminEditBlog from "./pages/admin/blogger/edit";
import BlogDetail from "./components/BlogDetail";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};
router.on("/admin/*", () => {}, {
    before: (done) => {
        if (localStorage.getItem("user")) {
            const userId = JSON.parse(localStorage.getItem("user")).id;
            if (userId === 1) {
                done();
            } else {
                document.location.href = "/";
            }
        }
    },
});

router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/admin/user": () => print(AdminUser),
    "/admin/contact": () => print(AdminContact),
    "/admin/blog": () => print(AdminBlog),
    "/admin/order": () => print(AdminOrder),
    "/admin/products": () => print(AdminNewsPage),
    "/blog": () => print(Blog),
    "/contact": () => print(Contact),
    "/cart": () => print(CartPage),
    "/products": () => print(ProductsPage),
    "/productscate": () => print(ProductsCate),
    "/checkout": () => print(Checkouts),
    "/sign-in": () => print(Signin),
    "/sign-up": () => print(Signup),
    "/products-detail/:id": ({ data }) => {
        print(ProductsDetail, data.id);
    },
    "/blogs-detail/:id": ({ data }) => {
        print(BlogDetail, data.id);
    },
    "/admin/products/add": () => {
        print(AdminAddNewsPage);
    },
    "/admin/products/:id/edit": ({ data }) => {
        print(AdminEditProducts, data.id);
    },
    "/admin/blog/add": () => {
        print(AdminAddBlog);
    },
    "/admin/blog/:id/edit": ({ data }) => {
        print(AdminEditBlog, data.id);
    },

});
router.notFound(() => print(NotFoundPage));
router.resolve();