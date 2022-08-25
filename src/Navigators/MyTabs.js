import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useTheme } from '@/Hooks';

function MyTabBar({ state, descriptors, navigation }) {
  const { Images } = useTheme()
  return (
    <View style={{
      flexDirection: 'row',
      backgroundColor: '#1B1B1B',
      paddingRight: 10,
      paddingLeft: 10,
      paddingTop: 4,
      paddingBottom: 4,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              height: 59,
              width: 59,
              borderRadius: 4,
              backgroundColor: isFocused ? "#858585" : "#1B1B1B"
            }}
            key={index}
          >
            <Image source={Images[route.name]} resizeMode='contain' />
            <Text 
            style={{ 
              color: isFocused ? '#fff' : '#fff',
              fontSize: 14,
              marginTop: 5  
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MyTabBar