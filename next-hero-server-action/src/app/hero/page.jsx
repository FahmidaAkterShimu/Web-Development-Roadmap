import { Button } from "@heroui/react";

const HeroPage = () => {
    return (
        <div>
            <h2>Hero page</h2>
            <Button>Hero button</Button>
            <Button variant="secondary">Hero button</Button>
            <Button variant="ghost">Hero button</Button>
            <Button variant="danger-soft">Hero button</Button>
        </div>
    );
};

export default HeroPage;