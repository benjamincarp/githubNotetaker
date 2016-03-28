/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    Navigator,
    View
} from 'react-native';

var Main = require('./App/Components/Main');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111'
    },
});

// The Router wrapper
class githubNotetaker extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Navigator
                    initialRoute={{name: 'Github Notetaker', component: Main}}
                    renderScene={(route, navigator) => {
                      if (route.component){
                        var props = {navigator: navigator};

                        if (route.passProps) {
                            for (var prop in route.passProps){
                                props[prop] = route.passProps[prop];
                            }
                        }
                        return React.createElement(route.component, props);
                      }
                    }}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
