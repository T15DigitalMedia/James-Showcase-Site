import React from 'react';
import { ReactComponent as Css3Icon } from '../../assets/images/skill_icons/css3.svg';
import { ReactComponent as RubyIcon } from '../../assets/images/skill_icons/ruby_on_rails.svg';
import { ReactComponent as Html5Icon } from '../../assets/images/skill_icons/html5.svg';
import { ReactComponent as JsIcon } from '../../assets/images/skill_icons/js.svg';
import { ReactComponent as PostgresIcon } from '../../assets/images/skill_icons/postgres.svg';
import { ReactComponent as ReactIcon } from '../../assets/images/skill_icons/react.svg';

const Skills = () => {
    return ( 
        <section className="section" id="services">
            <div class="row justify-content-center">
                <div className="container">
                    <div class="col-lg-12">
                        <div class="text-center">
                            <h2>Coding <span class="fw-bold">Skills</span></h2>
                            <p class="text-muted mx-auto section-subtitle mt-3">My primary skillset when it comes to development. I am actively seeking to expand as I grow in my career, both in new skills and deeper knowledge of my current ones.</p>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="text-center services-boxes rounded p-4 mt-4">
                                <div className="services-boxes-icon">
                                    <RubyIcon className="skill-icon"/>
                                </div>
                                <div className="mt-4">
                                    <h5 className="mb-0">Ruby on Rails</h5>
                                    <div className="services-title-border"></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="text-center services-boxes rounded p-4 mt-4">
                                <div className="services-boxes-icon">
                                    <ReactIcon className="skill-icon"/>
                                </div>
                                <div className="mt-4">
                                    <h5 className="mb-0">ReactJs</h5>
                                    <div className="services-title-border"></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="text-center services-boxes rounded p-4 mt-4">
                                <div className="services-boxes-icon">
                                    <Html5Icon className="skill-icon"/>
                                </div>
                                <div className="mt-4">
                                    <h5 className="mb-0">HTML / HTML5</h5>
                                    <div className="services-title-border"></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="text-center services-boxes rounded p-4 mt-4">
                                <div className="services-boxes-icon">
                                    <Css3Icon className="skill-icon"/>
                                </div>
                                <div className="mt-4">
                                    <h5 className="mb-0">CSS / CSS3 / SASS</h5>
                                    <div className="services-title-border"></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="text-center services-boxes rounded p-4 mt-4">
                                <div className="services-boxes-icon">
                                    <PostgresIcon className="skill-icon"/>
                                </div>
                                <div className="mt-4">
                                    <h5 className="mb-0">PostgreSQL / MySQL</h5>
                                    <div className="services-title-border"></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="text-center services-boxes rounded p-4 mt-4">
                                <div className="services-boxes-icon">
                                    <JsIcon className="skill-icon"/>
                                </div>
                                <div className="mt-4">
                                    <h5 className="mb-0">Javascript / jQuery</h5>
                                    <div className="services-title-border"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Skills;