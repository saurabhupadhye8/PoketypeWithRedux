import React from 'react';

const Rainbow = (WrappedComponent) => {

    const colours = [ 'red', 'yellow', 'blue', 'green', 'pink', 'orange' ];
    const randomColours = colours[Math.floor(Math.random() * 5)];
    const randomClass = randomColours + '-text';

    return (props) => {
        return(
            <div className = { randomClass }>
                <WrappedComponent { ...props }/>
            </div>
        )
    }
}

export default Rainbow;