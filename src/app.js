import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './reducers';

const App = () => (
    <Provider store={createStore(Reducers)}>
        <View />
    </Provider>
);

export default App;
