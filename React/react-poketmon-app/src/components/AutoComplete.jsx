import React, { useState } from 'react'

const AutoComplete = ({allPokemons, setDisplayedPokemons}) => {
	
	// 검색
	const [searchTerm, setSearchTerm] = useState("");

	const filterNames = (input) => {
		const value = input.toLowerCase();// 소문자로

		//검색어에 해당되는 이름 찾기, 없으면 빈 배열
		return value ? allPokemons.filter((e) => e.name.includes(value)) : [];
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		let text = searchTerm.trim();//.trim() 공백제거
		setDisplayedPokemons(filterNames(text));//리스트에 검색한 결과 출력
		setSearchTerm("");//input 초기화
	};

	const checkEqualName = (input) => {
		const fillteredArray = filterNames(input);
		return fillteredArray[0]?.name === input ? [] : fillteredArray;
	};

  return (
	<div className='relative z-50'>
		<form 
			onSubmit={handleSubmit}
			action="" 
			className='relative flex justify-center items-center w-[20.5rem] h-6 rounded-lg m-auto'
		>
			<input 
				type="text"
				className='text-xs w-[20.5rem] h-6 px-2 py-1 bg-[hsl(214,13%,47%)] rounded-lg text-gray-300 text-center' 
				onChange={(e) => setSearchTerm(e.target.value)} 
				value={searchTerm}
			/>
			<button 
				type='submit' 
				className='text-xs bg-slate-900 text-slate-300 w-[2.5rem] h-6 px-2 py-1 rounded-r-lg text-center absolute right-0 hover:bg-slate-700'>검색
			</button>
		</form>
		{checkEqualName(searchTerm).length > 0 && (
			<div 
				className="w-full flex bottom-0 h-0 flex-col absolute justify-center items-center translate-y-2"
			>
				<div
					className='w-0 bottom-0 border-x-transparent border-x-8 border-b-[8px] border-gray-700 -translate-y-1/2'
				>

				</div>
				<ul
					className='w-40 max-h-[134px] py-1 bg-gray-700 rounded-lg absolute top-0 overflow-auto scrollbar-none'
				>
					{checkEqualName(searchTerm).map((e,i) => (
						<li key={`button-${i}`}>
							<button
								onClick={() => setSearchTerm(e.name)}
								className='text-base w-full hover:bg-gray-600 p-[2px] text-gray-100'
							>
								{e.name}
							</button>
						</li>
					))}
				</ul>
			</div>
			
		)}
	</div>
  )
}

export default AutoComplete