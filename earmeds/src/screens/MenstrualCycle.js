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
    // details of choosed day processed here
    console.log('Selected day: ', day);
    setSelectedPeriod(day);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text style={styles.title}>Sonraki Regl</Text>
        <Text style={styles.dayText}>11 Şubat</Text>
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
            '2023-10-10': { startingDay: true, color: '#AA336A' },
            '2023-10-11': { marked: true, color: '#AA336A', dotColor: 'transparent' },
            '2023-10-12': { marked: true, color: '#AA336A', dotColor: 'transparent' },
            '2023-10-13': { marked: true, color: '#AA336A', dotColor: 'transparent' },
            '2023-10-14': { endingDay: true, color: '#AA336A' },
            '2023-10-19': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2023-10-20': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2023-10-21': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2023-10-22': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2023-10-23': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2023-10-24': { startingDay: true, endingDay: true, color: 'maroon' },


            '2023-11-13': { startingDay: true, color: '#AA336A' },
            '2023-11-14': { marked: true, color: '#AA336A', dotColor: 'transparent' },
            '2023-11-15': { marked: true, color: '#AA336A', dotColor: 'transparent' },
            '2023-11-16': { marked: true, color: '#AA336A', dotColor: 'transparent' },
            '2023-11-17': { endingDay: true, color: '#AA336A' },
            '2023-11-22': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2023-11-23': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2023-11-24': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2023-11-25': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2023-11-26': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2023-11-27': { startingDay: true, endingDay: true, color: 'maroon' },

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

            '2024-01-13': { startingDay: true, color: '#AA336A' },
            '2024-01-14': { marked: true, color: '#AA336A', dotColor: 'transparent' },
            '2024-01-15': { marked: true, color: '#AA336A', dotColor: 'transparent' },
            '2024-01-16': { marked: true, color: '#AA336A', dotColor: 'transparent' },
            '2024-01-17': { endingDay: true, color: '#AA336A' },
            '2024-01-22': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2024-01-23': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2024-01-24': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2024-01-25': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2024-01-26': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2024-01-27': { startingDay: true, endingDay: true, color: 'maroon' },

            '2024-02-11': { startingDay: true, color: '#AA336A' },
            '2024-02-12': { marked: true, color: '#AA336A', dotColor: 'transparent' },
            '2024-02-13': { marked: true, color: '#AA336A', dotColor: 'transparent' },
            '2024-02-14': { marked: true, color: '#AA336A', dotColor: 'transparent' },
            '2024-02-15': { endingDay: true, color: '#AA336A' },
            '2024-02-20': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2024-02-21': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2024-02-22': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2024-02-23': { startingDay: true, endingDay: true, color: 'maroon' },
            '2024-02-24': { startingDay: true, endingDay: true, color: 'slateblue' },
            
            '2024-03-09': { startingDay: true, color: '#AA336A' },
            '2024-03-10': { marked: true, color: '#AA336A', dotColor: 'transparent' },
            '2024-03-11': { marked: true, color: '#AA336A', dotColor: 'transparent' },
            '2024-03-12': { marked: true, color: '#AA336A', dotColor: 'transparent' },
            '2024-03-13': { endingDay: true, color: '#AA336A' },
            '2024-03-18': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2024-03-19': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2024-03-20': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2024-03-21': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2024-03-22': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2024-03-23': { startingDay: true, endingDay: true, color: 'maroon' },

            '2024-04-06': { startingDay: true, color: '#AA336A' },
            '2024-04-07': { marked: true, color: '#AA336A', dotColor: 'transparent' },
            '2024-04-08': { marked: true, color: '#AA336A', dotColor: 'transparent' },
            '2024-04-09': { marked: true, color: '#AA336A', dotColor: 'transparent' },
            '2024-04-10': { endingDay: true, color: '#AA336A' },
            '2024-04-15': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2024-04-16': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2024-04-17': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2024-04-18': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2024-04-19': { startingDay: true, endingDay: true, color: 'slateblue' },
            '2024-04-20': { startingDay: true, endingDay: true, color: 'maroon' },

          }}
          multiPeriodSelection={true}

        />

        <View style={styles.markedContainer}>
          <Image source={require('earmeds/assets/slateblueCircle.png')} style={styles.image} />
          <Text style={styles.text}>Doğurgan dönem: Gebe kalma ihtimali orta.</Text>
        </View>

        <View style={styles.markedContainer}>
          <Image source={require('earmeds/assets/maroonCircle.png')} style={styles.image} />
          <Text style={styles.text}>Yumurtlama günü: Gebe kalma ihtimali yüksek.</Text>
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
    width: 40,
    height: 40, 
    marginRight: 30, 
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