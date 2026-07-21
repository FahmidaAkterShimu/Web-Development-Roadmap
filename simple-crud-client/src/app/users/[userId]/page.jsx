import { getUserById } from '@/app/lib/data';
import React from 'react';

const UserDetailPage = async({params}) => {
    const {userId} = await params;
    const user = await getUserById(userId);
    console.log(user);

    return (
        <div>
            <h2 className='font-bold'>User Details: </h2>
            <h3>Name: {user.name}</h3>
        </div>
    );
};

export default UserDetailPage;