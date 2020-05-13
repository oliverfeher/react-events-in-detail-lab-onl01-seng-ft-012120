// Code CoordinatesButton Component Here
import React from "react";

class CoordinatesButton extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    handleOnClick = (event) =>
    {
        let x = event.clientX;
        let y = event.clientY;
        this.props.onReceiveCoordinates([x,y])
    }

    render()
    {
        return (
            <button onClick={this.handleOnClick} />
        )
    }
}

export default CoordinatesButton;