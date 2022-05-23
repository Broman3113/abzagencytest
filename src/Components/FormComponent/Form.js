import React, {useEffect, useState} from 'react';
import classes from "./Form.module.scss"
import Heading from "../HeadingComponent/Heading";
import Input from "../InputComponent/Input";
import Text from "../TextComponent/Text";
import Textarea from "../TextareaComponent/Textarea";
import Button from "../ButtonComponent/Button";
import successImage from '../../assets/success-image.svg';
import {useDispatch, useSelector} from "react-redux";
import {fetchPositions} from "../../store/asyncActions/positions";
import {logDOM} from "@testing-library/react";
import {fetchUsers} from "../../store/asyncActions/users";
import {changePageNumber} from "../../store/users/actions";

const Form = (props) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);



    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [position_id, setPosition] = useState(Number);
    const [photo, setPhoto] = useState(null);

    const [nameValidated, setNameValidated] = useState({status: '', errorMsg: 'Length 2-60'});
    const [emailValidated, setEmailValidated] = useState({status: '', errorMsg: 'Length 2-60, valid to RFC2822'});
    const [phoneValidated, setPhoneValidated] = useState({
        status: '',
        errorMsg: 'Number should start with code of Ukraine +380'
    });
    const [position_idValidated, setPositionValidated] = useState({status: '', errorMsg: ''});
    const [photoValidated, setPhotoValidated] = useState({
        status: '',
        errorMsg: 'Minimum size of photo 70x70px. The photo format must be jpeg/jpg type. The photo size must not be greater than 5 Mb.'
    });


    const dispatch = useDispatch();
    const positions = useSelector(state => state.positions.positions);
    const page = useSelector(state => state.users.page);


    const onChangeValue = (event) => {
        setPosition(+event.target.value);
        setPositionValidated({status: 'valid', errorMsg: ''});
    }
    const selectFile = e => {
        setPhoto(e.target.files[0]);
        validatePhoto(e.target.files[0]);
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('position_id', position_id);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('photo', photo);
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token').then(function (response) {
            return response.json();
        }).then(function (dataToken) {
            fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
                method: 'POST',
                body: formData,
                headers: {'Token': dataToken.token},
            })
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    if (data.success) {
                        setIsSubmit(true);
                        dispatch(fetchUsers(1, true));
                        dispatch(changePageNumber(2));
                    } else {
                        alert(data.message + data.fails)
                    }
                }).catch(function (error) {
            });
        }).catch(function (error) {
            console.error(error)
        });
    }


    useEffect(() => {
        if (
            nameValidated.status === "valid" &&
            emailValidated.status === "valid" &&
            phoneValidated.status === "valid" &&
            position_idValidated.status === "valid" &&
            photoValidated.status === "valid"
        ) {
            setIsCompleted(true);
        } else {
            setIsCompleted(false);
        }

    });

    useEffect(() => {
        dispatch(fetchPositions()); // Get positions from DB and store them in Redux store

    }, [])

    const validateName = () => {
        !(name.length < 2 || name.length > 60) ? setNameValidated({
            status: 'valid',
            errorMsg: 'Length 2-60'
        }) : setNameValidated({status: 'error', errorMsg: 'Length 2-60'});
    }
    const validateEmail = () => {
        const regEx = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        regEx.test(email) ? setEmailValidated({
            status: 'valid',
            errorMsg: 'Length 2-60, valid to RFC2822'
        }) : setEmailValidated({status: 'error', errorMsg: 'Length 2-60, valid to RFC2822'});
    }
    const validatePhone = () => {
        const regEx = /^[\+]{0,1}380([0-9]{9})$/;
        return regEx.test(phone) ? setPhoneValidated({
            status: 'valid',
            errorMsg: 'Number should start with code of Ukraine +380'
        }) : setPhoneValidated({status: 'error', errorMsg: 'Number should start with code of Ukraine +380'});
    }

    const validatePhoto = (photo) => {
        let size = parseFloat(photo.size / 1024).toFixed(2);

        const getHeightAndWidthFromDataUrl = dataURL => new Promise(resolve => {
            const img = new Image()
            img.onload = () => {
                resolve({
                    height: img.height,
                    width: img.width
                })
            }
            img.src = dataURL
        })

        // Get the data URL of the image as a string
        const fileAsDataURL = window.URL.createObjectURL(photo)

        // Get the dimensions
        getHeightAndWidthFromDataUrl(fileAsDataURL)
            .then(dimensions => {
                if (size < 5120 && dimensions.width > 70 && dimensions.height > 70 && (photo.type === 'image/jpeg' || photo.type === 'image/jpg')) {
                    setPhotoValidated({
                        status: 'valid',
                        errorMsg: 'Minimum size of photo 70x70px. The photo format must be jpeg/jpg type. The photo size must not be greater than 5 Mb.'
                    })
                } else {
                    setPhotoValidated({
                        status: 'error',
                        errorMsg: 'Minimum size of photo 70x70px. The photo format must be jpeg/jpg type. The photo size must not be greater than 5 Mb.'
                    })
                }
            })

    }

    return (
        <>
            {!isSubmit ? <form className={[classes.Form, props.className].join(' ')}>
                <Heading h1>Working with POST request</Heading>
                <div className={classes.InputWrapper}>
                    <Input ClassNames={classes.Input}
                           inputValue={name}
                           setInputValue={setName}
                           Placeholder="Your Name"
                           onBlur={validateName}
                           helperText={nameValidated.status === "error" && nameValidated.errorMsg}
                           isError={nameValidated.status === "error"}
                    />
                    <Input ClassNames={classes.Input}
                           inputValue={email}
                           setInputValue={setEmail}
                           Placeholder="Email"
                           onBlur={validateEmail}
                           helperText={emailValidated.status === "error" && emailValidated.errorMsg}
                           isError={emailValidated.status === "error"}
                    />
                    <Input ClassNames={classes.Input}
                           inputValue={phone}
                           setInputValue={setPhone}
                           Placeholder="Phone"
                           onBlur={validatePhone}
                           helperText={phoneValidated.status === "error" ? phoneValidated.errorMsg : "+38 (XXX) XXX - XX - XX"}
                           isError={phoneValidated.status === "error"}
                    />
                    <Text className={classes.RadioTitle}>Select your position</Text>
                    <div className={classes.Radio} onChange={onChangeValue}>
                        {positions.map(position => <div key={position.id}>
                                <input name="position" readOnly
                                       checked={position_id === position.id}
                                       value={position.id} type="radio"/><span>{position.name}</span><br/>
                            </div>
                        )}

                    </div>
                    <Textarea ClassName={classes.Upload}
                              onChange={selectFile}
                              onUpload={() => validatePhoto(photo)}
                              helperText={photoValidated.status === "error" && photoValidated.errorMsg}
                              isError={photoValidated.status === "error"}
                    />
                    <Button type="yellow" disabled={!isCompleted} onClick={onSubmit}>Sign up</Button>
                </div>
            </form> : <div className={classes.FormSuccess}>
                <Heading h1>User successfully registered</Heading>
                <img className={classes.successImg} src={successImage} alt="success"/>
            </div>}
        </>
    );
};

export default Form;
