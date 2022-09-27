import Footer from "../components/Footer";
import Nav from "../components/Nav";

const AboutPage = {
    render() {
        return /* html */`
            
                <header>
                    ${Nav.render()}
                    </header>
                <div class="max-w-6xl mx-auto"> 
                
                <section class="news mb-28">
                    <h1 class="text-2xl text-[#272f53] font-semibold my-4 uppercase">Giới thiệu</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio obcaecati ex quae assumenda eligendi explicabo ipsum quaerat fuga cumque perferendis, consequatur pariatur, atque dolor distinctio! Mollitia exercitationem nihil quam dolore?</p>
                </section>
                </div>   
                ${Footer.render()}
        `;
    },
};
export default AboutPage;