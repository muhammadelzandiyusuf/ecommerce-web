import React from 'react';

const Input = props => {
    return(
        <div>
            <input 
                type={props.type} 
                onChange={props.onEnteredType} 
                placeholder={props.placeholder} 
                className={props.formControl} />
        </div>
    );
};

export default Input;