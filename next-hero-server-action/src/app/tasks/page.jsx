import Addtask from '@/components/AddTask';
import TasksCard from '@/components/TasksCard';
import { createATask } from '@/lib/actions';
import { getTasks } from '@/lib/tasks';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const TasksPage = async () => {
    const tasks = await getTasks();

    return (
        <div>
            <h2 className='text-2xl font-bold text-center mb-4'>Tasks: {tasks.length}</h2>
            <div className="flex justify-center items-center">
                <Addtask createATask={createATask}></Addtask>
            </div>
            <Link href="/tasks/new" className='flex justify-center items-center mt-6'>
                <Button variant="primary">
                    Add Task
                </Button>
            </Link>
            <div className='grid grid-cols-3 gap-6 max-w-350 mx-auto pt-8'>
                {
                    tasks.map(task => <TasksCard key={task.id} task={task}></TasksCard>)
                }
            </div>
        </div>
    );
};

export default TasksPage;