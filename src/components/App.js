import React from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout'

import "./App.sass"

const App = () =>(
    <Layout>
        <section>
            <h1>A simple react and sass template by Md5 Dalton</h1>
            <p>
                I use this template when I want to create a simple react app
            </p>
        </section>
    </Layout>
)

const root = createRoot(document.getElementById('app'))
root.render(<App />)