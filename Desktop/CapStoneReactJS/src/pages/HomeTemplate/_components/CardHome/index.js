import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css";

export default function CardHome(props) {
    const { movie } = props;
    return (
        <div className="amy-movie-item-inner">
            <div className="amy-movie-item-front">
                <div className="amy-movie-item-poster">
                    <Link to={`/detail/${movie.maPhim}`}>
                        <img style={{ height: '600px' }} src={movie.hinhAnh} alt="" />
                    </Link>
                </div>
            </div>
            <div className="amy-movie-item-back">
                <div className="amy-movie-item-back-inner">
                    <div className="amy-movie-item-content">
                        <span className="amy-movie-field-imdb">{movie.danhGia}</span>
                        <h3 className="amy-movie-field-title"><Link to={movie.trailer}>{movie.tenPhim}</Link></h3>
                        <div className="amy-movie-item-meta">
                            <span className="amy-movie-field-mpaa">G</span>
                            <span className="amy-movie-field-duration"><i className="fa fa-clock-o" />01 hours 30
                                minutes</span>
                        </div>
                        <div className="amy-movie-field-desc">
                            <p className='text-dark'>{movie.moTa}</p>
                        </div>
                        <div className="amy-movie-custom-field-group amy-movie-field-language d-flex">
                            <label className="amy-movie-custom-field-label">Language:</label>
                            <div className="amy-movie-custom-field-content">
                                English
                            </div>
                        </div>
                        <div className="amy-movie-custom-field-group amy-movie-field-release_date d-flex">
                            <label className="amy-movie-custom-field-label">Release Date:</label>
                            <div className="amy-movie-custom-field-content">
                                {movie.ngayKhoiChieu}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
