import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css";


export default function CardDetail(props) {
    const data = props.data;
    return (
        <section className="main-content amy-movie single-movie layout-right has-banner mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="page-content">
                            <div className="entry-top d-flex">
                                <div className="entry-poster">
                                    <img src={data && data.hinhAnh} alt='' />
                                </div>

                                <div className="entry-info">
                                    <h1 className="entry-title p-name">
                                        <a href="http://demo.amytheme.com/movie/demo/elementor-book-tickets/amy_movie/kubo-and-the-two-strings/" className="u-url url">
                                            {data && data.tenPhim}
                                        </a>
                                    </h1>
                                    <ul className="info-list">
                                        <li>
                                            <label>
                                                Actor:
                                            </label>
                                            <span>
                                                <a href="http://demo.amytheme.com/movie/demo/elementor-book-tickets/amy_actor/alexander-cattly/">Alexander Cattly</a>
                                                <a href="http://demo.amytheme.com/movie/demo/elementor-book-tickets/amy_actor/cartin-hollia/">Cartin Hollia</a>
                                                <a href="http://demo.amytheme.com/movie/demo/elementor-book-tickets/amy_actor/greta-garbo/">Greta Garbo</a>
                                            </span>
                                        </li>
                                        <li>
                                            <label>
                                                Director:
                                            </label>
                                            <span>
                                                <a href="http://demo.amytheme.com/movie/demo/elementor-book-tickets/amy_director/grace-belly/">Grace Belly</a>
                                                <a href="http://demo.amytheme.com/movie/demo/elementor-book-tickets/amy_director/mae-west/">Mae West</a>
                                            </span>
                                        </li>
                                        <li>
                                            <label>
                                                Genre:
                                            </label>
                                            <span>
                                                <a href="http://demo.amytheme.com/movie/demo/elementor-book-tickets/amy_genre/cartoon/">Cartoon</a>
                                                <a href="http://demo.amytheme.com/movie/demo/elementor-book-tickets/amy_genre/comic/">Comic</a>
                                            </span>
                                        </li>
                                        <li>
                                            <label>
                                                Release:
                                            </label>
                                            <span>
                                                {data && data.ngayKhoiChieu}
                                            </span>
                                        </li>
                                        <li>
                                            <label>
                                                Language:
                                            </label>
                                            <span>
                                                English
                                            </span>
                                        </li>
                                        <li>
                                            <label>
                                                Rating:
                                            </label>
                                            <span>
                                                {data && data.danhGia}
                                            </span>
                                        </li>
                                    </ul>
                                    <Link to={`/booking/${data && data.maPhim}`}>
                                        <button className='btn btn-primary text-left booking'>
                                            BOOKING</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="entry-content e-content">
                                <h3 className="info-name amy-title">Synopsis</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>

                        <div className="entry-showtime single-cinema">
                            <div className="clearfix">
                                <h3 className="info-name amy-title">Showtime</h3>
                            </div>
                            <div className="showtime">
                                <div className="showtime-item single-cinema">
                                    <div className="st-item">
                                        <div className="st-title">
                                            <label>April 6, 2022</label>
                                        </div>
                                        <ul><li>12h30</li><li> 15h40</li><li> 19h20</li></ul>
                                    </div>
                                    <div className="st-item">
                                        <div className="st-title">
                                            <label>April 13, 2022</label>
                                        </div>
                                        <ul><li>10h30</li><li> 15h20</li><li> 20h10</li><li> 23h50</li></ul>
                                    </div>
                                    <div className="st-item">
                                        <div className="st-title">
                                            <label>May 4, 2022</label>
                                        </div>
                                        <ul><li>09h20</li><li> 13h10</li><li> 17h20</li></ul>
                                    </div> <div className="st-item">
                                        <div className="st-title">
                                            <label>May 6, 2022</label>
                                        </div>
                                        <ul><li>07h20</li><li> 10h10. 15h30</li><li> 21h00</li></ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 amy-sidebar-clear"><div className="amy-page-sidebar amy-sidebar-right">
                        <aside id="sidebar">
                            <div className="amy-widget widget_block widget_media_image">
                                <figure className="wp-block-image size-full">
                                    <img loading="lazy" width={350} height={272} src="http://demo.amytheme.com/movie/demo/elementor-book-tickets/wp-content/uploads/sites/12/2022/05/img_62.png" alt='' />
                                </figure>

                                <div className="clear" /></div>
                            <div className="amy-widget amy-widget-list">
                                <div className="amy-widget amy-widget-list list-movie ">
                                    <h4 className="amy-title amy-widget-title">Top Movie</h4>
                                    <div className="entry-item"><div className="entry-thumb">
                                        <img alt='' src="https://movienew.cybersoft.edu.vn/hinhanh/chien-binh-bao-den-2-wakanda-bat-diet_gp09.png" /></div>
                                        <div className="entry-content">
                                            <h2 className="entry-title">
                                                <a href="https://www.youtube.com/embed/sKX4zA52B9c">Wakanda Bất Diệt</a>
                                            </h2>

                                            <div>
                                                <span className="duration"><i className="fa fa-clock-o" />02 hours 00 minutes</span>
                                            </div>

                                            <div className="genre">
                                                <span>
                                                    <a href="http://demo.amytheme.com/movie/demo/elementor-book-tickets/amy_genre/cartoon/">Cartoon</a>
                                                    <a href="http://demo.amytheme.com/movie/demo/elementor-book-tickets/amy_genre/comic/">Comic</a></span>
                                            </div>
                                        </div>

                                        <div className="clearfix" />
                                    </div>
                                    <div className="entry-item">
                                        <div className="entry-thumb">
                                            <img src="https://movienew.cybersoft.edu.vn/hinhanh/deadpool-2_gp09.jpg" alt="The Hurricane Heist" />
                                        </div>
                                        <div className="entry-content">
                                            <h2 className="entry-title"><a href="https://www.youtube.com/embed/Rz4AqfIAqnY">Deadpool 2</a></h2>
                                            <div>
                                                <span className="duration"><i className="fa fa-clock-o" />01 hours 30 minutes</span>
                                            </div><div className="genre">
                                                <span><a href="http://demo.amytheme.com/movie/demo/elementor-book-tickets/amy_genre/comic/">Comic Magic</a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="entry-item">
                                        <div className="entry-thumb">
                                            <img src="http://demo.amytheme.com/movie/demo/elementor-book-tickets/wp-content/uploads/sites/12/2022/05/img_18-1-118x159_c.jpg" alt="Jumanji: Welcome to the Jungle" />
                                        </div>
                                        <div className="entry-content">
                                            <h2 className="entry-title">
                                                <a href="http://demo.amytheme.com/movie/demo/elementor-book-tickets/amy_movie/jumanji-welcome-to-the-jungle/">Jumanji: Welcome to the Jungle</a>
                                            </h2>
                                            <div>
                                                <span className="duration">
                                                    <i className="fa fa-clock-o" />02 hours 30 minutes</span>
                                            </div>
                                            <div className="genre">
                                                <span><a href="http://demo.amytheme.com/movie/demo/elementor-book-tickets/amy_genre/cartoon/">Cartoon Sci-fi</a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="clearfix" /></div>
                                    <div className="entry-item">
                                        <div className="entry-thumb">
                                            <img src="https://movienew.cybersoft.edu.vn/hinhanh/harry-potter-va-chiec-coc-lua_gp09.jpg" alt="Death Wish" />
                                        </div>
                                        <div className="entry-content">
                                            <h2 className="entry-title">
                                                <a href="https://www.youtube.com/embed/Y3bLHHN129k">Harry Potter và Chiếc Cốc Lửa</a>
                                            </h2>
                                            <div>
                                                <span className="duration">
                                                    <i className="fa fa-clock-o" /> 01 hours 00 minutes
                                                </span>
                                            </div>
                                            <div className="genre">
                                                <span>
                                                    <a href="http://demo.amytheme.com/movie/demo/elementor-book-tickets/amy_genre/cartoon/">Cartoon Comic</a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                </div>
                                <div className="clear" />
                            </div>
                        </aside>
                    </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
