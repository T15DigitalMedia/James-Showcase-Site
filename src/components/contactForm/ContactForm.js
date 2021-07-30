import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";

const ContactForm = () => {

    const [ formSuccess, setFormSuccess ] = useState(false);
    const [ formError, setFormError ] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data, e) => sendEmail(data, e);

    function sendEmail(data, e) {
        emailjs.send('service_kqpr0ko', 'template_mgrtqpt', data, 'user_llt7gWOMxIhCLt8XU5N5a')
        .then(function(response) {
            setFormSuccess(true)
            e.target.reset();
        }, function(error) {
            setFormError(true);
        });
    }

    return ( 
        <section className="section bg-light" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <h2><span className="font-weight-bold">Contact</span> Me</h2>
                            <p className="text-muted mx-auto section-subtitle mt-3">Leave your name and email, as well as a message and I will get back to you as soon as possible.</p>
                        </div>
                    </div>
                </div> 
                <div className="row mt-5">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <div>
                                <i className="mbri-letter text-custom h1"></i>
                            </div>
                            <div className="mt-3">
                                <h5 className="mb-0 contact_detail-title font-weight-bold">Email Me At</h5>
                                <a href="mailto:jtinker@t15digitalmedia.ca" className="text-muted">jtinker@t15digitalmedia.ca</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-12">
                        <div className="form-kerri contact_form">
                            <div id="message"></div>
                            <form name="contact-form" id="working_form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group mt-2">
                                            <input name="name" id="name" type="text" className="form-control" placeholder="Your name..." ref={register({ required: { value: true, message: "error message" } })}/>
                                            {errors.name && <span>This field is required</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group mt-2">
                                            <input name="email" id="email" type="email" className="form-control" placeholder="Your email..." ref={register({ required: true })}/>
                                        </div>
                                    </div>                                
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group mt-2">
                                            <textarea name="message" id="message" rows="4" className="form-control" placeholder="Your message..." ref={register({ required: true })}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 text-right">
                                        <input type="submit" id="submit" name="send" className="submitBnt btn btn-custom text-uppercase" value="Submit"/>
                                        { formError ? 
                                            <div className="text-danger">Error Submitting Form, Please try again.</div>
                                        : null }
                                        { formSuccess ? 
                                            <div className="text-success">Submitted Successfully!</div>
                                        : null }
                                    </div>
                                </div>
                            </form>
                        </div>  
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default ContactForm;