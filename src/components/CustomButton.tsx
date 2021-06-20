import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'

import { CustomButtonProps } from '../types/props'

const classes = StyleSheet.create({
  container: {
    borderRadius: 6,
    height      : 48,
    width       : '84%'
  }
})

const CustomButton = ({
  style: {
    color,
    marginTop = 0,
    titleColor = '#FFF',
    titleSize
  },
  icon,
  hasIconLeft = false,
  hasIconRight = false,
  onPress = () => {},
  title,
  type = 'solid'
}: CustomButtonProps) => {
  return (
    <View style={[classes.container, { marginTop }]}>
      {hasIconLeft ? (
        <Button
          buttonStyle={{
            backgroundColor: color,
            height         : '100%'
          }}
          icon={{
            color: icon?.color,
            name : icon?.name,
            size : icon?.size,
            type : icon?.type
          }}
          onPress={onPress}
          title={title}
          titleStyle={{
            color     : titleColor,
            fontSize  : titleSize,
            fontFamily: 'Padauk_700Bold',
            marginLeft: 8,
            marginTop : 4
          }}
          type={type}
        />
      ) : hasIconRight ? (
        <Button
          buttonStyle={{
            backgroundColor: color,
            height         : '100%'
          }}
          icon={{
            color: icon?.color,
            name : icon?.name,
            size : icon?.size,
            type : icon?.type
          }}
          onPress={onPress}
          title={title}
          titleStyle={{
            color      : titleColor,
            fontSize   : titleSize,
            fontFamily : 'Padauk_700Bold',
            marginRight: 8,
            marginTop  : 4
          }}
          type={type}
          iconRight
        />
      ) : (
        <Button
          buttonStyle={{
            backgroundColor: color,
            height         : '100%'
          }}
          onPress={onPress}
          title={title}
          titleStyle={{
            color     : titleColor,
            fontSize  : titleSize,
            fontFamily: 'Padauk_700Bold'
          }}
          type={type}
          iconRight
        />
      )}
    </View>
  )
}

export default CustomButton
