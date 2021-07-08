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
import Resume from '../../assets/pdfs/Resume.pdf';

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
                                        <p className="text-white mx-auto header-desc mt-4">I develop websites of all sizes, and I love doing it.</p>
                                        <div className="mt-4 pt-2">
                                            <a href={Resume} className="btn btn-outline-custom btn-round" target="_blank" rel="noreferrer">Download Resume</a>
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

            <section className="section bg-light" id="about">
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
                                    An experienced and entrepreneurial Web Developer with key accomplishments creating custom websites for early-stage start-ups.
                                    Approaching all projects using Agile Methodology ensuring compliance to project timelines, effective communication with stakeholders,
                                    while managing product requirements.
                                </p>
                                <p className="text-muted mt-2">
                                    Vast experience with Ruby on Rails and the languages associated: HTML, CSS, Javascript, and a working knowledge of PostgreSQL.
                                </p>
                                <p className="text-muted mt-2">
                                    Keen in learning new languages and developmental practices; currently learning ReactJS and experimenting with Docker.
                                </p>
                                <div>
                                    <ul className="mb-0 about-social list-inline mt-4">
                                        <li className="list-inline-item"><a href="https://www.linkedin.com/in/james-tinker/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                    </ul> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="services">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="text-center services-boxes rounded p-4 mt-4">
                                <div className="services-boxes-icon">
                                    <i className="mbri-code text-custom display-4"></i>
                                </div>
                                <div className="mt-4">
                                    <h5 className="mb-0">Full Stack Developer</h5>
                                    <div className="services-title-border"></div>
                                    <p className="text-muted mt-3">I like to code projects from scratch, and bring ideas into reality in the browser.</p>
                                    <h5>Languages I Speak:</h5>
                                    <ul class="p-0" style={{listStyleType: "none"}}>
                                        <li>Ruby</li>
                                        <li>HTML5</li>
                                        <li>CSS/SASS</li>
                                        <li>Javascript/JQuery</li>
                                        <li>SQL</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="text-center services-boxes rounded p-4 mt-4">
                                <div className="services-boxes-icon">
                                    <i className="mbri-database text-custom display-4"></i>
                                </div>
                                <div className="mt-4">
                                    <h5 className="mb-0">Student & Mentor</h5>
                                    <div className="services-title-border"></div>
                                    <p className="text-muted mt-3">I love to learn just as much as I like to teach. I always want to be building on my experience.</p>
                                    <h5>Currently Learning:</h5>
                                    <ul class="p-0" style={{listStyleType: "none"}}>
                                        <li>ReactJS</li>
                                        <li>Google Cloud Platform</li>
                                        <li>NoSQL</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="text-center services-boxes rounded p-4 mt-4">
                                <div className="services-boxes-icon">
                                    <i className="mbri-hearth text-custom display-4"></i>
                                </div>
                                <div className="mt-4">
                                    <h5 className="mb-0">Tools</h5>
                                    <div className="services-title-border"></div>
                                    <p className="text-muted mt-3">Different application knowledge that helps with coding or process</p>
                                    <h5></h5>
                                    <ul class="p-0" style={{listStyleType: "none"}}>
                                        <li>VsCode</li>
                                        <li>Git</li>
                                        <li>Datagrip</li>
                                        <li>Lucidchart</li>
                                        <li>Jira</li>
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
                                <p className="text-muted mx-auto section-subtitle mt-3">Here is a list of recent projects, for more information <a href="mailto:jtinker@t15digitalmedia.ca">email me</a></p>
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
                            desc="Built for use as a personal website to showcase my projects"
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