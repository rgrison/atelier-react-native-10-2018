import React from 'react'
import { View, StyleSheet } from 'react-native'
import OptionMenu from './OptionMenu'

/**
 * Composant Menu.
 */
const Menu = ({filtrer, montrerToutesActions}) => (
    <View style={styles.menu}>
        <OptionMenu label="Toutes"    filtrer={() => montrerToutesActions()} />
        <OptionMenu label="Actives"   filtrer={() => filtrer(false)}         />
        <OptionMenu label="Terminées" filtrer={() => filtrer(true)}          />
    </View>
)

const styles = StyleSheet.create({
    menu: {
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dddddd'
    }
})
export default Menu