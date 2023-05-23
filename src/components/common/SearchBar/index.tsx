import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import useTheme from '../../../hooks/useTheme';
import styles from './styles';

const SearchBar = () => {
  const {Colors} = useTheme();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.searchContainer} activeOpacity={0.8}>
        <IonIcons
          name="search-circle"
          size={24}
          color={Colors.text}
          style={{opacity: Colors.opacity}}
        />
        <Text style={styles.searchText}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity
        // onPress={openFilterModal}
        style={styles.options}
        activeOpacity={0.8}>
        <IonIcons name="options" size={24} color={Colors.background} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
