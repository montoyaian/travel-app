import React, { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(
  (
    {
      type,
      icon = 'user',
      placeholder = '',
      value,
      id_flight,
      discount,
      customer_type,
      flight_type,
      className,
      required,
      isFocused = false,
      handleChange,
    },
    ref
  ) => {
    const inputRef = ref || useRef();

    useEffect(() => {
      if (isFocused) {
        inputRef.current.focus();
      }
    }, []);

    const renderInput = () => {
      switch (type) {
        case 'number':
          return (
            <input
              type={type}
              placeholder={placeholder}
              value={value}
              className={className}
              id_flight={id_flight}
              discount={discount}
              customer_type={customer_type}
              flight_type={flight_type}
              ref={inputRef}
              required={required}
              onChange={(e) => handleChange(e)}
            />
          );
        case 'select':
            if(placeholder === 'Tipo de Cliente'){
                return (
                    <select
                      value={value}
                      className={className}
                      ref={inputRef}
                      required={required}
                      onChange={(e) => handleChange(e)}
                    >
                      <option value=""> Tipo de cliente</option>
                      <option value="standard client">Estandar</option>
                      <option value="premium client">Premium</option>
                    </select>
                  );
            }
            if(placeholder === 'Tipo de Vuelo'){
                return (
                    <select
                      value={value}
                      className={className}
                      ref={inputRef}
                      required={required}
                      onChange={(e) => handleChange(e)}
                    >
                      <option value=""> Tipo de Vuelo</option>
                      <option value="standard class">Clase Estandar</option>
                      <option value="first class">Primera Clase</option>
                    </select>
                  );    
            }
        default:
          return null;
      }
    };

    return (
      <div className='input-group mb-3'>
        <span className='input-group-text'>
          <i className={'fa-solid ' + icon}></i>
        </span>
        {renderInput()}
      </div>
    );
  }
);
