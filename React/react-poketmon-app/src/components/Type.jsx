import React from 'react'

const Type = ({type, damagevalue}) => {
	const bg = `bg-${type}`;
  return (
	<div>
		<span className={`h-[1.5rem] py-1 px-3 rounded-2xl ${bg} font-bold text-zinc-800 text-[0.6rem] leading-[0.8rem] capitalize flex gap-1 justify-center items-center`}>{type}</span>
		{damagevalue && (
			<span className='bg-zinc-200/40 p-[.125rem] rounded'>{damagevalue}</span>
		)}
	</div>
  )
}

export default Type