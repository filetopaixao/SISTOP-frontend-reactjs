import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//pages
import Portal from './pages/Portal'

const Routes = () =>{
    return(
        <BrowserRouter> {/*  vai em volta de tudo */}
            <Switch> {/*  garantir que uma rota carregue por vez */}
                <Route path="/" excact component={Portal} /> {/* Toda pagina contem / exact garante que tem q ser igual e n contem / */}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes