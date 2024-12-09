import React from 'react';
import { StyleSheet, View } from 'react-native';
import CitySearch from './src/components/CitySearch';

// Componente principal de la aplicación
const App = () => {
    return (
        <View style={styles.container}>
            {/* Incluimos el componente CitySearch, que gestiona la búsqueda de ciudades */}
            <CitySearch />
        </View>
    );
};

// Estilos para el contenedor principal
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
});

export default App;
