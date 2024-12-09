// Importar el tipo de datos de las ciudades
import { City } from './types';

// Función para calcular la distancia entre dos puntos geográficos usando la fórmula Haversine
const haversineDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const toRad = (value: number) => (value * Math.PI) / 180;
    const R = 6371; // Radio de la Tierra en kilómetros
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distancia en kilómetros
};

// Función para obtener las ciudades más cercanas a una ciudad seleccionada
export const getNearbyCities = (selectedCity: City, allCities: City[]): City[] => {
    // Filtrar la ciudad seleccionada del resto
    const otherCities = allCities.filter((city) => city.id !== selectedCity.id);

    // Ordenar las ciudades por distancia a la ciudad seleccionada
    const sortedCities = otherCities.sort((a, b) => {
        const distanceA = haversineDistance(
            selectedCity.latitude,
            selectedCity.longitude,
            a.latitude,
            a.longitude
        );
        const distanceB = haversineDistance(
            selectedCity.latitude,
            selectedCity.longitude,
            b.latitude,
            b.longitude
        );
        return distanceA - distanceB;
    });

    // Retornar las 3 ciudades más cercanas
    return sortedCities.slice(0, 3);
};
