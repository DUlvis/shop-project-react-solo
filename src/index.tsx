import React from 'react'
import ReactDOM from 'react-dom/client'
import { Title } from './Title'

type ContentProps = {
    p1: string
    p2: string
}

const Content = (props: ContentProps) => {
    return (
        <React.Fragment>
            <p>{props.p1}</p>
            <p>{props.p2}</p>
        </React.Fragment>
    )
}
const App = () => {
    return (
        <>
            <Title title="JS" />
            <Title title="React" />
            <Title title={10} />
            <Content p1="lol" p2="bob" />
            <Content p1="qwe" p2="asd" />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
