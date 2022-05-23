import React, {useState} from 'react';
import classesTextarea from '../TextareaComponent/Textarea.module.scss';
import classes from './Input.module.scss';

const Input = ({Placeholder = 'Name', helperText, ClassNames, inputValue, setInputValue, onBlur, isError = false}) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={[classes.Wrapper, ClassNames].join(' ')}>
            <label
                htmlFor={classes.Input}
                className={[
                    classes.InputLabel,
                    isActive || inputValue ? classes.InputLabelActive : '',
                    isError ? classes.ErrorLabel : ''
                ].join(' ')}>
                {Placeholder}
            </label>
            <input
                id={classes.Input}
                className={[classes.Input, isError ? classes.ErrorInput : ''].join(' ')}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setIsActive(true)}
                onBlur={() => {
                    setIsActive(false);
                    onBlur();
                }}
            />
            {helperText && <span className={[classes.HelperText, isError ? classes.ErrorLabel : ''].join(' ')}>{helperText}</span>}

        </div>
);
};

export default Input;
