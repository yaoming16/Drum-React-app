import '../styles/range.css'

function Range({volume, volumeFunction, setScreenText}) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <label htmlFor="customRange1" className="form-label">Volume</label>
      <input
        type="range"
        className="bg-transparent select-none"
        id="customRange1"
        onChange={(e) => {
          volumeFunction(e.target.value); 
          setScreenText(`Volume: ${e.target.value}`);
        }}
      />
    </div>
  )
}

export default Range