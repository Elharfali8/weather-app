import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchInput = ({value, handleValue, submitBtn}) => {
  return (
      <form onSubmit={submitBtn} className='h-[38px] md:h-[40px] lg:h-[44px] xl:h-[46px] relative w-full'>
      <input
        type="text"
        placeholder='Search for cities'
        value={value}
        onChange={handleValue}
        className='secondary-color h-full w-full tracking-wider text-lg pl-2 focus:outline-none poppins-medium rounded-xl' />
      <button type="submit" className='absolute right-2 top-1 bottom-1 text-lg md:text-xl lg:text-2xl p-1 bg-[#9399A2] text-white px-2 rounded-lg'>
          <FaSearch />
      </button>
    </form>
  )
}

export default SearchInput