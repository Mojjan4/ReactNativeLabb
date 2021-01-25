import React from 'react';
import { CalendarList } from 'react-native-calendars';
import { View } from 'react-native';

//library for useing a calender. no functions yet. 
const Calender = () => {

  return (
    <View>
      <CalendarList
        showWeekNumbers={true}
        futureScrollRange={12}
        pastScrollRange={12}
       
      />
    </View>
  )
}

export default Calender;