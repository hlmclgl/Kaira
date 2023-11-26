import { View, Text, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function Features() {
    return (
        <View style={{ height: hp(60) }} className="space-y-4">
            <Text style={{ fontSize: wp(6.5) }} className="font-semibold text-gray-700">Özellikler</Text>
            <View className="bg-emerald-200 p-4 rounded-xl space-y-2 mt-6">
                <View className="flex-row items-center space-x-1">
                    <Image source={require('earmeds/assets/dalleIcon.png')} style={{ height: hp(4), width: hp(4) }} />
                    <Text style={{ fontSize: wp(4.8) }} className="font-semibold text-gray-700">DALL-E</Text>
                </View>
                <Text style={{ fontSize: wp(3.8) }} className="text-gray-700 font-medium">
                    DALL-E, metinsel açıklamalardan yaratıcı ve çeşitli görüntüler üretebilir, görsel yaratıcılığın sınırlarını genişletir.
                </Text>
            </View>
            <View className="bg-purple-200 p-4 rounded-xl space-y-2">
                <View className="flex-row items-center space-x-1">
                    <Image source={require('earmeds/assets/arise.png')} style={{ height: hp(4), width: hp(4) }} />
                    <Text style={{ fontSize: wp(4.8) }} className="font-semibold text-gray-700">ARISE AI & KAİRA E-ink</Text>
                </View>
                <Text style={{ fontSize: wp(3.8) }} className="text-gray-700 font-medium">
                    Arise AI size anlık ve doğru yanıtlar sunabilir, geniş bir konu yelpazesinde yaratıcı fikirler konusunda size yardımcı olabilir. 
                    KAİRA E-ink ile entegre olarak, tek komutunuz ile akıllı küpenizi özelleştirme olanağı sunuyor.
                </Text>
            </View>
            <View className="bg-cyan-200 p-4 rounded-xl space-y-2">
                <View className="flex-row items-center space-x-1">
                    <Image source={require('earmeds/assets/smartaiIcon.png')} style={{ height: hp(4), width: hp(4) }} />
                    <Text style={{ fontSize: wp(4.8) }} className="font-semibold text-gray-700">SMART AI</Text>
                </View>
                <Text style={{ fontSize: wp(3.8) }} className="text-gray-700 font-medium">
                    ChatGPT ve DALL-E'nin yeteneklerini birleştiren güçlü bir ses asistanı, size her iki dünyanın en iyisini sunuyor.
                </Text>
            </View>
        </View>
    )
}