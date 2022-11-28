function Button( {letter, setScreenText, name, playSound, soundUrl} ) {
  
  return (
    <div 
      className="w-1/3 bg-stone-600 m-2 text-white flex p-5 justify-center 
      cursor-pointer focus:border-0 transition-colors rounded-md font-bold select-none active:bg-slate-500 drum-pad shadow-xl"
      onClick={() => {
        playSound(letter);
        setScreenText(name);     
      }} 
      id={"Btn_" + letter}>
      {letter}
      <audio className="clip" id={letter} src={soundUrl} ></audio>
    </div>
  )
}

export default Button


// setTimeout(() => {
//   e.target.disabled = false;
// }, 1)