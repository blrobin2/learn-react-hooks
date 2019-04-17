import React from 'react';
import 'bulma/css/bulma.css';

// import Counter from './useState/CounterClass';
import Counter from './Counter';
import Form from './Form';

export default function App(): JSX.Element {
    return (
        <div className="App">
            <Counter />
            <Form />
        </div>
    );
};
