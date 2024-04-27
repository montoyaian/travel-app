import React, { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(
  (
    {
      type,
      icon = 'user',
      placeholder = '',
      value,
      cant_positions,
      id_client,
      type_client,
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
        case 'text':
        case 'number':
          return (
            <input
              type={type}
              placeholder={placeholder}
              value={value}
              className={className}
              cant_positions={cant_positions}
              type_client={type_client}
              id_client={id_client}
              ref={inputRef}
              required={required}
              onChange={(e) => handleChange(e)}
            />
          );
        case 'select':
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
              <option value="premium cliente">Premium</option>
            </select>
          );
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

