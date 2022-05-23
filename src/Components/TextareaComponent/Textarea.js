import React from 'react';
import classes from './Textarea.module.scss';

const Textarea = (props) => {
    let uploaded = false;
    const onClickHandler = (e) => {
        e.preventDefault();
        props.onUpload();
    }
    return (
        <div className={[classes.wrapper, props.ClassName, props.isError ? classes.Error: ''].join(' ')}>
            <button className={classes.uploadBtn} onClick={onClickHandler}>
                Upload
                {props.isError && <span className={classes.ErrorText}>{props.helperText}</span>}
            </button>
            <label htmlFor={classes.uploadInput} className={classes.uploadInputLabel}>
                <span className={uploaded ? classes.uploaded : classes.unuploaded}>Upload your photo</span>
                <input id={classes.uploadInput} className={classes.uploadInput} type="file" onChange={props.onChange}/>
            </label>

        </div>
    );
};

export default Textarea;
