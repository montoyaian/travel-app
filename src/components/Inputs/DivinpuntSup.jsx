import React,{forwardRef,useEffect,useRef} from 'react'
export default forwardRef( ({type='text',icon='user', placeholder='', name, contact, description, id, value, className, required, isFocused=false, handleChange},ref)=> {
    const inputRef =ref || useRef()
    useEffect(() =>{
        if(isFocused){
            inputRef.current.focus()
        }

    }, [])
  return (
    <div className='input-group mb-3'>
        <span className='input-group-text'>
            <i className={'fa-solid ' + icon }></i>
        </span>
        <input 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        name={name} 
        contact={contact}
        description={description}
        id={id} 
        className={className} 
        ref={inputRef} 
        required={required} 
        onChange={(e) => handleChange(e)}
        />

    </div>
  )
})
