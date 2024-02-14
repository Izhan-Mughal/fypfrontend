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
                    <div className="col-md-12">
                        <div className="card py-3 ">
                            <div className="card-body">
                                <h1 className="mb-4  h2">

                                    Buy Konnects
                                </h1>

                                <p className="fw-bold"> Your Available Konnects</p>
                                <p className="fw-bold mb-4"> 0</p>
                                <p className="fw-bold"> Select Amount to buy</p>
                                <div className="row mb-4">
                                    <div className="col-lg-4">
                                        <select className="form-control dropdown-toggle ">
                                            <option value="1" key="0">$10 for 100</option>
                                            <option value="1" key="1">$20 for 250</option>
                                            <option value="1" key="2">$40 for 500</option>
                                            <option value="1" key="3">$80 for 1000</option>
                                        </select>
                                    </div>

                                </div>
                                <p className="fw-bold"> Your Account will be charged</p>
                                <p className="fw-bold mb-4"> $1.50 + tax </p>
                                <p className="fw-bold"> Your New Connect Balance will be</p>
                                <p className="fw-bold mb-4"> $101 </p>
                                <p className="fw-bold"> These Connects will expire on</p>
                                <p className="fw-bold mb-4"> February 14 2025 </p>
                                <p className="fw-bold"> Promo Code</p>
                                <div className="row mb-4">
                                    <div className="col-lg-4 d-flex gap-2">
                                        <input className="form-control  " placeholder="Enter Promo">

                                        </input>
                                        <button className="btn btn-outline-success">Apply</button>
                                    </div>

                                </div>
                                <p className="fw-bold"> These Connects will expire 1 year from today</p>


                                <p className="fw-bold mt-4"> <input type="checkbox" /> I accept the terms and conditions </p>
                                <button className="btn btn-outline-success mt-1">Confirm Purchase</button>

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
