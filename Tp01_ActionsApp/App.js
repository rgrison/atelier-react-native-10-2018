import React from 'react'
import {StyleSheet, View, ScrollView} from 'react-native'
import Entete from './src/Entete'
import Saisie from './src/Saisie'
import BoutonCreer from './src/BoutonCreer'
import ListeActions from './src/action/ListeActions'
import Menu from './src/menu/Menu'

/**
 * Composant d'entrée de l'application.
 */
export default class App extends React.Component {

    // état global de l'application
    // il y aura probalement d'autres informations à stocker
    state = {
        texteSaisie: '',
        actions: []
    }

    /**
     * Méthode invoquée lorsque que la saisie change.
     *
     * @param nouvelleSaisie la valeur saisie
     */
    quandLaSaisieChange(nouvelleSaisie) {
        this.setState({ texteSaisie: nouvelleSaisie });
    }

    /**
     * Méthode invoquée lors du clic sur le bouton `Valider`.
     */
    validerNouvelleAction() {
        console.log('Vous avez cliqué sur Valider !');
        
        let actions = this.state.actions;
        actions.push({titre: this.state.texteSaisie, done: false});
        this.setState({actions: actions, texteSaisie: ""});
    }

    supprimerAction = (titre) => {
        console.log(`suppression de l'action '${titre}'`);
        let actions = this.state.actions.filter(action => action.titre != titre);
        this.setState({actions: actions});
    }

    majEtatAction = (action) => {
        action.done = !action.done;
        let actions = this.state.actions.filter(action => action.titre != action.titre);
        actions.push(action);
        this.setState({actions: actions})
    }
    
    render() {

        return (
            <View style={styles.conteneur}>
                <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
                    <Entete />
                    <Saisie texteSaisie={this.state.texteSaisie} evtTexteModifie={(titre) => this.quandLaSaisieChange(titre)}/>
                    <ListeActions actions={this.state.actions} supprimerFonction={this.supprimerAction} majEtatFonction={this.majEtatAction}/>
                    <BoutonCreer onValider={() => this.validerNouvelleAction()}/>
                </ScrollView>
                <Menu/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conteneur: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        flex: 1,
        paddingTop: 60,
    },
})