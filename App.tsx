import React, { useEffect } from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, useWindowDimensions } from 'react-native'
import Header from './components/Header'
import Item from './components/Item'
export type Movies = {
    title: string
    episode_number: string
    description: string
    poster: string
}[]

export default function App() {
    const [movies, setMovies] = useState<Movies | []>([])
    const [grid, setGrid] = useState(false)
    const { width } = useWindowDimensions()
    useEffect(() => {
        const url = 'https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/movies.json'

        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const json = await response.json()
                json && setMovies(json.movies)
            } catch (error) {
                console.log('error', error)
            }
        }

        fetchData()
    }, [])

    const onSortPress = () => {
        const sorted = [...movies].sort((a, b) => {
            return a.episode_number ? -1 : b.episode_number ? 1 : 0
        })

        setMovies(sorted)
    }

    return (
        <View style={styles.container}>
            <Header setGrid={setGrid} grid={grid} />
            <FlatList
                key={`${grid}-${width}`}
                data={movies}
                extraData={movies}
                renderItem={({ item }) => <Item key={item.title} grid={grid} item={item} />}
                numColumns={grid && width >= 768 ? 2 : 1}
                style={grid && { marginHorizontal: -8 }}
            />
            <TouchableOpacity style={styles.sortButton} onPress={onSortPress}>
                <Text style={{ color: 'white', fontWeight: '700' }}>Sort list</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        maxWidth: 800,
        alignSelf: 'center',
        flexShrink: 0,
        flexGrow: 1,
        marginHorizontal: 16,
    },

    sortButton: {
        borderRadius: 25,
        backgroundColor: '#00b3a3',
        marginVertical: 10,
        width: 200,
        paddingVertical: 10,
        textAlign: 'center',
        alignSelf: 'center',
    },
})
