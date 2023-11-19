import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Card from '../Cards/Card2';

export default function StressLevel() {
  return (
    <View>
        <Card>
            <Text style = {{top:-17, textAlign: 'center', fontSize:18}}>Stres</Text>
            <Image source={require('earmeds/assets/brain.gif')} style={{ width: 75, height: 75, top:-16, left: -21 }} />
            <Text style = {{top:-93, right:-24, textAlign: 'center', fontSize:55, color: 'white'}}>57</Text>
            <Text style = {{top:-105, right:1, textAlign: 'right', fontSize:13, color: '#29AB87'}}>Düşük</Text>
            <Text style = {{top:-100,  textAlign: 'center', fontSize:13, color: 'gray'}}>69, 26dk önce</Text>
        </Card>
        
    </View>
  )
}

const styles = StyleSheet.create({})