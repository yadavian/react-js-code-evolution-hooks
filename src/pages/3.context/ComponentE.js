import React from 'react'
import { LastNameContext, UserContext } from '../../App'

const ComponentE = () => {
    return (
        <>

            <UserContext.Consumer>
                {
                    firstname => {
                        return <LastNameContext.Consumer>
                            {
                                lastname => {
                                    return <h1>Old = {firstname} {lastname}</h1>
                                }
                            }
                        </LastNameContext.Consumer>
                    }
                }
            </UserContext.Consumer>

        </>
    )
}

export default ComponentE