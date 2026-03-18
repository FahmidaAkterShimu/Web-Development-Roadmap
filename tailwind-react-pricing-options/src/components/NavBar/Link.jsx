import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='px-2 hover:text-sky-300'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;