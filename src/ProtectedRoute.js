import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {UserContext} from './UserContext'

export const ProtectedRoute = ({component: Component, ...rest}) => {
    const{login, setlogin} = useContext(UserContext)

    return (
        <div>
            <Route
            {...rest}
            render={props => {
                if(login === true){
                    return <Component {...props} />;
                }else {
                    return <Redirect to={
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }
                    } />
                }
            }}
            />
        </div>
    )
}
