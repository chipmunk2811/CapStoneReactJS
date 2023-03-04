import React, { useEffect } from 'react'
import CardMovie from '../_components/CardMovie'
import CarouselMovie from '../_components/CarouselMovie'
import { useDispatch, useSelector } from 'react-redux';
import { actTopMovie } from './duck/action';

export default function NowPlaying() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actTopMovie())
    }, [dispatch])

    const data = useSelector((state) => state.topMovieReducer.data);
    const NowPlayData = data && data.filter((item) => item.dangChieu);
    
    return (
        <>
            <CarouselMovie isValied={true} />
            <CardMovie data={NowPlayData} />
        </>
    )
}
