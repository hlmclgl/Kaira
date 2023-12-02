import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Calendar, LocaleConfig } from 'react-native-calendars';


LocaleConfig.locales['tr'] = {
  monthNames: [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık'
  ],

  monthNamesShort: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
  dayNames: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi',],
  dayNamesShort: ['Paz.', 'Pzt.', 'Sal.', 'Çar.', 'Per.', 'Cum.', 'Cmt.',],
  today: "Bugün"
};

LocaleConfig.defaultLocale = 'tr';

export default function MenstrualCycle() {

  const [selectedPeriod, setSelectedPeriod] = useState({});
  const onDayPress = day => {
    // Seçilen günün detaylarını burada işleyebilirsiniz
    console.log('Selected day: ', day);
    setSelectedPeriod(day);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text style={styles.title}>Sonraki Regl</Text>
        <Text style={styles.dayText}>11 Aralık</Text>
        <View style={styles.containerText}>
          <Text style={styles.pregnantText}>Hamile kalma olasılığı</Text>
          <Text style={{ color: 'slateblue', fontWeight: 'bold', fontSize: 15 }}>DÜŞÜK.</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={null}>
          <Text style={styles.buttonText}>Regl Başlangıcı</Text>
        </TouchableOpacity>

        <Calendar
          style={styles.calendar}
          enableSwipeMonths
          theme={{
            //monthTextColor: 'pink',
            textMonthFontSize: 20,
            textMonthFontWeight: 'bold',
            arrowColor: 'orange',
            textSectionTitleColor: 'orange',
            //dayTextColor: 'red',
            textInactiveColor: 'green',
            textDayFontWeight: 'bold',
            textDisabledColor: '#29AB87'
          }}
          onDayPress={onDayPress}
          //hideExtraDays = {true}

          // markedDates={{
          //   '2023-12-20': {marked:true, dotColor: 'red', selected: true, selectedColor:'red'}
          // }}

          markingType={'period'}
          markedDates={{
            [selectedPeriod.dateString]: { startingDay: true, endingDay: true, Color: '#AA336A' },
            '2023-12-11': { startingDay: true, color: '#AA336A' },
            '2023-12-12': { marked: true, color: '#AA336A', dotColor: 'transparent' },
            '2023-12-13': { marked: true, color: '#AA336A', dotColor: 'transparent' },
            '2023-12-14': { marked: true, color: '#AA336A', dotColor: 'transparent' },
            '2023-12-15': { endingDay: true, color: '#AA336A' },
            '2023-12-20': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2023-12-21': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2023-12-22': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2023-12-23': { startingDay: true, endingDay: true, color: 'maroon' },
            '2023-12-24': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2023-12-05': { marked: true, dotColor: 'sienna' },

          }}
          multiPeriodSelection={true}

        />

        <View style={styles.markedContainer}>
          <Image source={require('earmeds/assets/slateblueCircle.png')} style={styles.image} />
          <Text style={styles.text}>Doğurgan dönem: Gebe kalma ihtimali orta.</Text>
        </View>

        <View style={styles.markedContainer}>
          <Image source={require('earmeds/assets/maroonCircle.png')} style={styles.image} />
          <Text style={styles.text}>Yumurtlama dönemi: Gebe kalma ihtimali yüksek.</Text>
        </View>

      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 40
  },
  title: {
    color: 'white',
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 3
  },
  dayText: {
    color: 'hotpink',
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10
  },
  pregnantText: {
    color: 'gray',
    alignSelf: 'flex-start',
    paddingHorizontal: 5,
    fontWeight: 'bold',
    marginBottom: 20
  },
  calendar: {
    borderRadius: 20,
    elevation: 4,
    margin: 30,
    padding: 7,
    borderWidth: 1,
    borderColor: 'gray',
  },
  containerText: {
    flexDirection: 'row',
    paddingHorizontal: 20,

  },
  markedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 40, // İhtiyaca göre ayarlayın
    height: 40, // İhtiyaca göre ayarlayın
    marginRight: 30, // İhtiyaca göre ayarlayın
    left: 28

  },
  text: {
    //fontSize: 16,
    fontWeight: 'bold',
  },

  button: {
    borderColor: '#2e2e2e',
    borderWidth: 1,
    padding: 10,
    width: 186,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17,
    backgroundColor: 'hotpink',
    left:100
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})