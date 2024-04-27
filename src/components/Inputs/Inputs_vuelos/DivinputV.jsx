import React, { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(
  (
    {
      type = 'text',
      icon = 'user',
      placeholder = '',
      options = [], // Propiedad para opciones en el select
      value,
      origin,
      destination,
      date,
      positions,
      hour,
      id_agency,
      premium_cost,
      id,
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
        case 'date':
        case 'number':
        case 'time':
          return (
            <input
              type={type}
              placeholder={placeholder}
              value={value}
              className={className}
              origin={origin}
              destination={destination}
              date={date}
              positions={positions}
              hour={hour}
              premium_cost={premium_cost}
              id={id}
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
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
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