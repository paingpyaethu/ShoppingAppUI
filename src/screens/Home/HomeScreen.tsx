import React from 'react';
import {ScrollView, View, Image, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import IonIcons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import useTheme from '../../hooks/useTheme';
import {SearchBar} from '../../components';
import Collections from './Components/Collections/Collections';
import {moderateScale} from 'react-native-size-matters';
import Categories from './Components/Categories/Categories';
import MasonryLists from './Components/MasonryList/MasonryLists';

const AVATAR_URL =
  'https://images.unsplash.com/photo-1684166220037-d94a15745f9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80';
const HomeScreen = () => {
  const {Colors, Layout} = useTheme();
  return (
    <ScrollView>
      <SafeAreaView
        style={{paddingVertical: moderateScale(24), gap: moderateScale(24)}}>
        <View style={styles.container}>
          <Image source={{uri: AVATAR_URL}} style={styles.avatar} />
          <View style={{flex: Layout.fill}}>
            <Text style={[styles.text, {color: Colors.text}]}>Hi! Oere 👋</Text>
            <Text style={{color: Colors.text, opacity: Colors.opacity}}>
              Discover fashion that suit your style
            </Text>
            <Text>aaaa</Text>
            <Text>bbbbb</Text>
          </View>
          <TouchableOpacity style={[styles.noti, {borderColor: Colors.border}]}>
            <IonIcons name="notifications" size={24} />
          </TouchableOpacity>
        </View>

        {/* Search Bar Section */}
        <SearchBar />

        {/* Grid Collection View */}
        <Collections />

        <Categories />

        <MasonryLists />
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
