function Switch({ setOn, on }) {
  return (
    <div className="select-none mb-2 mt-5 md:mt-2 w-full form-check form-switch pl-0 flex flex-col justify-center items-center">
      <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-black">
        <span>OFF</span>
        <span className="relative">
          <input 
            id="Toggle1" 
            type="checkbox" 
            className="hidden peer"
            onChange={() => setOn(!on)}
          />
          
          <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-sky-600"></div>
          <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
        </span>
        <span>ON</span>
      </label>
    </div>
  )
}

export default Switch