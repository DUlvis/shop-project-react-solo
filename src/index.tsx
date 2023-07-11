import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
    return (
        <div>
            <h1>Hello World</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                culpa minus reprehenderit non. Doloribus, molestiae nam? Ab
                quaerat nam aut quis placeat quibusdam aperiam, minus asperiores
                natus officia doloremque sed!
            </p>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
