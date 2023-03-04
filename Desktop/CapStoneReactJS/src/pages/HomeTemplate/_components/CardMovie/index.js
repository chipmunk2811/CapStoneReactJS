import React from 'react'
import ItemMovie from './ItemMovie'


export default function CardMovie(props) {
    const { data } = props;
    const renderItemMovie = () => {
        return data?.map((movie) => {
            return <ItemMovie key={movie.maPhim} movie={movie} />
        })
    }
    return (
        <section className="main-content amy-movie single-movie layout-right has-banner mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        {renderItemMovie()}
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
                                            <img src="https://movienew.cybersoft.edu.vn/hinhanh/civilwar_gp09.jpg" alt="Jumanji: Welcome to the Jungle" />
                                        </div>
                                        <div className="entry-content">
                                            <h2 className="entry-title">
                                                <a href="http://demo.amytheme.com/movie/demo/elementor-book-tickets/amy_movie/jumanji-welcome-to-the-jungle/">CIVIL WAR</a>
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
