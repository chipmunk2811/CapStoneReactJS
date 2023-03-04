import React, { useEffect } from 'react'
import CarouselMovie from '../_components/CarouselMovie'
import { useDispatch, useSelector } from 'react-redux';
import { actTopMovie } from './duck/action';
import CardMovie from '../_components/CardMovie'
import Loader from '../../../components/Loader';

export default function CommingSoon() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actTopMovie())
  }, [dispatch])

  const data = useSelector((state) => state.topMovieReducer.data);
  const loading = useSelector((state) => state.topMovieReducer.loading);
  const CommingSoonData = data && data.filter((item) => !item.dangChieu);

  return (
    <div>
      <CarouselMovie isValied={false} />
      {loading && loading ? <div className='text-center'><Loader /></div> : <CardMovie data={CommingSoonData} />}
    </div>
  )
}
