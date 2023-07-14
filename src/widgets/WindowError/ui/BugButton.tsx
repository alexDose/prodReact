import {useEffect, useState} from "react";

export const BugButton = () => {
    const [isError, setError] = useState(false)

    useEffect(() => {
        if (isError) throw Error('error')
    }, [isError])

    return (
        <button onClick={() => setError(true)}>
            throw Error
        </button>
    );
};
