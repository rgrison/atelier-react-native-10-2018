import React from 'react'
import {View, Text} from 'react-native'
import UneAction from './UneAction'


const ListeActions = ({actions, supprimerFonction}) => {

    return (
        <View>
            { actions.map(titreAction => <UneAction titre={titreAction} supprimerAction={supprimerFonction} />) }
        </View>
    )
}

export default ListeActions