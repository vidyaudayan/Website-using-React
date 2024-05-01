import React, { useEffect, useState } from 'react'
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {
  let heroData= [
    {text1:"Find Your passion",text2:"Make it happen"},
    {text1:"Revive",text2:"Keep going"},
    {text1:"Speed up",text2:"Carry success"},
  ]
  const [heroCount,setHeroCount]= useState(1);
  const [playStatus, setPlayStatus]= useState(false)

  useEffect(()=>{
    setInterval(()=>{
setHeroCount((count)=>{return count===2?0:count+1})
    },3000)
  },[])
  return (
    <div>
<Background playStatus={playStatus} heroCount={heroCount}/>
    <Navbar/>
    <Hero setPlayStatus={setPlayStatus} heroData={heroData[heroCount]} heroCount={heroCount} setHeroCount={setHeroCount} playStatus={playStatus}/>
    </div>
  )
}

export default App