import React from 'react'

const SearchInput = () => {
  return (
      <div className='h-[38px] md:h-[40px] lg:h-[44px] xl:h-[46px] relative'>
          <input type="text" placeholder='Search for cities' className='secondary-color h-full w-full tracking-wider text-lg pl-2 focus:outline-none poppins-medium rounded-xl' />
    </div>
  )
}

export default SearchInput