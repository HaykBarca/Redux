import ReactDOM from 'react-dom';
import React from 'react';

import './style.css';

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color} >
            {props.children}
        </div>
    );
}

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title" >Welcome</h1>
            <p className="Dialog-message" >Heyy</p>
        </FancyBorder>
    );
}

ReactDOM.render(<WelcomeDialog />, document.getElementById('root'));
