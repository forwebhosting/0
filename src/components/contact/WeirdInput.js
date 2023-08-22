import React from 'react';

const WeirdInput = ({ value, onChange, className, type, name, id }) => {
  const [animated, setAnimated] = React.useState(false);
  const [caret, setCaret] = React.useState(true);

  const handleInput = (e) => {
    onChange(e);
    let self = this;
    setCaret(false);
    if (e.target.value.length > value.length) {
      if (e.target.value.slice(-1) === ' ') return false;
      setTimeout(() => {
        setAnimated(true);
        setTimeout(() => {
          setAnimated(false);
          setCaret(true);
        }, 300);
      }, 200);
    }
  };

  const arr = value.split('');

  return (
    <div className={`nice-input ${className} ${animated ? 'nice-input--shaked' : ''} ${!caret ? 'nice-input--caret' : ''}`}>
      <input type={type} name={name} id={id} autoComplete="off" value={value} onChange={handleInput} />
      <label htmlFor={id}>
        {arr.map((word, index) => (
          <span key={index} className={`nice-input__animate`}>
            {word}
          </span>
        ))}
      </label>
    </div>
  );
};

export default WeirdInput;
