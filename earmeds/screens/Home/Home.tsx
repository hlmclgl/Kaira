import { View, Text, Image } from 'react-native';
import { colors } from './colors';
import React, { useState } from 'react';
import { Ring } from './Ring/Ring';
import Card from './Cards/Card';
import { SmallButton } from './SmallButtons/SmallButton';
import { AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Card1 from './Cards/Card1';
import Card2 from './Cards/Card2';
import Card3 from './Cards/Card3';
import Card4 from './Cards/Card4';
import StepsCard from './Cards/StepsCard';

export const Home: React.FC = () => {
    const [isGenerated, setIsGenerated] = useState(false);
    const [percent1, setPercent1] = useState(0);
    const [percent2, setPercent2] = useState(0);
    const [percent3, setPercent3] = useState(0);

    const regenerateData = () => {
        setPercent1(Math.floor(Math.random() * 100));
        setPercent2(Math.floor(Math.random() * 100));
        setPercent3(Math.floor(Math.random() * 100));
        setIsGenerated(true);
    };

    const deleteData = () => {
        setPercent1(0);
        setPercent2(0);
        setPercent3(0);
        setIsGenerated(false);
    };

    const ringProps = [
        {
            radius: 70,
            bgColor: colors.redDisabled,
            gradientStartColor: colors.redStart,
            gradientEndColor: colors.redEnd,
            fill: percent1,
            icon: <AntDesign name="arrowright" size={10} color="black" />,
        },
        {
            radius: 50,
            bgColor: colors.greenDisabled,
            gradientStartColor: colors.greenStart,
            gradientEndColor: colors.greenEnd,
            fill: percent2,
            icon: <AntDesign name="doubleright" size={10} color="black" />,
        },
        {
            radius: 30,
            bgColor: colors.blueDisabled,
            gradientStartColor: colors.blueStart,
            gradientEndColor: colors.blueEnd,
            fill: percent3,
            icon: <AntDesign name="arrowup" size={20} color="black" />,
        },
    ];

    return (
        <View style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor: '#1e1e1e' }}>

            <Text
                style={{
                    color: 'white',
                    fontSize: 25,
                    top: 135,
                    fontWeight: 'bold',
                    fontFamily: 'Roboto',
                    textAlign: 'left',
                }}
            >
                Dairesel Sağlık Grafiği
            </Text>

            {ringProps.map((props, index) => (
                <Ring key={index} {...props} />
            ))}

            <Text
                style={{
                    color: '#FA114E',
                    fontSize: 20,
                    top: 145,
                    right: 15,
                    fontWeight: 'bold',
                    fontFamily: 'Roboto',
                    textAlign: 'left',
                }}
            >
                167
                <Text
                    style={{
                        color: '#FA114E',
                        fontSize: 15,
                        top: 145,
                        right: 15,
                        fontWeight: 'normal',
                        fontFamily: 'Roboto',
                        textAlign: 'left',
                    }}
                >
                    DK
                </Text>
            </Text>
            <Text
                style={{
                    color: '#30030E',
                    fontSize: 13,
                    top: 141,
                    right: 13,
                    fontWeight: 'normal',
                    fontFamily: 'Roboto',
                    textAlign: 'left',
                }}
            >
                Hareket
            </Text>

            <Text
                style={{
                    color: '#99FF02',
                    fontSize: 20,
                    top: 100,
                    right: -57,
                    fontWeight: 'bold',
                    fontFamily: 'Roboto',
                    textAlign: 'left',
                }}
            >
                82
                <Text
                    style={{
                        color: '#99FF02',
                        fontSize: 15,
                        top: 100,
                        right: -62,
                        fontWeight: 'normal',
                        fontFamily: 'Roboto',
                        textAlign: 'left',
                    }}
                >
                    DK
                </Text>
            </Text>
            <Text
                style={{
                    color: '#30030E',
                    fontSize: 13,
                    top: 97,
                    right: -58,
                    fontWeight: 'normal',
                    fontFamily: 'Roboto',
                    textAlign: 'left',
                }}
            >
                Egzersiz
            </Text>
            <Text
                style={{
                    color: '#00D8FE',
                    fontSize: 20,
                    top: 55,
                    right: -144,
                    fontWeight: 'bold',
                    fontFamily: 'Roboto',
                    textAlign: 'left',
                }}
            >
                10
                <Text
                    style={{
                        color: '#00D8FE',
                        fontSize: 15,
                        top: 55,
                        right: -130,
                        fontWeight: 'normal',
                        fontFamily: 'Roboto',
                        textAlign: 'left',
                    }}
                >
                    SA
                </Text>
            </Text>
            <Text
                style={{
                    color: '#30030E',
                    fontSize: 13,
                    top: 51.5,
                    right: -148,
                    fontWeight: 'normal',
                    fontFamily: 'Roboto',
                    textAlign: 'left',
                }}
            >
                Ayakta Kalma
            </Text>


            <View style={{ top: 90, right: -17 }}>
                <SmallButton title={isGenerated ? 'Tekrar Hesapla' : 'Hesapla'} onPress={regenerateData} />
            </View>
            <View style={{ top: 52, right: -136 }}>
                <SmallButton title={'Sıfırla'} onPress={deleteData} />
            </View>
            
            <Card>
                <Text style={{ top: -17, textAlign: 'center', fontSize: 18 }}>Kalp Atış Hızı</Text>
                <Image source={require('earmeds/assets/life-heart.gif')} style={{ width: 80, height: 80, top: -20, left: -14 }} />
                <Text style={{ top: -100, textAlign: 'center', fontSize: 60, color: 'white' }}>88</Text>
                <Text style={{ top: -165, right: 8, textAlign: 'right', fontSize: 13, color: 'red' }}>BPM</Text>
                <Text style={{ top: -120, textAlign: 'center', fontSize: 13, color: 'gray' }}>86 BPM, 1dk önce</Text>
            </Card>

            <Card1>
                <Text style={{ top: -17, textAlign: 'center', fontSize: 18 }}>Kanda Oksijen</Text>
                <Image source={require('earmeds/assets/05e352aff29e95b54563b55efa653477_w200.gif')} style={{ width: 100, height: 80, top: -21, left: -22 }} />
                <Text style={{ top: -93, right: -24, textAlign: 'center', fontSize: 45, color: 'white' }}>%97</Text>
                <Text style={{ top: -103, right: -9, textAlign: 'right', fontSize: 13, color: '#86BEDA' }}>SpO2</Text>
                <Text style={{ top: -100, textAlign: 'center', fontSize: 13, color: 'gray' }}>%98, 15dk önce</Text>
            </Card1>

            <Card2>
                <Text style={{ top: -17, textAlign: 'center', fontSize: 18 }}>Stres</Text>
                <Image source={require('earmeds/assets/brain.gif')} style={{ width: 75, height: 75, top: -16, left: -21 }} />
                <Text style={{ top: -93, right: -24, textAlign: 'center', fontSize: 55, color: 'white' }}>57</Text>
                <Text style={{ top: -105, right: 1, textAlign: 'right', fontSize: 13, color: '#29AB87' }}>Düşük</Text>
                <Text style={{ top: -100, textAlign: 'center', fontSize: 13, color: 'gray' }}>69, 26dk önce</Text>
            </Card2>

            <Card3>
                <Text style={{ top: -17, textAlign: 'center', fontSize: 18 }}>Kan Şekeri</Text>
                <Image source={require('earmeds/assets/NTHO.gif')} style={{ width: 70, height: 80, top: -21, left: -22 }} />
                <Text style={{ top: -92, right: -16, textAlign: 'center', fontSize: 55, color: 'white' }}>4.3</Text>
                <Text style={{ top: -167, right: -15, textAlign: 'right', fontSize: 13, color: '#CC5500' }}>mmol/L</Text>
                <Text style={{ top: -105, textAlign: 'center', fontSize: 13, color: 'gray' }}>4.9, 31dk önce</Text>
            </Card3>

            <Card4>
                <Text style={{ top: -17, textAlign: 'center', fontSize: 18 }}>Uyku</Text>
                <Image source={require('earmeds/assets/CSO.gif')} style={{ width: 75, height: 75, top: -22, left: -22 }} />
                <Text style={{ top: -92, right: -29, textAlign: 'center', fontSize: 45, color: 'white' }}>8
                    <Text style={{ top: -105, right: 1, textAlign: 'right', fontSize: 13, color: '#e5acb6' }}>SA</Text>
                    <Text style={{ top: -93, right: -24, textAlign: 'center', fontSize: 45, color: 'white' }}>16</Text>
                    <Text style={{ top: -105, right: 1, textAlign: 'right', fontSize: 13, color: '#e5acb6' }}>DK</Text>
                </Text>
                <Text style={{ top: -100, textAlign: 'center', fontSize: 13, color: 'gray' }}>12dk, uyanık</Text>
                <Text style={{ top: -100, textAlign: 'center', fontSize: 13, color: 'gray' }}>5sa, dinlendirici uyku</Text>
                <Text style={{ top: -100, textAlign: 'center', fontSize: 13, color: 'gray' }}>60dk, derin uyku</Text>
            </Card4>

            <StepsCard>
                <Text style={{ top: -17, textAlign: 'center', fontSize: 18 }}>Atılan Adım</Text>
                <Image source={require('earmeds/assets/giphy.gif')} style={{ width: 70, height: 80, top: -22, left: -22 }} />
                <Text style={{ top: -92, right: -33, textAlign: 'center', fontSize: 45, color: 'white' }}>6212</Text>
                <Text style={{ top: -156, right: -12, textAlign: 'right', fontSize: 13, color: 'yellow' }}>adım</Text>
                <Text style={{ top: -105, textAlign: 'center', fontSize: 13, color: 'gray' }}>27964 adım, bu hafta</Text>
                <Text style={{ top: -105, textAlign: 'center', fontSize: 13, color: 'gray' }}>20km, yürünen mesafe</Text>
            </StepsCard>

        </View>
    );
};