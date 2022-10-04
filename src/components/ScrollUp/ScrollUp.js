import React,{useEffect, useRef} from 'react'
import './ScrollUp.css';

const ScrollUp = () => {

    const scrollupRef = useRef()
   useEffect(()=>{
        const body = document.querySelector("body")
        const scrollup = scrollupRef.current
        body.onscroll = () =>{
            if(window.scrollY > 400){
                scrollup.classList.add("scrollup-show")
            }else{
                scrollup.classList.remove("scrollup-show")
            }
        }
   })
   const scrollHandler = () =>{
    window.scroll({
        top:0,
        behavior:'smooth'
    })
   }
    return (
        <div className="scrollup"ref={scrollupRef} onClick={scrollHandler}>
            <span className="material-icons">expand_less</span>
        </div>
    )
}

export default ScrollUp