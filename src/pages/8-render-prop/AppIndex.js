import React from 'react'
import ClickCounter from './ClickCounter'
import CommonCounterShare from './CommonCounterShare'
import HoverCounter from './HoverCounter'
import User from './User'

const AppIndex = () => {

    // do component ke beech me common logic share karne ke use karte hai using function passing as props which receives parameter jo decide karta h ki konsa logic run karna h.

    return (
        <div>
            {/* <ClickCounter />
            <HoverCounter /> */}

            <CommonCounterShare render={(count, inc_count) => <ClickCounter count={count} inc_count={inc_count} />} />
            <CommonCounterShare render={(count, inc_count) => <HoverCounter count={count} inc_count={inc_count} />} />
            <User render={(isloggedin) => isloggedin ? 'loggedin' : 'guest'} />
        </div>
    )
}

export default AppIndex