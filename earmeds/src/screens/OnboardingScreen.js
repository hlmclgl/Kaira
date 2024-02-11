import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
//import { setItem } from '../utils/asyncStorage';

const {width, height} = Dimensions.get('window');

export default function OnboardingScreen() {
    const navigation = useNavigation();

    const handleDone = ()=>{
        navigation.navigate('AppNavigation');
        //setItem('onboarded', '1');
    }

    const doneButton = ({...props})=>{
        return (
            <TouchableOpacity style={styles.doneButton} {...props}>
                <Text>Done</Text>
            </TouchableOpacity>
        )
        
    }
  return (
    <View style={styles.container}>
      <Onboarding
            onDone={handleDone}
            onSkip={handleDone}
            // bottomBarHighlight={false}
            //DoneButtonComponent={doneButton}
            containerStyles={{paddingHorizontal: 15}}
            pages={[
                {
                    backgroundColor: '#00D8FE',
                    image: (
                        <View style={styles.lottie}>
                            <Lottie source={require('earmeds/assets/animations/welcome2.json')} autoPlay loop />
                        </View>
                    ),
                    title: 'Kaira İle Yeni Bir Döneme Hazır Mısınız?',
                    subtitle: 'Hoş Geldiniz! Kaira ile hayatınıza daha fazla konfor ve renk katmaya hazır mısınız?',
                },
                {
                    backgroundColor: '#29AB87',
                    image: (
                        <View style={styles.lottie}>
                            <Lottie source={require('earmeds/assets/animations/bluetooth.json')} autoPlay loop />
                        </View>
                    ),
                    title: 'Hemen Başlayın!',
                    subtitle: "Hemen başlamak için Bluetooth'u etkinleştirin ve akıllı küpenizi telefonunuza bağlayın!",
                },
                {
                    backgroundColor: '#a78bfa',
                    image: (
                        <View style={styles.lottie}>
                            <Lottie source={require('earmeds/assets/animations/healthcare.json')} autoPlay loop />
                        </View>
                    ),
                    title: 'Sağlığınızı Şekillendirin',
                    subtitle: 'Adımlarınızı, kalp atış hızınızı ve uyku düzeninizi özelleştirin. Sağlığınız sizin kontrolünüzde!',
                },
                {
                    backgroundColor: 'slategray',
                    image: (
                        <View style={styles.lottie}>
                            <Lottie source={require('earmeds/assets/animations/asistant1.json')} autoPlay loop />
                        </View>
                    ),
                    title: 'Sizin İçin Buradayım:    Kişisel Yapay Zeka Asistanı',
                    subtitle: 'Size özel hatırlatmalar ve önerilerle hayatınızı daha düzenli ve etkili hale getirin.',
                },
                {
                    backgroundColor: 'purple',
                    image: (
                        <View style={styles.lottie}>
                            <Lottie source={require('earmeds/assets/animations/translate.json')} autoPlay loop />
                        </View>
                    ),
                    title: 'Dünya ile Bağlantı Kurun!',
                    subtitle: 'Dünya genelinde rahatça iletişim kurun. Kişisel yapay zeka asistanınız sayesinde anlık çeviri ile herkesle anında anlaşın!',
                },
                {
                    backgroundColor: '#5f9ea0',
                    image: (
                        <View style={styles.lottie}>
                            <Lottie source={require('earmeds/assets/animations/colorpalette.json')} autoPlay loop />
                        </View>
                    ),
                    title: 'Stilinizi Özelleştirin',
                    subtitle: 'Küpenizin rengini her an değiştirerek stilinizi özelleştirin. Şimdi başlamak için hazır mısınız?',
                },
            ]}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    lottie:{
        width: width*1,
        height: width
    },
    doneButton: {
        padding: 20,
        // backgroundColor: 'white',
        // borderTopLeftRadius: '100%',
        // borderBottomLeftRadius: '100%'
    }
})