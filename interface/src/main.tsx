import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Context, { defaultContext } from './lib/context.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Context.Provider
            value={ defaultContext }
        >
            <App />
        </Context.Provider>
    </React.StrictMode>,
)
