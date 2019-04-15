import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './reducers';
import SuperheroesList from './superheroesList';

const App = () => (
    <Provider store={createStore(Reducers)}>
        <View>
            <SuperheroesList />
        </View>
    </Provider>
);

export default App;
