import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const clipAudios = [
  {
    keyTrigger: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    description: "Heater 1",
  },
  {
    keyTrigger: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    description: "Heater 2",
  },
  {
    keyTrigger: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    description: "Heater 3",
  },
  {
    keyTrigger: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    description: "Heater 4",
  },
  {
    keyTrigger: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    description: "Clap",
  },
  {
    keyTrigger: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    description: "Open HH",
  },
  {
    keyTrigger: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    description: "Kick n' Hat",
  },
  {
    keyTrigger: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    description: "Kick",
  },
  {
    keyTrigger: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    description: "Closed HH",
  },
];


function App() {  
  return (
      
      <div id="drum-machine" className='w-full h-screen bg-slate-800 flex flex-col justify-center items-center gap-10'>
        <h2 className='font-mono font-bold text-4xl text-white'>Drum Machine</h2>
        <div className='grid grid-cols-3 gap-5 m-5'>
        {clipAudios.map((clip)=>{
          return <DrumBtn key={clip.keyTrigger} clip={clip}/>
        })}
        </div>
        <div id="display" className='bg-slate-400 w-32 h-12 flex justify-center items-center rounded-xl shadow-lg'></div>
      </div>
  )
}

export default App;



const DrumBtn=({clip})=>{
   
  const keyPress=(e)=>{
    
    if(e.key.toUpperCase() === clip.keyTrigger){
      playAudio();

    }
  }

  useEffect(()=>{

    document.addEventListener("keydown", keyPress);
    return()=>{
      document.removeEventListener("keydown", keyPress);
    }

  },[])

  
  const playAudio = () => {
    const tag = document.getElementById(clip.keyTrigger);
    const doc = document.getElementById('display');
    tag.currentTime = 0; 
    tag.play();
    doc.innerText=clip.description

  }
  return(
    <button onClick={playAudio} className='drum-pad bg-red-950 w-20 h-14 rounded-lg shadow-md hover:ring ring-1 ring-slate-600 focus:bg-red-900 ' id={clip.description}>
      <p className='text-white text-xl font-bold'>{clip.keyTrigger}</p>
      <audio id={clip.keyTrigger} src={clip.url} className='clip'/>
    </button>
  )
}
