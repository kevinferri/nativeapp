import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View } from 'react-native';

class App extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }

  render() {
    return (
      <View style={{paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={{ backgroundColor: 'rgb(220, 220, 220)', marginBottom: 5, fontSize: 28 }}>{rowData}</Text>}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('nativeapp', () => App);
