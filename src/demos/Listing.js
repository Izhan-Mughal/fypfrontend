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
            <div className="container-fluid py-5">

                <div className=" bg-sec-light">

                    <div id="content">



                        <div className="row gap-lg-0 gap-4">

                            <div className=" col-lg-3">

                                <div id="filter" className="p-2  ms-md-4 ms-sm-2 border">

                                    <div className="border-bottom h5 text-uppercase">Filter By</div>
                                    <div className="box border-bottom">

                                        <div className="box-label text-uppercase d-flex align-items-center">
                                            Investment
                                            <button
                                                className="btn ms-auto"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#inner-box"
                                                aria-expanded="false"
                                                aria-controls="inner-box"
                                            >

                                                <span className="fas fa-plus" />
                                            </button>
                                        </div>
                                        <div id="inner-box" className="collapse show">

                                            <div className="my-1">

                                                <label className="tick">
                                                    Less than 2000
                                                    <input type="checkbox" className="ms-1" defaultChecked="checked" />
                                                    <span className="check" />
                                                    <span className="py-0 px-2 ms-2 border text-muted rounded-pill" style={{ fontSize: ".77rem" }}> 20</span>
                                                </label>
                                            </div>
                                            <div className="my-1">

                                                <label className="tick">
                                                    2000 - 3000 <input type="checkbox" />
                                                    <span className="check" />
                                                    <span className="py-0 px-2 ms-2 border text-muted rounded-pill" style={{ fontSize: ".77rem" }}> 20</span>
                                                </label>
                                            </div>
                                            <div className="my-1">

                                                <label className="tick">
                                                    3000 - 4500 <input type="checkbox" />
                                                    <span className="check" />
                                                    <span className="py-0 px-2 ms-2 border text-muted rounded-pill" style={{ fontSize: ".77rem" }}> 20</span>
                                                </label>
                                            </div>
                                            <div className="my-1">

                                                <label className="tick">
                                                    4500 - 6000 <input type="checkbox" />
                                                    <span className="check" />
                                                    <span className="py-0 px-2 ms-2 border text-muted rounded-pill" style={{ fontSize: ".77rem" }}> 20</span>
                                                </label>
                                            </div>
                                            <div className="my-1">

                                                <label className="tick">
                                                    6000 - 8000 <input type="checkbox" />
                                                    <span className="check" />
                                                    <span className="py-0 px-2 ms-2 border text-muted rounded-pill" style={{ fontSize: ".77rem" }}> 20</span>
                                                </label>
                                            </div>
                                            <div className="my-1">

                                                <label className="tick">
                                                    8000 -10,000 <input type="checkbox" defaultChecked="" />
                                                    <span className="check" />
                                                    <span className="py-0 px-2 ms-2 border text-muted rounded-pill" style={{ fontSize: ".77rem" }}> 20</span>
                                                </label>
                                            </div>
                                            <div className="my-1">

                                                <label className="tick">
                                                    10,000 and Above <input type="checkbox" />
                                                    <span className="check" />
                                                    <span className="py-0 px-2 ms-2 border text-muted rounded-pill" style={{ fontSize: ".77rem" }}> 20</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box border-bottom">

                                        <div className="box-label text-uppercase d-flex align-items-center">
                                            Startup Type
                                            <button
                                                className="btn ms-auto"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#property"
                                                aria-expanded="false"
                                                aria-controls="property"
                                            >

                                                <span className="fas fa-plus" />
                                            </button>
                                        </div>
                                        <div id="property" className="collapse">

                                            <div className="my-1">

                                                <label className="tick">
                                                    Finance <input type="checkbox" defaultChecked="checked" />
                                                    <span className="check" />
                                                    <span className="py-0 px-2 ms-2 border text-muted rounded-pill" style={{ fontSize: ".77rem" }}> 20</span>
                                                </label>
                                            </div>
                                            <div className="my-1">

                                                <label className="tick">
                                                    Real Estate <input type="checkbox" />
                                                    <span className="check" />
                                                    <span className="py-0 px-2 ms-2 border text-muted rounded-pill" style={{ fontSize: ".77rem" }}> 20</span>
                                                </label>
                                            </div>
                                            <div className="my-1">

                                                <label className="tick">
                                                    IT <input type="checkbox" />
                                                    <span className="check" />
                                                    <span className="py-0 px-2 ms-2 border text-muted rounded-pill" style={{ fontSize: ".77rem" }}> 90</span>
                                                </label>
                                            </div>
                                            <div className="my-1">

                                                <label className="tick">
                                                    Entertainment <input type="checkbox" /> <span className="check" />
                                                    <span className="py-0 px-2 ms-2 border text-muted rounded-pill" style={{ fontSize: ".77rem" }}> 20</span>
                                                </label>
                                            </div>
                                            <div className="my-1">

                                                <label className="tick">
                                                    Medical <input type="checkbox" /> <span className="check" />
                                                    <span className="py-0 px-2 ms-2 border text-muted rounded-pill" style={{ fontSize: ".77rem" }}> 20</span>
                                                </label>
                                            </div>
                                            <div className="my-1">

                                                <label className="tick">
                                                    Entrepenurship <input type="checkbox" defaultChecked="" />
                                                    <span className="check" />
                                                    <span className="py-0 px-2 ms-2 border text-muted rounded-pill" style={{ fontSize: ".77rem" }}> 20</span>
                                                </label>
                                            </div>
                                            <div className="my-1">

                                                <label className="tick">
                                                    Travel <input type="checkbox" />
                                                    <span className="check" />
                                                    <span className="py-0 px-2 ms-2 border text-muted rounded-pill" style={{ fontSize: ".77rem" }}> 20</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="box">

                                        <div className="box-label text-uppercase d-flex align-items-center">
                                            Location
                                            <button
                                                className="btn ms-auto"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#room-facilities"
                                                aria-expanded="false"
                                                aria-controls="room-facilities"
                                            >

                                                <span className="fas fa-plus" />
                                            </button>
                                        </div>
                                        <div id="room-facilities" className="collapse">

                                            <div className="my-1">

                                                <label className="tick">
                                                    Pakistan
                                                    <input type="checkbox" defaultChecked="checked" />
                                                    <span className="check" />
                                                    <span className="py-0 px-2 ms-2 border text-muted rounded-pill" style={{ fontSize: ".77rem" }}> 80</span>
                                                </label>
                                            </div>
                                            <div className="my-1">

                                                <label className="tick">
                                                    Sri Lanka <input type="checkbox" /> <span className="check" />
                                                    <span className="py-0 px-2 ms-2 border text-muted rounded-pill" style={{ fontSize: ".77rem" }}> 12</span>
                                                </label>
                                            </div>
                                            <div className="my-1">

                                                <label className="tick">
                                                    India <input type="checkbox" /> <span className="check" />
                                                    <span className="py-0 px-2 ms-2 border text-muted rounded-pill" style={{ fontSize: ".77rem" }}> 50</span>
                                                </label>
                                            </div>
                                            <div className="my-1">

                                                <label className="tick">
                                                    Nepal <input type="checkbox" />
                                                    <span className="check" />
                                                    <span className="py-0 px-2 ms-2 border text-muted rounded-pill" style={{ fontSize: ".77rem" }}> 10</span>
                                                </label>
                                            </div>
                                            <div className="my-1">

                                                <label className="tick">
                                                    Bangladesh <input type="checkbox" />
                                                    <span className="check" />
                                                    <span className="py-0 px-2 ms-2 border text-muted rounded-pill" style={{ fontSize: ".77rem" }}> 40</span>
                                                </label>
                                            </div>
                                            <div className="my-1">

                                                <label className="tick">
                                                    UAE <input type="checkbox" defaultChecked="" />
                                                    <span className="check" />
                                                    <span className="py-0 px-2 ms-2 border text-muted rounded-pill" style={{ fontSize: ".77rem" }}> 20</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-2 border col-lg-9" id="hotels">

                                <div className="hotel py-2 px-2 pb-4 border-bottom">

                                    <div className="row">

                                        <div className="col-lg-3 position-relative">

                                            <img
                                                src="https://images.unsplash.com/photo-1580835845971-a393b73bf370?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                                                alt=""
                                                className="hotel-img"
                                            />
                                            <span style={{ position: "absolute", top: "5px", backgroundColor: "#90DEDE" }} className=" badge  text-white ms-2 p-1 "> <i className="fa fa-star me-1"></i>Featured</span>
                                        </div>
                                        <div className="col-lg-9">

                                            <div className="d-md-flex align-items-md-center">

                                                <div className="name">
                                                    Mayflower Hibiscus Inn

                                                </div>
                                                <div className="ms-auto code text-uppercase"><span className="city"> <i className="fa fa-location-dot"></i> Bandra, Mumbai</span></div>
                                            </div>

                                            <div className="d-flex flex-column tags pt-1">

                                                <div>
                                                    <span className="fas fa-comment-dollar" /> Hotels
                                                </div>
                                                <div>
                                                    <span className="fas fa-receipt" /> Top Rated
                                                </div>
                                                <div>
                                                    <span className="fas fa-dollar" /> Best Offer
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end mt-1">

                                        {/* <div className="btn enquiry text-uppercase mx-2">Enquiry</div> */}
                                        <a href="/profile" style={{ backgroundColor: "#90DEDE" }} className="btn border-0 btn-primary text-uppercase">  Contact Now</a>
                                    </div>
                                </div>
                                <div className="hotel py-2 px-2 pb-4 border-bottom">

                                    <div className="row">

                                        <div className="col-lg-3">

                                            <img
                                                src="https://images.unsplash.com/photo-1596618502142-d2a9d0c1fc2e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTd8fHJlc29ydHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                                alt=""
                                                className="hotel-img"
                                            />
                                        </div>
                                        <div className="col-lg-9">

                                            <div className="d-md-flex align-items-md-center">

                                                <div className="name">
                                                    Sunflower Hibiscus Inn

                                                </div>
                                                <div className="ms-auto code text-uppercase"><span className="city"> <i className="fa fa-location-dot"></i> Karachi, Pakistan</span></div>
                                            </div>

                                            <div className="d-flex flex-column tags pt-1">

                                                <div>
                                                    <span className="fas fa-comment-dollar" /> Hotels
                                                </div>
                                                <div>
                                                    <span className="fas fa-receipt" /> Top Rated
                                                </div>
                                                <div>
                                                    <span className="fas fa-dollar" /> Best Offer
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end mt-1">

                                        <a href="/profile" style={{ backgroundColor: "#90DEDE" }} className="btn border-0 btn-primary text-uppercase">  Contact Now</a>
                                    </div>
                                </div>
                                <div className="hotel py-2 px-2 pb-4">

                                    <div className="row">

                                        <div className="col-lg-3">

                                            <img
                                                src="https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzV8fHJlc29ydHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                                alt=""
                                                className="hotel-img"
                                            />
                                        </div>
                                        <div className="col-lg-9">

                                            <div className="d-md-flex align-items-md-center">

                                                <div className="name">
                                                    Atlantic Inn
                                                </div>
                                                <div className="ms-auto code text-uppercase"><span className="city"> <i className="fa fa-location-dot"></i> Shadra, Lahore</span></div>
                                            </div>

                                            <div className="d-flex flex-column tags pt-1">

                                                <div>
                                                    <span className="fas fa-comment-dollar" /> Hotels
                                                </div>
                                                <div>
                                                    <span className="fas fa-receipt" /> Top Rated
                                                </div>
                                                <div>
                                                    <span className="fas fa-dollar" /> Best Offer
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end mt-1">

                                        <a href="/profile" style={{ backgroundColor: "#90DEDE" }} className="btn border-0 btn-primary text-uppercase">  Contact Now</a>
                                    </div>
                                    <nav aria-label="Page navigation example" className="mt-4 d-flex justify-content-center ">
                                        <ul class="pagination ">
                                            <li class="page-item"><a style={{ color: "#90DEDE" }} class="page-link" href="#">Previous</a></li>
                                            <li class="page-item"><a style={{ color: "#90DEDE" }} class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a style={{ color: "#90DEDE" }} class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a style={{ color: "#90DEDE" }} class="page-link" href="#">3</a></li>
                                            <li class="page-item"><a style={{ color: "#90DEDE" }} class="page-link" href="#">Next</a></li>
                                        </ul>
                                    </nav>
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
