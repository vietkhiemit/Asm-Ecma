/* eslint-disable import/no-unresolved */
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductsPage from "./products";
// import ProductsRate from "../components/ProductsRate";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Reviews from "../components/Reviews";
import Partners from "../components/Partners";

const HomePage = {
    async render() {
        return /* html */`
                <nav id="nav">
                    ${Nav.render()}
                </nav>

                <header id="header" >
                    ${Header.render()}
                </header>

                <section class="news">
                    ${await ProductsPage.render()}
                </section>
                <section class="banner">
                    ${Banner.render()}
                </section>
                <section class="review">
                    ${Reviews.render()}
                </section>
                <section class="partners">
                    ${Partners.render()}
                </section>
                
                <Footer>
                    ${Footer.render()}
                </Footer>
            
        `;
    },
    afterRender() {
        Nav.afterRender();
    },
};

export default HomePage;