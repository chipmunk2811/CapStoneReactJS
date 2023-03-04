import React from 'react'
import "./style.css";

export default function CarouselMovie(props) {
    const { isValied } = props;
    return (
        <section id="amy-page-header" className="amy-page-header">
            <div className="amy-page-title amy-center">
                <div className="amy-inner container">
                    <h1 className="page-title">
                        {isValied ? 'Now Playing' : 'Comming Soon'}
                    </h1>
                </div>
            </div>
        </section>


    )
}
