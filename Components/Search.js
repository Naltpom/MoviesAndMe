import React from 'react';
import { FlatList, Text, StyleSheet, View, Button, TextInput } from 'react-native';
import films from '../Helpers/filmsData';
import FilmItem from './FilmItem';

class Search extends React.Component {
    render() {
        return (
            <View style={[styles.main_container, {flex: 1}]}>
                <TextInput style={styles.textintput} placeholder="Titre du film"/>
                <Button title="Recherche" onPress={() => {}}/>
                <FlatList
                    data={films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex:1,
        paddingTop: 50,
        padding: 5,
    },
    // textintput: {
    //     marginLeft: 5,
    //     marginRight: 5,
    //     height: 50,
    //     borderColor: '#000',
    //     borderWidth: 1,
    //     paddingLeft: 50,
    //     backgroundColor: 'red'
    // }
});
  
export default Search;