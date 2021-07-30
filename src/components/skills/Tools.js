import React from 'react';
import { ReactComponent as AtlassianIcon } from '../../assets/images/tool_icons/atlassian.svg';
import { ReactComponent as AwsIcon } from '../../assets/images/tool_icons/aws.svg';
import { ReactComponent as GitIcon } from '../../assets/images/tool_icons/git.svg';
import { ReactComponent as GoogleCloudIcon } from '../../assets/images/tool_icons/google_cloud.svg';
import { ReactComponent as PostmanIcon } from '../../assets/images/tool_icons/postman.svg';
import { ReactComponent as SlackIcon } from '../../assets/images/tool_icons/slack.svg';

const Tools = () => {
    return ( 
        <section className="section bg-light" id="tools">
            <div class="row justify-content-center">
                <div className="container">
                    <div class="col-lg-12">
                        <div class="text-center">
                            <h2>Tools</h2>
                            <p class="text-muted mx-auto section-subtitle mt-3">Most used applications for development. They include cloud hosting, communication, project planning, and testing.</p>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="text-center services-boxes rounded p-4 mt-4">
                                <div className="services-boxes-icon">
                                    <GoogleCloudIcon className="skill-icon"/>
                                </div>
                                <div className="mt-4">
                                    <h5 className="mb-0">Google Cloud</h5>
                                    <div className="services-title-border"></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="text-center services-boxes rounded p-4 mt-4">
                                <div className="services-boxes-icon">
                                    <AwsIcon className="skill-icon"/>
                                </div>
                                <div className="mt-4">
                                    <h5 className="mb-0">Amazon Web Services (AWS)</h5>
                                    <div className="services-title-border"></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="text-center services-boxes rounded p-4 mt-4">
                                <div className="services-boxes-icon">
                                    <AtlassianIcon className="skill-icon"/>
                                </div>
                                <div className="mt-4">
                                    <h5 className="mb-0">Jira / Confluence</h5>
                                    <div className="services-title-border"></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="text-center services-boxes rounded p-4 mt-4">
                                <div className="services-boxes-icon">
                                    <GitIcon className="skill-icon"/>
                                </div>
                                <div className="mt-4">
                                    <h5 className="mb-0">Gitlabs / Github</h5>
                                    <div className="services-title-border"></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="text-center services-boxes rounded p-4 mt-4">
                                <div className="services-boxes-icon">
                                    <PostmanIcon className="skill-icon"/>
                                </div>
                                <div className="mt-4">
                                    <h5 className="mb-0">Postman</h5>
                                    <div className="services-title-border"></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="text-center services-boxes rounded p-4 mt-4">
                                <div className="services-boxes-icon">
                                    <SlackIcon className="skill-icon"/>
                                </div>
                                <div className="mt-4">
                                    <h5 className="mb-0">Slack</h5>
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
 
export default Tools;