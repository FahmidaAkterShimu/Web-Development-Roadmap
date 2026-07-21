import React from 'react';
import { getUsers } from '../lib/data';
import UsersTable from '../components/UsersTable';
import { createUser, deleteUser } from '../lib/actions';
import AddUserModal from '../components/AddUserModal';

const UsersPage = async () => {
    const users = await getUsers();


    return (
        <div className='px-4'>
            <div className='flex justify-between my-3'>
                <h2>User Management: {users.length}</h2>
                <AddUserModal createUserAction={createUser}></AddUserModal>
            </div>
            <UsersTable users={users} deleteUserAction={deleteUser}></UsersTable>
        </div>
    );
};

export default UsersPage;