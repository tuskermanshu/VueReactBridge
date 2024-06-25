import React from 'react';
import { Button } from "antd";

interface ButtonProps {
    handleClick: (count: number) => void;
    title: string;
    count: number;
}

const Component: React.FC<ButtonProps> = React.forwardRef(({ handleClick, title, count: initialCount }, ref) => {
    const [count, setCount] = React.useState(initialCount);

    React.useImperativeHandle(ref, () => ({
        incrementCount: () => {
            setCount(prevCount => prevCount + 1);
        },
        decrementCount: () => {
            setCount(prevCount => prevCount - 1);
        }
    }));

    function handleRemoteClick() {
        setCount(prevCount => {
            const newCount = prevCount + 1;
            handleClick(newCount);
            return newCount;
        });
    }

    return (
        <>
            <div>
                <h3>common element</h3>
                <button onClick={handleRemoteClick}>{title} - {count}</button>
            </div>
            <div>
                <h3>Ant-design element</h3>
                <Button type="primary" onClick={handleRemoteClick}>{title} - {count}</Button>
            </div>
        </>
    );
});

export default Component;
