import React, {useEffect, useState} from 'react';
import classes from './BG.module.scss'

const BG = (props) => {
    const [BgColor, setBgColor] = useState('');
    let keywords = {
        setBgColor: ['yellow', 'blue', 'light-gray' ],
    }
    useEffect(() => {
        Object.keys(props).forEach(item => {
            for (let key in keywords) {
                keywords[key].forEach(itemKey => {
                    if (item === itemKey) {
                        eval(`${key}(itemKey)`);
                    }
                })
            }
        })
    }, [props])
    return (
        <div className={classes[BgColor]}>
            {props.children}
        </div>
    );
};

export default BG;
