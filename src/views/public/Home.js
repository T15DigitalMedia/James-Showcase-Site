import React from 'react';
import TextRotator from '../../components/textRotator/TextRotator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import HeadShot from '../../assets/images/headshot.jpeg';
import ProjectBox from '../../components/projectBox/ProjectBox';
import ContactForm from '../../components/contactForm/ContactForm';
import T15Digital from '../../assets/images/t15digital.png';

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
                                        <h1 className="header-name text-white text-capitalize mb-0">I'M <span className="simple-text-rotate font-weight-bold"><TextRotator items={['James Tinker', 'A Web Developer.']} /></span></h1>
                                        <p className="text-white mx-auto header-desc mt-4">It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
                                        {/* <div className="mt-4 pt-2">
                                            <a href="#" className="btn btn-outline-custom btn-round">Download Cv</a>
                                        </div> */}
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

            <section className="section" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="mt-3">
                                <img src={HeadShot} alt="" className="img-fluid mx-auto d-block img-thumbnail"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mt-3">
                                <h2><span className="font-weight-bold">About</span> Me</h2>
                                <h4 className="mt-4">Hello! <span className="text-custom font-weight-bold">I'm James Tinker.</span></h4>
                                <p className="text-muted mt-4">
                                    An experienced and entrepreneurial web developer with key accomplishments creating custom website for early stage start-ups.
                                    Approaches all projects using Agile Methodology ensuring compliance to project timelines, effective communication with stakeholders and manage product requirements.
                                </p>
                                <p className="text-muted mt-2">
                                    I am most experienced in Ruby on Rails and the languages that are associated (HTML, CSS, Javascript). I also have a working knowledge of PostgreSQL.
                                </p>
                                <p className="text-muted mt-2">I am always interested in learning new languages and development practices, currently I am learning ReactJS as well as experimenting with Docker.</p>
                                <div>
                                    <ul className="mb-0 about-social list-inline mt-4">
                                        <li className="list-inline-item"><a href="https://www.linkedin.com/in/james-tinker/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                        <li className="list-inline-item"><a href="https://gitlab.com/james_tinker" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGitlab} /></a></li>
                                    </ul> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section text-center bg-light" id="work">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2>My <span className="font-weight-bold">Projects</span></h2>
                                <p className="text-muted mx-auto section-subtitle mt-3">Below is a list of work, clicking any box will take you to the website it is related too.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 ">
                        <ul className="col list-unstyled list-inline mb-0 text-uppercase work_menu" id="menu-filter">
                            {/* eslint-disable-next-line */}
                            <li className="list-inline-item"><a className="active" data-filter="*">All</a></li>
                            {/* <li className="list-inline-item"><a className="" data-filter=".seo">Seo</a></li>
                            <li className="list-inline-item"><a className="" data-filter=".webdesign">Webdesign</a></li>
                            <li className="list-inline-item"><a className="" data-filter=".WORK">WORK</a></li>
                            <li className="list-inline-item"><a className="" data-filter=".wordpress">Wordpress</a></li> */}
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-4 work-filter">

                        <ProjectBox image={T15Digital} 
                            title="Personal Website" 
                            category="ReactJS" 
                            tags="development webdesign" 
                            desc="Built for use as a persoanl website to showcase my projects, and a place to be contacted"
                            url="https://jamestinker.me"/>

                    </div>
                </div>
            </section>

            <ContactForm />
            <Footer />
        </>
    );
}
 
export default Home;