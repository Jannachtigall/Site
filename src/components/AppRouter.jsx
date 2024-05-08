import React, { useContext, useEffect } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { MAIN_ROUTE } from '../utils/consts'
import { Context } from '../index'
import { api } from '../api/api'

const AppRouter = () => {
    const {user} = useContext(Context)
    const {item} = useContext(Context)

    useEffect(() => {
        api.getProducts()
            .then(({ items }) => {
                const itemsWithCount = items.map(item => ({ ...item, count: 1 }));
                item.setItems(itemsWithCount);
            })
            .catch(err => console.log(err));
        api.getType()
            .then(({types}) => {
                item.setTypes(types)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component />} exact/>
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component />} exact/>
            )}   
            {!user.isAuth && <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />}
        </Routes>
    )
}

export default AppRouter;
