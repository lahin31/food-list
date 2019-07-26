import React, { useState, useEffect } from 'react';
import { TimelineMax, Expo } from 'gsap';
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  const [foods, setFoods] = useState([]); 
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/db.json`)
      .then(res => res.json())
      .then(res => setFoods(res.foods))
  }, []);

  const coverImgToggle = () => {
    if(!animation) {
      showAnimation();
    } else {
      hideAnimation();
    }
  }

  const showAnimation = () => {
    const t1 = new TimelineMax();
    t1.to('.cover_pic', 1, {
      width: "60%",
      ease: Expo.easeOut
    }).to('nav', 1, {
      height: "100%",
      ease: Expo.easeOut
    }, "-=0.6").fromTo('.nav-open', 1, {
      opacity: 0,
      x: 50,
      ease: Expo.easeOut
    }, {
      opacity: 1,
      x: 0, 
      onComplete: function() {
        document.querySelector('.nav-open').style.pointerEvents = "auto";
      }
    });
    t1.play();
    setAnimation(true)
  }

  const hideAnimation = () => {
    const t1 = new TimelineMax();
    t1.fromTo('.nav-open', .7, {
      opacity: 1,
    }, {
      opacity: 0,
      x: 0,
      ease: Expo.easeOut 
    }).to('nav', 1, {
      height: "20%",
      ease: Expo.easeOut
    }).to('.cover_pic', 1, {
      width: "100%",
      ease: Expo.easeOut,
      onComplete: function() {
        document.querySelector('.nav-open').style.pointerEvents = "none";
      }
    }, "-=0.5");

    t1.play();
    setAnimation(false);
  }
  return ( 
    <div className="container">
      <Sidebar 
        foods={foods} 
        coverImgToggle={coverImgToggle}
      />
      <img 
        className="cover_pic" 
        src={`${process.env.PUBLIC_URL}/images/berries-pizza.jpg`} 
        alt={`Wallpaper`}
        data-testid="wallpaper"
      />
    </div>
  );
}
 
export default App;