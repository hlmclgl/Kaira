import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function AriseAI() {

  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 flex justify-around bg-black">
      {/* title */}
      <View className="space-y-2">
        <Text style={{ fontSize: wp(10) }} className="text-center font-bold text-gray-700">
          Arise
        </Text>
        <Text style={{ fontSize: wp(4) }} className="text-center tracking-wider font-semibold text-gray-600">
          Gelecek burada, yapay zeka ile güçlendirildi.
        </Text>
      </View>

      {/* assistant image */}
      <View className="flex-row justify-center">
        <Image
          source={require('earmeds/assets/bannerRobotHandNews.gif')}
          style={{ height: wp(75), width: wp(75) }}
        />
      </View>

      {/* start button */}
      <TouchableOpacity onPress={() => navigation.navigate('Asistant')} className="bg-emerald-600 mx-5 p-3 rounded-2xl mb-16">
        <Text style={{ fontSize: wp(6) }} className="text-center font-bold text-white">
          Hadi Başlayalım
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}