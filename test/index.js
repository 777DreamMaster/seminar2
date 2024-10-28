import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
function App() {
  const [text, setText] = useState('');
  const handleChange = event => {
    setText(event.target.value);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, text || "Enter text below:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: text,
    onChange: handleChange,
    placeholder: "Type here..."
  }));
}
root.render(/*#__PURE__*/React.createElement(App, null));

