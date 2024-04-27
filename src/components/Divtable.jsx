import React from 'react'

export const Divtable = ({children,col, off,classLoad,classTable}) => {
  return (
    <div className='row mt-3'>
        <div className={'col-md-'+col+'offset-md'+off}>
            <div className={'card border border-white text-center'+ classLoad}></div>
        </div>
        <div className={'table-responsive'+classTable}>
            {children}
        </div>
    </div>
  )
}
