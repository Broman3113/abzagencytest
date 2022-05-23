import React, {useEffect, useState} from 'react';
import classes from './Button.module.scss'

const Button = ({type, children, disabled, classNames, onClick, href = ""}) => {
    const [typeBtn, setType] = useState('');
    let types = ['yellow', 'blue', 'light-gray'];
    useEffect(() => {
        types.forEach(item => item === type && setType(type));
    }, [type])
    return (
        <>
            {
                href ? <a className={[classNames, classes.Button, classes[typeBtn]].join(' ')} href={href}>{children}</a> :
                    <button onClick={onClick} className={[classNames, classes.Button, classes[typeBtn]].join(' ')}
                            disabled={disabled}>
                        {children}
                    </button>
            }
        </>

    );
};

export default Button;
