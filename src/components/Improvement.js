import React from 'react';
import { ReactComponent as FirebaseIcon } from '../assets/images/improvement_icons/firebase.svg';
import { ReactComponent as GraphqlIcon } from '../assets/images/improvement_icons/graphql.svg';
import { ReactComponent as DavinciIcon } from '../assets/images/improvement_icons/davinci.svg';

const Improvement = () => {
    return ( 
        <section className="section" id="tools">
            <div class="row justify-content-center">
                <div className="container">
                    <div class="col-lg-12">
                        <div class="text-center">
                            <h2>Self <span class="fw-bold">Improvement</span></h2>
                            <p class="text-muted mx-auto section-subtitle mt-3">I am committed to learning new skills whenever I can, as well as pass on my knowledge to help others. Below is a list of things I am currently learning.</p>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="text-center services-boxes rounded p-4 mt-4">
                                <div className="services-boxes-icon">
                                    <FirebaseIcon className="skill-icon"/>
                                </div>
                                <div className="mt-4">
                                    <h5 className="mb-0">Google Firebase</h5>
                                    <div className="services-title-border"></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="text-center services-boxes rounded p-4 mt-4">
                                <div className="services-boxes-icon">
                                    <GraphqlIcon className="skill-icon" style={{ fill: "#e535ab" }}/>
                                </div>
                                <div className="mt-4">
                                    <h5 className="mb-0">GraphQL</h5>
                                    <div className="services-title-border"></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="text-center services-boxes rounded p-4 mt-4">
                                <div className="services-boxes-icon">
                                    <DavinciIcon className="skill-icon"/>
                                </div>
                                <div className="mt-4">
                                    <h5 className="mb-0">Davinci Resolve</h5>
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
 
export default Improvement;