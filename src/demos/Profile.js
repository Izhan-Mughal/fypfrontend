import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/hero/Header";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
import SliderCard from "components/cards/ThreeColSlider.js";
import ServicesCard from "components/cards/AngleList.js";
import TrendingCard from "components/cards/TwoTrendingPreviewCardsWithImage.js";
import Blog from "components/blogs/PopularAndRecentBlogPosts.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
import Footer from "components/footers/MiniCenteredFooter.js";

export default () => (
    <AnimationRevealPage>
        <Header />
        {/* <Features /> */}
        <section >
            <div className="container py-5">

                <div className="row">
                    <div className="col-lg-4">
                        <div className="card mb-4">
                            <div className="card-body text-center">
                                <div className="d-flex justify-content-center">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                        alt="avatar"
                                        className="rounded-circle img-fluid"
                                        style={{ width: 150 }}
                                    />
                                </div>
                                <h5 className="my-3">Company Tech</h5>
                                <p className="text-muted mb-1">
                                    Bio: Startup Since 3 years
                                </p>
                                <p className="text-muted mb-4">Sindh,Pakistan</p>
                                <div className="d-flex justify-content-center mb-2">
                                <button className="btn btn-outline-primary"> <span className="text-success">&bull;</span> Initiate chat</button>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-4 mb-lg-0">
                            <div className="card-body p-0">
                                <ul className="list-group list-group-flush rounded-3">
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i className="fas fa-globe fa-lg text-warning" />
                                        <p className="mb-0">https://HyperKonnect.com</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i
                                            className="fab fa-github fa-lg"
                                            style={{ color: "#333333" }}
                                        />
                                        <p className="mb-0">HyperKonnect</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i
                                            className="fab fa-twitter fa-lg"
                                            style={{ color: "#55acee" }}
                                        />
                                        <p className="mb-0">@HyperKonnect</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i
                                            className="fab fa-instagram fa-lg"
                                            style={{ color: "#ac2bac" }}
                                        />
                                        <p className="mb-0">HyperKonnect</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i
                                            className="fab fa-facebook-f fa-lg"
                                            style={{ color: "#3b5998" }}
                                        />
                                        <p className="mb-0">HyperKonnect</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                 
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card mb-4 mb-md-0">
                                    <div className="card-body">
                                        <p className="mb-4">

                                            Skills
                                        </p>
                                        <p className="mb-2" style={{ fontSize: ".77rem" }}>
                                            <i className="fa fa-check text-success me-2"></i>  Web Design
                                        </p>

                                        <p className="mt-2 mb-1" style={{ fontSize: ".77rem" }}>
                                            <i className="fa fa-check text-success me-2"></i>   Website Markup
                                        </p>

                                        <p className="mt-2 mb-1" style={{ fontSize: ".77rem" }}>
                                            <i className="fa fa-check text-success me-2"></i>   One Page
                                        </p>

                                        <p className="mt-2 mb-1" style={{ fontSize: ".77rem" }}>
                                            <i className="fa fa-check text-success me-2"></i>    Mobile Template
                                        </p>

                                        <p className="mt-2 mb-1" style={{ fontSize: ".77rem" }}>
                                            <i className="fa fa-check text-success me-2"></i>    Backend API
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div className="card mb-4 h-100 mb-md-0">
                                    <div className="card-body">
                                        <p className="mb-4">

                                            Experience
                                        </p>
                                        <p className="fw-bold">&bull; Front End developer </p>
                                        <p className="mb-2" style={{ fontSize: ".85rem" }}>
                                            <span><i className="fa fa-briefcase  me-2"></i> Freelancer.com</span>
                                            <i className="fa fa-clock  mx-2"></i>    2021-2022
                                        </p>
                                        <p className="fw-bold mt-3">&bull; Front End developer </p>
                                        <p className="mb-2" style={{ fontSize: ".85rem" }}>
                                            <span><i className="fa fa-briefcase  me-2"></i> Fiverr.com</span>
                                            <i className="fa fa-clock  mx-2"></i>    2022-Present
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-6">
                                <div className="card mb-4 mb-md-0">
                                    <div className="card-body">
                                        <p className="mb-4">

                                            Portfolio
                                        </p>
                                        <p className="mb-2" style={{ fontSize: ".77rem" }}>
                                            &bull;  Coffee Project
                                        </p>

                                        <div className="d-flex gap-1 align-items-center">
                                            <a href="#" className="border-1 p-1 rounded">
                                                <img src="https://freewebsitecode.com/wp-content/uploads/2021/10/Coffee-Shop-Tea-Stall-Website-Design-Free-Download.jpg" alt="" height="80px" width="80px" />
                                            </a>
                                            <a href="#" className="border-1 p-1 rounded">
                                                <img src="https://freewebsitecode.com/wp-content/uploads/2021/10/Coffee-Shop-Tea-Stall-Website-Design-Free-Download.jpg" alt="" height="80px" width="80px" />
                                            </a>
                                        </div>
                                        <p className="my-2" style={{ fontSize: ".77rem" }}>
                                            &bull;  Restaurant Website
                                        </p>

                                        <div className="d-flex gap-1 align-items-center">
                                            <a href="#" className="border-1 p-1 rounded">
                                                <img src="https://freewebsitecode.com/wp-content/uploads/2021/10/Coffee-Shop-Tea-Stall-Website-Design-Free-Download.jpg" alt="" height="80px" width="80px" />
                                            </a>
                                            <a href="#" className="border-1 p-1 rounded">
                                                <img src="https://freewebsitecode.com/wp-content/uploads/2021/10/Coffee-Shop-Tea-Stall-Website-Design-Free-Download.jpg" alt="" height="80px" width="80px" />
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <ServicesCard/>
    <SliderCard />
    <TrendingCard />
    <MainFeature />
    <Blog />
    <Testimonial textOnLeft={true}/>
    <FAQ /> */}
        {/* <SubscribeNewsLetterForm /> */}
        <Footer />
    </AnimationRevealPage>
);
