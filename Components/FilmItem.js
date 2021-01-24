import React from 'react';
import {StyleSheet, View, Text, Image } from 'react-native';

class FilmItem extends React.Component {
    render() {
        const film = this.props.film;
        return (
            <View style={styles.main_container}>
                <Image 
                    style={[styles.img_container,{margin: 3}]}
                    source={{uri: "image"}}
                />
                <View style={styles.right_container}>
                    <View style={styles.header_container}>
                        <Text style={{backgroundColor:'orange', flex:5, margin: 3}}>{film.title}</Text>
                        <Text style={{backgroundColor:'orange', flex:1, margin: 3}}>{film.vote_average}</Text>
                    </View>
                    <Text style={[styles.description_container, {backgroundColor:'red',margin: 3}]} numberOfLines={6}>{film.overview}</Text>
                    <Text style={[styles.date_container, {backgroundColor:'purple',margin: 3}]}>Sortie le {film.release_date}</Text>
                </View>
            </View>
            )
        }
    }
const styles = StyleSheet.create({
    main_container: {
        flex:1,
        flexDirection: 'row',
        height: 190,
        margin: 5
    },
    img_container: {
        flex: 1
    },
    right_container: {
        flex:3,
        flexDirection: 'column',
    },
    header_container: {
        flex:3,
        flexDirection: 'row',
    },
    description_container: {
        flex:9,
    },
    date_container: {
        flex:2,
        textAlign: 'right'
    }

})

export default FilmItem