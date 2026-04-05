import React from 'react';
import useInputField from '../../hooks/useInpuField';

const HookForm = () => {
    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');
    const [password, passwordOnChange] = useInputField('');


    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit', name, email, password)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" defaultValue={name} onChange={nameOnChange} placeholder='Name' />
                <br />
                <input type="email" name="" defaultValue={email} onChange={emailOnChange} placeholder='Email' />
                <br />
                <input type="password" name="" defaultValue={password} onChange={passwordOnChange} placeholder='Password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;