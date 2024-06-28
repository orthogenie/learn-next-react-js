'use client';

import { useState } from 'react';

export default function LikeButton() {
    // States and Hooks
    // First item in the array is the state value
    // Second item in the array is a function to update the value
    // Use array destructuring to access the array values
    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return <button onClick={handleClick}>Like ({likes})</button>;

}