import React from 'react';

export const Contact = () => {
    return (
        <div className="container mt-5">
            <div className="text-center">
                <h3 className="fw-bold">Contact US</h3>
            </div>

            <div className="card contact-card pb-5 text-center mb-3">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center justify-content-md-center">
                        <p className="fx-3 fw-bold d-flex py-2 mt-3 w-75 m-auto">CERAMIC-STUDIO</p>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-6">
                        <div className="contact-content d-flex flex-column justify-content-start">
                            <span>A: Lorem ipsum dolor sit amet.</span>
                            <span>T: Lorem ipsum dolor sit amet.</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3 row">
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <div className="col-sm-9">
                                    <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" id="subject" placeholder="Enter subject" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <div className="col-sm-9">
                                    <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <div className="col-sm-12">
                                    <button type="submit" className="btn btn-dark fw-2">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row pt-5">
                    <div className="col-md-6">
                        <div className="contact-content d-flex flex-column justify-content-start">
                            <span>A: Lorem ipsum dolor sit amet.</span>
                            <span>sit amet. dolor sit amet.</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center fw-bold">Get Our Newsletters</div>
                        <div className="d-flex justify-content-center">
                            <div>
                                <input className="form-control my-3" style={{ height: '40px' }} placeholder="Enter your email here" type="email" name="email" id="email" />
                                <button className="btn btn-dark">Subscribe Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
