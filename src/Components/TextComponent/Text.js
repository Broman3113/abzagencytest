import React, {useEffect, useState} from 'react';
import Font from "../FontComponent/Font";
import '../TextComponent/Text.css';


const Text = (props) => {
    const [pType, setPType] = useState('p1');
    let keywords = {
        setPType: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6'],
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
        <Font classNames={[pType, props.className].join(' ')} props={props}>
            {props.children}
        </Font>
    );
};

export default Text;
