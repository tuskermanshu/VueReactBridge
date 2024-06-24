import React from 'react';
import { Button } from "antd";

interface ButtonProps {
    handleClick: (count:number) => void;
    title: string;
    count:number
}

const Component: React.FC<ButtonProps> = ({ handleClick, title,count:pureCount }) => {


    const [count,setCount] = React.useState(pureCount);

    function handleRemoteClick() {
        console.log("remote click in React")
        setCount(count + 1);
        handleClick(count)
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
};

export default Component;