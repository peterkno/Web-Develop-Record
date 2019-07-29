import React from 'react';
import ReactDOM from 'react-dom';

import Main from 'components/Main.jsx';
import Classmate from 'components/Classmate.jsx';

window.onload = function() {
    // pass .jsx to html
    ReactDOM.render(
        <div>
            <Main />
        </div>,
        document.getElementById('root')
    );
    // ReactDOM.render(
    //     (<div>
    //         <h1>Title</h1>
    //         <p>Paragraph</p>
    //     </div>), // JSX, no quote
    //     document.getElementById('root')
    // );
    // setInterval(tick, 1000);
    // ReactDOM.render(
    //     <div>
    //         <Classmate name='Eva' />
    //         <Classmate name='Peter' />
    //         <Classmate name='Joe' />
    //     </div>,
    //     document.getElementById('root')
    // );
};

function tick() {
    const date = new Date().toLocaleTimeString();

    ReactDOM.render(
        (<div>
            <h1>Hello</h1>
            <p>It's {date}</p>
        </div>), // JSX, no quote
        document.getElementById('root')
    );
}