import React from 'react'
import ReactDOM from 'react-dom/client'
// without jsx
// const title = React.createElement(
//     'h1',
//     {
//         id: 'title',
//     },
//     'Hello React'
// )

// with jsx
const title = <h1 id="title">Hello React</h1>
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{title}</React.StrictMode>)
