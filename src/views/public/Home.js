import React from "react";
import TextRotator from "../../components/textRotator/TextRotator";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Skills from "../../components/skills/Skills";
import Tools from "../../components/skills/Tools";
import ContactForm from "../../components/contactForm/ContactForm";
import Resume from "../../assets/pdfs/Resume.pdf";
import About from "../../components/About";
import Improvement from "../../components/Improvement";

const Home = () => {
  return (
    <>
      <Header />
      <section className="section header-bg-img h-100vh" id="home">
        <div className="bg-overlay"></div>
        <div className="header-table">
          <div className="header-table-center">
            <div className="container position-relative z-index">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="text-center header-content mx-auto">
                    <h4 className="text-white first-title mb-4">Welcome</h4>
                    <h1 className="header-name text-white text-capitalize mb-0">
                      I'm{" "}
                      <span className="simple-text-rotate font-weight-bold">
                        <TextRotator
                          items={["James Tinker", "A Web Developer."]}
                        />
                      </span>
                    </h1>
                    <p className="text-white mx-auto header-desc mt-4">
                      I develop websites of all sizes, and I love doing it.
                    </p>
                    <div className="mt-4 pt-2">
                      <a
                        href={Resume}
                        className="btn btn-outline-custom btn-round"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download Resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll_down">
          <a href="#about" className="scroll">
            <i className="text-white"></i>
          </a>
        </div>
      </section>

      <About />
      <Skills />
      <Tools />
      <Improvement />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
