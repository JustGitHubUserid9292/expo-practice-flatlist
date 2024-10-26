import React, { useState } from 'react';
import { FlatList, View, RefreshControl, StyleSheet } from 'react-native';
import LanguageListItem from './components/LanguageListItem';
import jsLogo from './assets/js.png';
import pythonLogo from './assets/python.png'

const langs = [
  { id: '1', lang: 'JavaScript', logo: jsLogo, experience: '3 года' },
  { id: '2', lang: 'Python', logo: pythonLogo, experience: '1 год' }
];

const App = () => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={langs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <LanguageListItem lang={item.lang} logo={item.logo} experience={item.experience} />
                )}
                horizontal 
                contentContainerStyle={styles.list}
                showsHorizontalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    list: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
});

export default App;

