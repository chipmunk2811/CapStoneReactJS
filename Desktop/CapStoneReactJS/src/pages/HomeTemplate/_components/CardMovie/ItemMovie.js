import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

export default function ItemMovie(props) {
    const { movie } = props;
    return (
        <><div className="page-content mb-5">
            <div className="entry-top d-flex">
                <div className="entry-poster poster-cardmovie amy-movie-item-poster">
                    <Link to={`/detail/${movie.maPhim}`}>
                        <img src={movie && movie.hinhAnh} alt='' />
                    </Link>

                </div>

                <div className="entry-info">
                    <h1 className="entry-title p-name">
                        <a href="http://demo.amytheme.com/movie/demo/elementor-book-tickets/amy_movie/kubo-and-the-two-strings/" className="u-url url">
                            {movie && movie.tenPhim}
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
                                {movie && movie.ngayKhoiChieu}
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
                                {movie && movie.danhGia}
                            </span>
                        </li>
                    </ul>
                    <Link to={`/booking/${movie && movie.maPhim}`}>
                        <button className='btn btn-primary text-left booking'>BOOKING</button>
                    </Link>
                </div>
            </div>
        </div></>
    )
}
