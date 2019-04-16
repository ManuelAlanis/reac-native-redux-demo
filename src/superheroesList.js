import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class SuperheroesList extends Component {
    getSuperheroes() {
        const { superheroes } = this.props;

        console.log('superheroes', superheroes);
        const superheroesData = superheroes.map((heroes, key) => 
            <Text key={key}>{heroes.superhero}</Text>);
        return superheroesData;
    }

    render() {
        return (
            <View>
                {this.getSuperheroes()}
            </View>
        );
    }
}

const mapStateToProps = state => ({ superheroes: state.superheroes });

export default connect(mapStateToProps)(SuperheroesList);
