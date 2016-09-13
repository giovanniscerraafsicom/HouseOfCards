import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {addDeck, showAddDeck, hideAddDeck} from './actions';
import * as reducers from './reducers';
import App from './components/App';
import Sidebar from './components/Sidebar';

const store = createStore(combineReducers(reducers));

function run() {

    let state = store.getState();
    console.log(state);
    ReactDOM.render(<App>
        <Sidebar
            decks={state.decks}
            addingDeck={state.addingDeck}
            addDeck={name => store.dispatch(addDeck(name)) }
            showAddDeck={name => store.dispatch(showAddDeck()) }
            hideAddDeck={name => store.dispatch(hideAddDeck()) }
            />
    </App>, document.getElementById('root'));
}

// store.subscribe(() => {
//     console.log(store.getState());
// });

store.subscribe(run);

run();
