import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import cities from '../data/cities.json'; // Importa el archivo JSON de ciudades

// Componente para gestionar la búsqueda de ciudades
const CitySearch = () => {
    const [search, setSearch] = useState(''); // Estado para la búsqueda
    const [selectedCity, setSelectedCity] = useState(null); // Estado para la ciudad seleccionada
    const [nearbyCities, setNearbyCities] = useState([]); // Estado para las ciudades cercanas

    // Función para actualizar la búsqueda mientras el usuario escribe
    const handleSearch = (text: string) => {
        setSearch(text);
    };

    // Función para seleccionar una ciudad y calcular las ciudades cercanas
    const handleSelectCity = (city: any) => {
        setSelectedCity(city);
        // Filtrar las ciudades más cercanas (aquí solo es un ejemplo estático)
        const filteredCities = cities.filter((c) => c.name !== city.name).slice(0, 3);
        setNearbyCities(filteredCities);
    };

    // Filtro para mostrar las ciudades que coinciden con la búsqueda
    const filteredCities = cities.filter((city) =>
        city.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <View style={styles.container}>
            {/* Campo de entrada para buscar ciudades */}
            <TextInput
                style={styles.input}
                placeholder="Buscar una ciudad"
                value={search}
                onChangeText={handleSearch}
            />
            {/* Lista de ciudades basadas en la búsqueda */}
            <FlatList
                data={filteredCities}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleSelectCity(item)}>
                        <Text style={styles.cityItem}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
            {/* Muestra las ciudades cercanas si una ciudad ha sido seleccionada */}
            {selectedCity && (
                <View style={styles.nearbyContainer}>
                    <Text style={styles.selectedCityText}>
                        Ciudades cercanas a {selectedCity.name}:
                    </Text>
                    {nearbyCities.map((city, index) => (
                        <Text key={index} style={styles.cityItem}>
                            {city.name}
                        </Text>
                    ))}
                </View>
            )}
        </View>
    );
};

// Estilos del componente
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    cityItem: {
        fontSize: 18,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    nearbyContainer: {
        marginTop: 20,
    },
    selectedCityText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default CitySearch;
