import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../../../components/Loader';
import CardDetail from '../_components/CardDetail';

import Carousel from '../_components/Carousel';


// API
import { actDetailMovie } from './duck/action';



export default function DetailMovie() {
  const data = useSelector((state) => state.detailReducer.data)
  const loading = useSelector((state) => state.detailReducer.loading)
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actDetailMovie(params.id))
  }, [dispatch, params.id])


  return (
    <div>
      <Carousel />
      {loading&&loading ? <div className='text-center'><Loader /></div> : <CardDetail data={data} />}
    </div>
  )
}
