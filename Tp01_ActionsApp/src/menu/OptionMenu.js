import React from 'react'
import {Text, TouchableHighlight, StyleSheet} from 'react-native'

/**
 * Composant représentant une option de menu.
 *
 *
 *
 */
const OptionMenu = ({label, filtrer}) => (
    <TouchableHighlight
        underlayColor='#efefef'
        style={[
            styles.item,styles.selected,
            styles.border,
            styles.selected]}
        onPress={filtrer}
            >
        <Text style={[styles.itemText, styles.bold]}>
            {label}
        </Text>

    </TouchableHighlight>
)


const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    border: {
        borderLeftWidth: 1,
        borderLeftColor: '#dddddd'
    },
    itemText: {
        color: '#777777',
        fontSize: 16
    },
    selected: {
        backgroundColor: '#ffffff'
    },
    bold: {
        fontWeight: 'bold'
    }
})
export default OptionMenu