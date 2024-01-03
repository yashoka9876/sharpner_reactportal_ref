import React, { useRef, useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const username=useRef();
  const userage=useRef();
  const collegename=useRef();
  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUserName=username.current.value;
    const enteredUserAge=userage.current.value;
    const enteredCollgeName=collegename.current.value;
    console.log(enteredUserName,enteredUserAge);
    // if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
    //   setError({
    //     title: 'Invalid input',
    //     message: 'Please enter a valid name and age (non-empty values).',
    //   });
    //   return;
    // }
    // if (+enteredAge < 1) {
    //   setError({
    //     title: 'Invalid age',
    //     message: 'Please enter a valid age (> 0).',
    //   });
    //   return;
    // }

    if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0 || enteredCollgeName.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    
    props.onAddUser(enteredUserName, enteredUserAge,enteredCollgeName);
    username.current.value=''
    userage.current.value=''
    collegename.current.value=''
    
    // setEnteredUsername('');
    // setEnteredAge('');
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
          ref={username}
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
          ref={userage}
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
          />
           <label htmlFor="collge">collgeName</label>
          <input
          ref={collegename}
            id="collge"
            type="text"
            // value={enteredAge}
            // onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
