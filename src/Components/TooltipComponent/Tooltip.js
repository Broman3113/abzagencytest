import React, {useState} from 'react';
import classes from './Tooltip.module.scss';

const Tooltip = ({children, tooltipValue}) => {
    const [isHover, setIsHover] = useState(false);
    const [pageXState, setPageXState] = useState(Number);
    const [pageYState, setPageYState] = useState(Number);
    return (
        <span className={classes.tooltip}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={(e) => {
                  setIsHover(false);
                  setPageXState(e.pageX);
                  setPageYState(e.pageY);
              }}
        >
            {children}
            {isHover && <span style={{left: pageXState - 10, top: pageYState + 20}} className={classes.tooltipPopup}>{tooltipValue}</span>}
        </span>
    );
};

export default Tooltip;
