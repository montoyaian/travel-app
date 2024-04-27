import React from 'react'

export const DivAdd = ({children}) => {
  return (
    <div className='row mt-3'>
        <div className='col-md-4 offset-4 text-center' >
            <div className='d-grid mx-auto'></div> 
            {children}
        </div>
    </div>
  )
}
