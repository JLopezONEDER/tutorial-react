import React, { useEffect, useState } from "react";

import './home.css';

const Home = () =>{
    const [curSlide, setCurSlide] = useState(0);
    const [maxSlide, setMaxSlide] = useState(0);
    const [slides, setSlides] = useState([]);

    useEffect(() =>{
        const slides = document.querySelectorAll(".slide");
        setSlides(slides);
        setMaxSlide(slides.length - 1);
    }, []);

    const nextSlide = () =>{
        if(curSlide === maxSlide){
            setCurSlide(0);
        } else {
            setCurSlide(curSlide + 1);
        }

        slides.forEach((slide, index) =>{
            slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
        });
    }
    const prevSlide = () =>{
        if(curSlide === 0){
            setCurSlide(maxSlide);
        } else {
            setCurSlide(curSlide - 1);
        }
        slides.forEach((slide, index) =>{
            slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
        });
    }

    return(
        <div className="homeCont">
            <header className="homeHeader">
                <label className="homeTitle">Bienvenidos a este tutorial Básico de React y Git</label>
            </header>
            <div className="slider">

                <div className="slide">
                    <img
                    src="https://source.unsplash.com/random?landscape,mountain"
                    alt="img slider 1"
                    />
                </div>
                <div className="slide">
                    <img src="https://source.unsplash.com/random?landscape,cars" alt="img slider 2" />
                </div>
            
                <div className="slide">
                    <img src="https://source.unsplash.com/random?landscape,night" alt="img slider 3" />
                </div>
            
                <div className="slide">
                    <img src="https://source.unsplash.com/random?landscape,city" alt="img slider 4" />
                </div>

                <button className="btn btn-next" onClick={nextSlide} >{'>'}</button>
                <button className="btn btn-prev" onClick={prevSlide}>{'<'}</button>
            </div>
        </div>
    )
}

export default Home;