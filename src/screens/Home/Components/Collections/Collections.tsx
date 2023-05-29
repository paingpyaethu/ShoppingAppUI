/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles';
import {moderateScale} from 'react-native-size-matters';
import useTheme from '../../../../hooks/useTheme';
import Cards from './Cards';

const Collections = () => {
  const {Fonts, Colors} = useTheme();
  return (
    <View style={{paddingHorizontal: moderateScale(24)}}>
      {/* Title Bar */}
      <View style={styles.container}>
        <Text style={{fontSize: moderateScale(20), fontWeight: Fonts.bold}}>
          New Collections
        </Text>
        <TouchableOpacity>
          <Text style={{color: Colors.primary, fontSize: moderateScale(15)}}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', height: 200, gap: 12}}>
        <Cards
          price={130}
          imageUrl="https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        />
        <View style={{flex: 1, gap: 12}}>
          <Cards
            price={120}
            imageUrl="https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          />
          <Cards
            price={170}
            imageUrl="https://images.unsplash.com/photo-1485218126466-34e6392ec754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80"
          />
        </View>
      </View>
    </View>
  );
};

export default Collections;
