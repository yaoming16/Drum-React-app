function Screen({ screenText, on, id }) {
	return (
		<div className="w-full flex flex-col justify-center items-center mb-2 select-none">
			<div 
				id={id}
				className="mt-4 w-1/2 bg-stone-400 p-2 min-h-10 font-bold 
				flex justify-center whitespace-nowrap">
				{on ? screenText : ""}
			</div>
		</div>
	)
}

export default Screen