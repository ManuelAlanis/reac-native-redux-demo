import React, { Component } from 'react';
import { Text, View, ToolbarAndroid, StatusBar, ProgressBarAndroid } from 'react-native';
import SuperheroesList from './superheroesList';

class TabBarList extends Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <ProgressBarAndroid
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.9}
                />
            </View>
            // <ToolbarAndroid 
            //     barTintColor="white"
            //     subtitleColor="#ff00ff"
            //     unselectedItemTintColor="gray"
            //     title="AwesomeApp"
            //     actions={[{ title: 'Settings', show: 'always' }]}
            // >
            //     {/* <TabBarIOS.Item>
            //         <SuperheroesList />
            //     </TabBarIOS.Item>
            //     <TabBarIOS.Item>
            //         Hello
            //     </TabBarIOS.Item>
            //     <TabBarIOS.Item>
            //         Hello 2
            //     </TabBarIOS.Item> */}
            // </ToolbarAndroid>
        );
    }
}

export default TabBarList;
