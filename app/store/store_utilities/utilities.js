import AsyncStorage from '@react-native-async-storage/async-storage';

const clearData = async (data) => {
    try {
        await AsyncStorage.removeItem(data);
    } catch (error) {
        console.log('can not clear data:', data, error);
    }
};

export default clearData;
