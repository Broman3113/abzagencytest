import React, {useContext} from 'react';
import Logo from '../../assets/Logo.svg';
import classes from './Header.module.scss';
import Button from "../ButtonComponent/Button";
import {LayoutContext} from "../../App";

const Header = () => {
    const layoutType = useContext(LayoutContext);
    console.log(layoutType);
    return (
        <div className={[classes.Header, classes[layoutType]].join(' ')}>
            <div className={[classes.wrapperHeader, 'container'].join(' ')}>
                <img className={classes.Logo} src={Logo} alt="logo"/>
                <div className={classes.wrapperBtn}>

                    <Button classNames={classes.Btn} type="yellow" href="#Users">Users</Button>
                    <Button type="yellow" href="#SignUp">Sign up</Button>
                </div>
            </div>
        </div>
    );
};

export default Header;
