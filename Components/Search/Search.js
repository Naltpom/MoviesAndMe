import React from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

class Search extends React.Component {
    render() {
        return (
            <View style={[styles.container, {backgroundColor:'orange'}]}>
                <TextInput style={styles.textintput} placeholder="Titre du film"/>
                <Button title="Recherche" onPress={() => {}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        padding: 5
    },
    textintput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000',
        borderWidth: 1,
        paddingLeft: 50,
        backgroundColor: 'red'
    }
});
  
export default Search;