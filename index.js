/**
 * Created by SWSD on 2017-02-08.
 */
import React from 'react';
import ReactDOM from 'react-dom';
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
</div>
);
}



