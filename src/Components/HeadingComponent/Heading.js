import React, {useEffect, useState} from 'react';
import Font from "../FontComponent/Font";

const Heading = (props) => {
    const [hType, setHType] = useState('h6');
    let keywords = {
        setHType: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
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

    const CustomTag = `${hType}`;

    return (
        <Font Tag={CustomTag} props={props} classNames={props.className}>
            {props.children}
        </Font>
    );
};

export default Heading;
