import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { MovieType } from '../shared/types/movie.type'

export default function Item({ item, grid }: { item: MovieType; grid: boolean }) {
    return (
        <View style={[styles.item, grid && styles.gridItem]}>
            <Image
                style={styles.image}
                source={{
                    uri: `https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/public/images/${item.poster}`,
                }}
            />
            <View style={styles.itemText}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.episodeNumber}>Episode {item.episode_number}</Text>
                <Text numberOfLines={2}>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#efefef',
        borderRadius: 10,
        marginVertical: 8,
        flexFlow: 'row',
        flex: 1,
    },
    gridItem: {
        marginHorizontal: 8,
    },
    itemText: {
        flex: 1,
        padding: 20,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
    },
    episodeNumber: {
        backgroundColor: '#a6ebe2',
        borderRadius: 25,
        height: 25,
        width: 100,
        fontWeight: '700',
        justifyContent: 'center',
        lineHeight: 0,
        fontSize: 12,
        color: '#22a595',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        flexBasis: '6rem',
        height: '100%',

        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
})
