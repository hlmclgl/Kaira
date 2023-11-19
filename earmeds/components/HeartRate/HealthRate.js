import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Card from '../Cards/Card';



export default function HealthRate() {
    return (
        <View >
            <Card>
                
                <Text style = {{top:-17, textAlign: 'center', fontSize:18}}>Kalp Atış Hızı</Text>
                <Image source={require('earmeds/assets/life-heart.gif')} style={{ width: 80, height: 80, top:-20, left: -14 }} />
                <Text style = {{top:-100, textAlign: 'center', fontSize:60, color: 'white'}}>88</Text>
                <Text style = {{top:-165, right:8, textAlign: 'right', fontSize:13, color: 'red'}}>BPM</Text>
                <Text style = {{top:-120,  textAlign: 'center', fontSize:13, color: 'gray'}}>86 BPM, 1dk önce</Text>

            </Card>

        </View>
    )
}

const styles = StyleSheet.create({})