import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Card from '../Cards/Card1';

export default function SpO2() {
    return (
        <View>
            <Card>
                <Text style = {{top:-17, textAlign: 'center', fontSize:18}}>Kanda Oksijen</Text>
                <Image source={require('earmeds/assets/05e352aff29e95b54563b55efa653477_w200.gif')} style={{ width: 100, height: 80, top:-21, left: -22 }} />
                <Text style = {{top:-93, right:-24, textAlign: 'center', fontSize:45, color: 'white'}}>%97</Text>
                <Text style = {{top:-103, right:-9, textAlign: 'right', fontSize:13, color: '#86BEDA'}}>SpO2</Text>
                <Text style = {{top:-100,  textAlign: 'center', fontSize:13, color: 'gray'}}>%98, 15dk önce</Text>
            </Card>

        </View>
    )
}

const styles = StyleSheet.create({})