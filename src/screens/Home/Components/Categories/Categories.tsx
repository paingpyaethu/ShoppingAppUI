/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import useTheme from '../../../../hooks/useTheme';
import {flatlistKeyExtractor} from '../../../../utils';

const CATEGORIES = [
  'Clothing',
  'Shoes',
  'Accessories',
  'Accessories 2',
  'Accessories 3',
  'Accessories 4',
];

const Categories = () => {
  const {Colors} = useTheme();
  const [categoryIndex, setCategoryIndex] = useState(0);

  const renderItem = ({item, index}: {item: string; index: number}) => {
    const isSelected = categoryIndex === index;
    return (
      <TouchableOpacity
        onPress={() => setCategoryIndex(index)}
        style={{
          backgroundColor: isSelected ? Colors.primary : Colors.card,
          paddingHorizontal: 20,
          paddingVertical: 12,
          borderRadius: 100,
          borderWidth: isSelected ? 0 : 1,
          borderColor: Colors.border,
        }}>
        <Text
          style={{
            color: isSelected ? Colors.background : Colors.text,
            fontWeight: '600',
            fontSize: 14,
            opacity: isSelected ? 1 : 0.5,
          }}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={flatlistKeyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          gap: 12,
        }}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Categories;
