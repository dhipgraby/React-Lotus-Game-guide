import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Hero from '../pages/Hero'
function App(){

    return (
        <BrowserRouter>
        <Route parth="/Hero" component={Hero} />
        </BrowserRouter>
    )
}

export default App