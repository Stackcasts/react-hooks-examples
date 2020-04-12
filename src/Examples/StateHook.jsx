import React, { useState } from 'react';

export default function StateHook() {
    const [count, setCount] = useState(0);

    return (
        <div className="container" style={{ marginTop: '60px' }}>
            <div className="form-group">
                <button
                    className="btn btn-primary btn-block"
                    onClick={() => setCount(count + 1)}
                >
                    Increase
                </button>
            </div>

            <p>You have clicked {count} times.</p>
        </div>
    )
}
