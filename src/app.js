//State example:
//-----------------------------
// {
//     cards: [{ deckId: 123, data: { front:'front text', back: 'back text'} }],
//     decks: [{id: 123}]
// };
//
//Store dispatching example:
//-----------------------------
// store.dispatch({
//     type: 'ADD_CARD',
//     data: {
//         front: 'front text',
//         back: 'back text'
//     }
// });

const cardsReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            let newCard = Object.assign({}, action.data, {
                score: 1,
                id: +new Date
            });

            return state.concat([newCard]);

        default:
            return state || [];
    }
};

const store = Redux.createStore(Redux.combineReducers({
    cards: cardsReducer
}));

store.subscribe(() => {
    console.log(store.getState());
});

const App = (props) => {
    return (
        <div className='app'>
            {props.children}
        </div>
    );
};

ReactDOM.render(<App><h1>House of Cards App</h1></App>, document.getElementById('root'));