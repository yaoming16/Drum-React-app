import './App.css'
import { useEffect, useState } from 'react';
import Button from './components/Button';
import Range from './components/Range';
import Switch from './components/Switch';
import Screen from './components/Screen';

function App() {

  useEffect(() => {
    document.addEventListener('keypress', (e) => {
      const pressedKey = e.key.toUpperCase();
      if(['Btn_Q','Btn_W','Btn_E','Btn_A','Btn_S','Btn_D','Btn_Z','Btn_X','Btn_C'].includes("Btn_" +  pressedKey)) {
        document.getElementById("Btn_" + pressedKey).click();
      }   
    })
    console.log('Event ok');
  },[])

  const [screenText, setScreenText] = useState('');
  const [volume, setVolume] = useState(50);
  const [on, setOn] = useState(false);

  const volumeFunction = (value) => {
    setVolume(value)
  }

  const playSound = (id) => {
    const audioTag = document.getElementById(id);
    if(on) {
      audioTag.muted = false;
      audioTag.volume = volume/100;
      audioTag.play();
      audioTag.currentTime = 0;
    } else {
      audioTag.muted = true;
    }
  }


  return (
    <div className='bg-stone-400 h-screen flex flex-wrap justify-center items-center'>
      <div className='max-w-xl md:max-w-5xl rounded border-4 border-yellow-700 bg-stone-200 ml-auto 
        w-5/6 mr-auto justify-center align-middle p-4' id="drum-machine">

        <div className='p-2 w-full flex flex-col md:flex-row justify-center items-center'>
          <div className='w-full md:w-1/2 flex flex-col md:mr-5'>
            <div className='flex flex-row'>
              <Button letter="Q"  setScreenText={setScreenText} name="Heater 1"  playSound={playSound} soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />
              <Button letter="W"  setScreenText={setScreenText} name="Heater 2"  playSound={playSound} soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" />
              <Button letter="E"  setScreenText={setScreenText} name="Heater 3"  playSound={playSound} soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" />
            </div>
            <div className='flex flex-row'>
              <Button letter="A"  setScreenText={setScreenText} name="Heater 4"  playSound={playSound} soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" />
              <Button letter="S"  setScreenText={setScreenText} name="Clap"  playSound={playSound} soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" />
              <Button letter="D"  setScreenText={setScreenText} name="Open HH"  playSound={playSound} soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" />
            </div>
            <div className='flex flex-row'>
              <Button letter="Z"  setScreenText={setScreenText} name="Kick n' Hat"  playSound={playSound} soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" />
              <Button letter="X"  setScreenText={setScreenText} name="Kick"  playSound={playSound} soundUrl="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" />
              <Button letter="C"  setScreenText={setScreenText} name="Closed HH"  playSound={playSound} soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" />
            </div>
          </div>
          <div className='w-full md:w-1/2 flex flex-col justify-around items-center'>
            <div>
              <Switch setOn={setOn} on={on} />
            </div>
            <Screen screenText={screenText} on={on} id="display"/>
            <div className='w-4/5'>
              <Range value={volume} volumeFunction={volumeFunction} setScreenText={setScreenText} />
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default App
