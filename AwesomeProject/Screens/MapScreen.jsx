import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../Components/Map'

const MapScreen = () => {
  return (
    <View>
      <Text>MapScreen</Text>

      <View style={tw`h-1/2`}>
        <Map/>
      </View>

      <View style={tw`h-1/2`}></View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})