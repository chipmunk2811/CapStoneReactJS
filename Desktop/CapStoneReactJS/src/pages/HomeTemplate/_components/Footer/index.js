import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style.css";

export default function Footer() {
    return (
        <footer className="amy-site-footer">
            <div className="container">
                <div className="amy-footer-widgets">
                    <div className="row">
                        <div className="col-md-3 col-xs-12">
                            <div className="amy-widget widget_block">
                                <div className="wp-container-1 wp-block-group">
                                    <div className="wp-block-group__inner-container">
                                        <div className="widget amy-widget-module">
                                            <div className="amy-widget amy-widget-module about ">
                                               
                                                <div className="footer-logo">
                                                    <NavLink to=""><img alt="homemovie" src="./img/img_66.png" /></NavLink>
                                                </div>
                                                <div className="summary">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                                    ut aliquip ex ea commodo consequat</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="clear" />
                            </div>
                            <div className="amy-widget widget_block">
                                <div className="wp-container-2 wp-block-group">
                                    <div className="wp-block-group__inner-container" />
                                </div>
                                <div className="clear" />
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-12">
                            <div className="amy-widget widget_nav_menu">
                                <div className="amy-widget-title">
                                    <h4>Custom Services</h4>
                                </div>
                                <div className="amy-widget-content">
                                    <ul id="menu-custom-services" className="menu">
                                        <li id="menu-item-430" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-84 current_page_item menu-item-430">
                                            <a href="http://demo.amytheme.com/movie/demo/elementor-book-tickets/" aria-current="page">Home</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="clear" />
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-12">
                            <div className="amy-widget amy-widget-list">
                                <div className="amy-widget amy-widget-list list-post ">
                                    <h4 className="amy-title amy-widget-title">Recent News</h4>
                                    <div className="entry-item">
                                        <div className="entry-thumb"><img alt="" src="http://demo.amytheme.com/movie/demo/elementor-book-tickets/wp-content/uploads/sites/12/2022/05/img_59-115x85_c.jpg" />
                                        </div>
                                        <div className="entry-content">
                                            <h2 className="entry-title"><a href="http://demo.amytheme.com/movie/demo/elementor-book-tickets/six-book-to-film-adaptations-to-get-excited-about-this-autumn/">Six
                                                book-to-film adaptations to get excited about this autumn</a></h2>
                                            <div className="entry-meta"><span className="entry-date">April 28, 2022</span><span> /
                                            </span><span className="entry-comment">0 Comments</span></div>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="entry-item">
                                        <div className="entry-thumb"><img alt="" src="http://demo.amytheme.com/movie/demo/elementor-book-tickets/wp-content/uploads/sites/12/2022/05/img_58-115x85_c.jpg" />
                                        </div>
                                        <div className="entry-content">
                                            <h2 className="entry-title"><a href="http://demo.amytheme.com/movie/demo/elementor-book-tickets/the-beatles-eight-days-a-week-the-touring/">The
                                                Beatles: Eight Days a Week – The Touring</a></h2>
                                            <div className="entry-meta"><span className="entry-date">April 28, 2022</span><span> /
                                            </span><span className="entry-comment">0 Comments</span></div>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                </div>
                                <div className="clear" />
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-12">
                            <div className="amy-widget amy-widget-module">
                                <div className="amy-widget amy-widget-module contact ">
                                    <h4 className="amy-title amy-widget-title">Contact Us</h4>
                                    <div className="address"><i className="fa fa-location-arrow" aria-hidden="true" />9067 Zurich,
                                        Switzerland 87</div>
                                    <div className="email"><i className="fa fa-envelope-o" aria-hidden="true" />abc@gmail.com
                                    </div>
                                    <div className="phone"><i className="fa fa-phone" aria-hidden="true" />01-234-5678</div>
                                </div>
                                <div className="clear" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
