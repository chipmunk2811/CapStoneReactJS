import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import CardHome from '../_components/CardHome';
import { useDispatch, useSelector } from 'react-redux';
import { actTopMovie } from './duck/action';
import BannerHomePage from '../_components/BannerHomePage';
import BlogHomePage from '../_components/BlogEvent';

const contentStyle = {
  height: '600px',
  color: '#fff',
  background: '#364d79',
  padding: '0px',
  margin: '0px',
};

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actTopMovie())
  }, [dispatch])
  const data = useSelector((state) => state.topMovieReducer.data);
  
  const renderTopMovie = () => {
    return data?.map((movie) => {
      return < div key={movie.maPhim} >
        <h3 style={contentStyle}><CardHome movie={movie} /></h3>
      </div >
    })
  }
  return (

    <div className="elementor-widget-container">
      <div className="amy-heading text-center has-seperator    seperator-1 ">
        <header className="entry-header"><span className="seperator seperator-left" />
          <h2 className="title-heading"><span className="title">Top movies in </span><span className="title-highlight">theatres</span></h2><span className="seperator seperator-right" />
        </header>
        <div className="subtitle-heading">
          <p>at Moviak Cinema &amp; Theatre</p>
        </div>
      </div>

      <Carousel autoplay>
        {renderTopMovie()}
      </Carousel>
      <BannerHomePage />
      <BlogHomePage />
    </div>
  )
}
