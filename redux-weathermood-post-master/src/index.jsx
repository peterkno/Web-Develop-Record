import React from 'react';
import ReactDOM from 'react-dom';

import Main from 'components/Main.jsx';

import 'bootstrap/dist/css/bootstrap.css';

import {createStore, combineReducers} from 'redux';
import {setWeather, weather} from 'states/playground';
import {setCode, setTemp, code, temp} from 'states/playground2';

window.onload = function() {
    ReactDOM.render(
        <Main />,
        document.getElementById('root')
    );

    const store = createStore(weather);

    store.subscribe(() => {
        console.log(store.getState());
    })

    store.dispatch(setWeather(800,21));
    store.dispatch(setWeather(800,23));

    const store2 = createStore(combineReducers({
        code,
        temp
    }));

    store2.subscribe(() => {
        console.log(store2.getState());
    })

    store2.dispatch(setCode(700));
    store2.dispatch(setTemp(13));
};
