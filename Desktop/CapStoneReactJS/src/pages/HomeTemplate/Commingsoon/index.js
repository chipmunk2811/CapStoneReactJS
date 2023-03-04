import React, { useEffect } from 'react'
import CarouselMovie from '../_components/CarouselMovie'
import { useDispatch, useSelector } from 'react-redux';
import { actTopMovie } from './duck/action';
import CardMovie from '../_components/CardMovie'

export default function CommingSoon() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actTopMovie())
  }, [dispatch])

  const data = useSelector((state) => state.topMovieReducer.data);
  const CommingSoonData = data && data.filter((item) => !item.dangChieu);

  return (
    <div>
      <CarouselMovie isValied={false} />
      <CardMovie data={CommingSoonData} />
    </div>
  )
}
