import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
    Alert,
} from 'react-native'
import React, { useState, useRef, useEffect } from 'react';
import Voice from '@react-native-voice/voice';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Features from '../components/features';
import { dummyMessages } from '../constants';



export default function Asistant() {

    const [messages, setMessages] = useState(dummyMessages);
    const [result, setResult] = useState('');
    const [recording, setRecording] = useState(false);
    const [loading, setLoading] = useState(false);
    const [speaking, setSpeaking] = useState(true);
    const scrollViewRef = useRef();

    const speechStartHandler = e => {
        console.log('speech start event', e);
    };
    const speechEndHandler = e => {
        setRecording(false);
        console.log('speech stop event', e);
    };
    const speechResultsHandler = e => {
        console.log('voice event: ', e);
        //const text = e.value[0];
        //setResult(text);
    };

    const speechErrorHandler = e => {
        console.log('speech error: ', e);
    }

    const startRecording = async () => {
        setRecording(true);
        //Tts.stop();
        try {
            await Voice.start('en-GB'); // en-US

        } catch (error) {
            console.log('error:', error);
        }
    };
    const stopRecording = async () => {

        try {
            await Voice.stop();
            setRecording(false);
            //fetchResponse();
        } catch (error) {
            console.log('error', error);
        }
    };

    const clear = () => {
        //Tts.stop();
        //setSpeaking(false);
        //setLoading(false);
        setMessages([]);
    };

    const stopSpeaking = () => {
        //Tts.stop();
        setSpeaking(false);
    };

    // useEffect(() => {
    //     Voice.onSpeechStart = speechStartHandler;
    //     Voice.onSpeechEnd = speechEndHandler;
    //     Voice.onSpeechResults = speechResultsHandler;
    //     Voice.onSpeechError = speechErrorHandler;

    //     return () => {
    //         // destroy the voice instance after component unmounts
    //         Voice.destroy().then(Voice.removeAllListeners);
    //     }
    // }, []);

    return (
        <View className="flex-1 bg-white">
            <SafeAreaView className="flex-1 flex mx-5">
                <View className="flex-row justify-center mt-0">
                    <Image source={require('earmeds/assets/yy3.gif')} style={{ height: hp(15), width: hp(15) }}></Image>
                </View>

                {
                    messages.length > 0 ? (
                        <View className="space-y-2 flex-1">
                            <Text style={{ fontSize: wp(5) }} className="text-gray-700 font-semibold ml-1">
                                Asistan
                            </Text>
                            <View
                                style={{ height: hp(62) }}
                                className="bg-neutral-200 rounded-3xl p-4"
                            >
                                <ScrollView
                                    bounces={false}
                                    className="space-y-4"
                                    showsVerticalScrollIndicator={false}
                                >
                                    {
                                        messages.map((message, index) => {
                                            if (message.role == 'assistant') {
                                                if (message.content.includes('https')) {
                                                    // result is an ai image
                                                    return (
                                                        <View key={index} className="flex-row justify-start">
                                                            <View
                                                                className="p-2 flex rounded-2xl bg-emerald-100 rounded-tl-none">
                                                                <Image
                                                                    source={{ uri: message.content }}
                                                                    className="rounded-2xl"
                                                                    resizeMode="contain"
                                                                    style={{ height: wp(60), width: wp(60) }}
                                                                />
                                                            </View>
                                                        </View>


                                                    )
                                                } else {
                                                    // chat gpt response
                                                    return (
                                                        <View
                                                            key={index} style={{ width: wp(70) }}
                                                            className="bg-emerald-100 p-2 rounded-xl rounded-tl-none">
                                                            <Text className="text-neutral-800" style={{ fontSize: wp(4) }}  >
                                                                {message.content}
                                                            </Text>
                                                        </View>
                                                    )
                                                }
                                            } else {
                                                // user input text
                                                return (
                                                    <View key={index} className="flex-row justify-end">
                                                        <View
                                                            style={{ width: wp(70) }}
                                                            className="bg-white p-2 rounded-xl rounded-tr-none">
                                                            <Text style={{ fontSize: wp(4) }}  >
                                                                {message.content}
                                                            </Text>
                                                        </View>
                                                    </View>
                                                );
                                            }


                                        })
                                    }
                                </ScrollView>
                            </View>
                        </View>
                    ) : (
                        <Features />
                    )
                }

                {/* recording, clear and stop buttons */}
                <View className="flex justify-center items-center mt-16">
                    {
                        recording ? (
                            <TouchableOpacity className="space-y-2" onPress={null}>
                                {/* recording stop button */}
                                <Image
                                    className="rounded-full"
                                    source={require('earmeds/assets/voiceLoading.gif')}
                                    style={{ width: hp(10), height: hp(10) }}
                                />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity className="space-y-2" onPress={null}>
                                {/* recording start button */}
                                <Image
                                    className="rounded-full"
                                    source={require('earmeds/assets/recordingIcon.png')}
                                    style={{ width: hp(10), height: hp(10) }}
                                />
                            </TouchableOpacity>
                        )
                    }
                    {
                        messages.length > 0 && (
                            <TouchableOpacity
                                onPress={clear}
                                className="bg-neutral-400 rounded-3xl p-3 absolute right-0"
                            >
                                <Text className="text-white font-semibold">  Temizle  </Text>
                            </TouchableOpacity>
                        )
                    }
                    {
                        speaking && (
                            <TouchableOpacity
                                onPress={stopSpeaking}
                                className="bg-red-400 rounded-3xl p-3 absolute left-0"
                            >
                                <Text className="text-white font-semibold ">   Durdur   </Text>
                            </TouchableOpacity>
                        )
                    }



                </View>

            </SafeAreaView>
        </View>
    )
}
