import React, { useEffect, useState, Component } from 'react';
import { ActivityIndicator, Button, FlatList, Text, View } from 'react-native';


// function DiscoveryList() {
//     return (
//         <View>
//             <Text>My list</Text>
//         </View>
//         );
//     }

// export default DiscoveryList;

export default class DiscoveryList extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        data: [],
        isLoading: true
      };
    }
  
    async getMovies() {
      try {
        const response = await fetch('https://api.dataforsyningen.dk/postnumre/7400');
        const json = await response.json();
        this.setState({ data: json.kommuner });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  
    componentDidMount() {
      this.getMovies();
    }
  
    render() {
      const { data, isLoading } = this.state;
  
      return (
        <View style={{ flex: 1, padding: 24 }}>
          {isLoading ? <ActivityIndicator/> : (
            <FlatList
              data={data}
              keyExtractor={({ href }, index) => href}
              renderItem={({ item }) => (
                <Text>{item.kode}, {item.navn}</Text>
              )}
            />
          )}
        </View>
      );
    }
};