import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, IconButton, Input } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        width: theme.spacing(16),
        height: theme.spacing(16),
    },
    input: {
        display: 'none',
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

function ProfileImageChanger() {
    const classes = useStyles();
    const [image, setImage] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setImage(reader.result);
        };

        reader.readAsDataURL(file);
    };

    const handleSubmit = () => {
        // Code to submit image to server or update user profile
        console.log('Submitting image:', image);
    };

    return (
        <div className={classes.root}>
            <Avatar className={classes.avatar} src={image} />
            <input
                accept="image/*"
                className={classes.input}
                id="profile-image-input"
                type="file"
                onChange={handleImageChange}
            />
            <label htmlFor="profile-image-input">
                <IconButton color="primary" component="span">
                    <PhotoCamera />
                </IconButton>
            </label>
            <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={!image}
            >
                Save
            </Button>
        </div>
    );
}

export default ProfileImageChanger;
