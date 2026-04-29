import { Card, Link } from "@heroui/react";

const TasksCard = ({ task }) => {
    const { title, description, status, priority } = task;

    return (
        <Card variant="primary" className="w-100 bg-blue-300">
            <Card.Header>
                <Card.Title>{title}</Card.Title>
                <Card.Description>
                    {description}
                </Card.Description>
            </Card.Header>
            <Card.Content>
                {status}
            </Card.Content>
            <Card.Footer className="text-blue-700 font-bold">
                {priority}
            </Card.Footer>
        </Card>
    );
};

export default TasksCard;