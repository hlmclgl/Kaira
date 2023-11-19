import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Card3 from '../Cards/Card3'

export default function BloodSugar() {
  return (
    <View>
        <Card3>
            <Text style = {{top:-17, textAlign: 'center', fontSize:18}}>Kan Şekeri</Text>
            <Image source={require('earmeds/assets/NTHO.gif')} style={{ width: 70, height: 80, top:-21, left: -22 }} />
            <Text style = {{top:-92, right:-16, textAlign: 'center', fontSize:55, color: 'white'}}>4.3</Text>
            <Text style = {{top:-167, right:-15, textAlign: 'right', fontSize:13, color: '#CC5500'}}>mmol/L</Text>
            <Text style = {{top:-105,  textAlign: 'center', fontSize:13, color: 'gray'}}>4.9, 31dk önce</Text>
        </Card3>
      
    </View>
  )
}

const styles = StyleSheet.create({})