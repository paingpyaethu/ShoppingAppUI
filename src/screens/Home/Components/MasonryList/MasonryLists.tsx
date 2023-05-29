/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import MasonryList from 'reanimated-masonry-list';

const MESONARY_LIST_DATA = [
  {
    imageUrl:
      'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
    title: 'PUMA Everyday Hussle',
    price: 160,
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    title: 'PUMA Everyday Hussle',
    price: 180,
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1556217477-d325251ece38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80',
    title: 'PUMA Everyday Hussle',
    price: 200,
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    title: 'PUMA Everyday Hussle',
    price: 180,
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1627225924765-552d49cf47ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    title: 'PUMA Everyday Hussle',
    price: 120,
  },
];

const MasonryLists = () => {
  const renderItem = ({item, i}: any) => (
    <View style={{padding: 6}}>
      <View
        style={{
          aspectRatio: i === 0 ? 1 : 2 / 3,
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 24,
        }}>
        <Image
          source={{
            uri: item.imageUrl,
          }}
          resizeMode="cover"
          style={StyleSheet.absoluteFill}
        />
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              padding: 12,
            },
          ]}>
          <View style={{flexDirection: 'row', gap: 8, padding: 4}}>
            <Text
              style={{
                flex: 1,
                fontSize: 16,
                fontWeight: '600',
                color: '#fff',
                textShadowColor: 'rgba(0,0,0,0.2)',
                textShadowOffset: {
                  height: 1,
                  width: 0,
                },
                textShadowRadius: 4,
              }}>
              {item.title}
            </Text>
          </View>
          <View style={{flex: 1}} />
        </View>
      </View>
    </View>
  );
  return (
    <View>
      <MasonryList
        data={MESONARY_LIST_DATA}
        numColumns={2}
        contentContainerStyle={{paddingHorizontal: 12}}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default MasonryLists;
