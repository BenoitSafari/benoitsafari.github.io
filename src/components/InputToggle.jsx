import './Input.scss';

function InputToggle () {
  return(
    <div className='lib__input-toggle'>
      <span className='right'>en</span>
      <input type='checkbox'/>
      <label htmlFor=''>
        <span className='left'>fr</span>
      </label>
    </div>

  );
}

export {InputToggle};