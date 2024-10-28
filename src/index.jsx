import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <h1>{text || "Enter text below:"}</h1>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Type here..."
            />
        </div>
    );
}

root.render(<App />);
