import React from 'react';
import classes from "./PostRequest.module.scss";
import Form from "../../Components/FormComponent/Form";

const PostRequest = () => {
    return (
        <section className={classes.PostRequest} id="SignUp">
            <Form/>
        </section>
    );
};

export default PostRequest;
