import React from 'react'

const Title = ({text}) => {
  return (
      <div className='mb-4'>
          <h1 className=' uppercase text tracking-wide poppins-semibold text-lg lg:text-xl'>{text}</h1>
    </div>
  )
}

export default Title