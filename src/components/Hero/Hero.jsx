import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'
function Hero({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) {
  return (
    <div className='hero'>
<div className='heroText'>
  <p>{heroData.text1}</p>
  <p>{heroData.text2}</p>
</div>
<div className='heroExplore'>
  <p>Explore the features</p>
  <img src={arrow} alt="" />
</div>
<div className="heroDotDiv">
  <ul className='herodots'>
<li onClick={()=>setHeroCount(0)} className={heroCount===0?"heroDot orange":"heroDot"}></li>
<li  onClick={()=>setHeroCount(1)} className={heroCount===1?"heroDot orange":"heroDot"}></li>
<li  onClick={()=>setHeroCount(2)} className={heroCount===2?"heroDot orange":"heroDot"}></li>
  </ul>
  <div className="heroPlay">
    <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon}  />
    <p>See the video</p>
  </div>
</div>
    </div>
  )
}

export default Hero