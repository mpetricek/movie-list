import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
export type Props = {
    setGrid: (value: boolean) => void
    grid: boolean
}
export default function Header({ setGrid, grid }: Props) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Movies list</Text>
            <View style={styles.switches}>
                <TouchableOpacity
                    style={[styles.styleSwitch, { marginRight: 5 }, !grid && styles.styleSwitchActive]}
                    onPress={() => setGrid(false)}
                >
                    <Text style={[styles.styleSwitchText, !grid && styles.styleSwitchTextActive]}>List</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.styleSwitch, grid && styles.styleSwitchActive]}
                    onPress={() => setGrid(true)}
                >
                    <Text style={[styles.styleSwitchText, grid && styles.styleSwitchTextActive]}>Grid</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexFlow: 'row',
        borderBottomWidth: 2,
        borderColor: '#eeeeee',
        marginVertical: 10,
        paddingBottom: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    switches: {
        flexFlow: 'row',
        alignItems: 'center',
    },
    styleSwitch: {
        borderColor: 'grey',
        color: 'grey',
        borderWidth: 1,
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    styleSwitchActive: {
        backgroundColor: 'grey',
    },
    styleSwitchText: {
        color: 'grey',
        fontWeight: '700',
    },
    styleSwitchTextActive: {
        color: 'white',
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
    },
})
