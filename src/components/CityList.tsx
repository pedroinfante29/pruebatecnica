import React from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Tipos de las propiedades esperadas
interface City {
    id: number;
    name: string;
}

interface CityListProps {
    cities: City[]; // Lista de ciudades a mostrar
    onSelectCity: (city: City) => void; // Función para manejar la selección de una ciudad
}

// Componente CityList
const CityList: React.FC<CityListProps> = ({ cities, onSelectCity }) => {
    return (
        <FlatList
            data={cities}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => onSelectCity(item)}>
                    <Text style={styles.cityItem}>{item.name}</Text>
                </TouchableOpacity>
            )}
        />
    );
};

// Estilos específicos para CityList
const styles = StyleSheet.create({
    cityItem: {
        fontSize: 18,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default CityList;
