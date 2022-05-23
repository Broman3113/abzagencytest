import React, {useContext, useEffect, useState} from 'react';
import classes from './GetRequest.module.scss';
import Heading from "../../Components/HeadingComponent/Heading";
import {useDispatch, useSelector} from "react-redux";
import Card from "../../Components/CardComponent/Card";
import {LayoutContext} from "../../App";
import Button from "../../Components/ButtonComponent/Button";
import {fetchUsers} from "../../store/asyncActions/users";
import {changePageNumber} from "../../store/users/actions";

const GetRequest = (props) => {
    const users = useSelector(state => state.users.users);
    const pageInfo = useSelector(state => state.users.pageInfo);
    const page = useSelector(state => state.users.page);
    const dispatch = useDispatch();

    const layoutType = useContext(LayoutContext);

    const [isEnd, setIsEnd] = useState(false);

    const showMoreHandler = () => {
        dispatch(fetchUsers(page));
        dispatch(changePageNumber(page+1));
    }
    useEffect(()=>{
        showMoreHandler();
    }, [])
    useEffect(() => {
        if (pageInfo[0] && pageInfo[0] === pageInfo[1]) {
            setIsEnd(true);
        }
    }, [pageInfo])
    return (
        <section id="Users" className={[classes.GetRequest, props.className, classes[layoutType]].join(' ')}>
            <Heading h1 className={classes.GetRequestHeader}>Working with GET request</Heading>
            <div className={classes.CardsWrapper}>
                {users.map(user => <div key={user.id} className={classes.CardWrapper}>
                    <Card user={user}/>
                </div>)}
            </div>

            <Button classNames={isEnd && classes.hide} type="yellow" onClick={() => showMoreHandler()}>Show more</Button>
        </section>
    );
};

export default GetRequest;
