import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'

import { CourseCardProps } from '../types/props'
import { FONTS, COLORS } from '../utils'

const classes = StyleSheet.create({
  container: {
    alignItems    : 'center',
    borderRadius  : 12,
    flexDirection : 'row',
    height        : 72,
    justifyContent: 'space-between',
    paddingEnd    : 24,
    paddingStart  : 24
  },
  course: {
    alignItems   : 'center',
    flexDirection: 'row'
  },
  text: {
    color     : COLORS.WHITE,
    fontFamily: FONTS.SECONDARY.BOLD,
    fontSize  : 16,
    marginLeft: 16,
    textTransform: 'capitalize'
  }
})

const CourseCard: React.FC<CourseCardProps> = props => {
  const {
    course,
    icon,
    iconType,
    onPress,
    style: { color, marginBottom }
  } = props

  return (
    <TouchableOpacity
      activeOpacity={0.01}
      onPress={onPress}
      style={[
        classes.container,
        {
          backgroundColor: color,
          marginBottom
        }
      ]}
    >
      <View style={classes.course}>
        <Icon color={COLORS.WHITE} size={25} name={icon} type={iconType} />
        <Text style={classes.text}>{course}</Text>
      </View>
      <Icon
        color={COLORS.WHITE}
        size={25}
        name='arrow-forward'
        type='material'
      />
    </TouchableOpacity>
  )
}

export default CourseCard
