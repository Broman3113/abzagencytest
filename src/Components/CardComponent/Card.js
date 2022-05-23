import React from 'react';
import classes from './Card.module.scss';
import Text from '../TextComponent/Text';
import UserIconDefault from '../../assets/photo-cover.svg'
import Tooltip from "../TooltipComponent/Tooltip";

const Card = ({user}) => {
    return (
        <div className={classes.Card}>
            <img
                className={classes.CardImg}
                src={user.photo}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src=UserIconDefault;
                }}
                alt="userImg"
            />
            <Text className={classes.CardTitle} p1>
                <Tooltip tooltipValue={user.name}>{user.name}</Tooltip>
            </Text>
            <Text className={classes.CardDescription} p1>
                <Tooltip tooltipValue={user.position}>{user.position}</Tooltip>
                <Tooltip tooltipValue={user.email}>{user.email}</Tooltip>
                <Tooltip tooltipValue={user.phone}>{user.phone}</Tooltip>
            </Text>
        </div>
    );
};

export default Card;
