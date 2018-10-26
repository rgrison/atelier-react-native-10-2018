import React from 'react'
import {View, Text} from 'react-native'
import UneAction from './UneAction'


const ListeActions = ({actions, supprimerFonction, majEtatFonction}) => {
    console.log(`actions dans la liste : ${JSON.stringify(actions)}`);
    return (
        <View>
            { actions.map(action => {
                console.log(`action courante: ${JSON.stringify(action)}`);
                return (<UneAction action={action} supprimerAction={supprimerFonction} majEtat={majEtatFonction} />)
            }) }
        </View>
    )
}

export default ListeActions