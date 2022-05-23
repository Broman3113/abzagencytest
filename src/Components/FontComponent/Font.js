import React, {useEffect, useState} from 'react';
import './Font.css';

const Font = ({Tag = "p", children, props, classNames = ""}) => {
    const [fw, setFw] = useState('');
    let keywords = {
        setFw: ['normal', 'bold'],
    }

    useEffect(() => {
        Object.keys(props).forEach(item => {
            for (let key in keywords) {
                keywords[key].forEach(itemKey => {
                    if (item === itemKey) {
                        eval(`${key}('font-'+itemKey)`);
                    }
                })
            }
        })
    }, [props])


    return (
        <Tag className={[classNames, fw].join(' ')}>
            {children}
        </Tag>
    );
};

export default Font;
