import { StyleSheet, Text, View, Button, Modal } from 'react-native'
import React, { useState } from 'react'
import LimitContainerTable from './LimitContainerTable'
import LimitContainerResult from './LimitContainerResult'
import LimitContainerNotPlay from './LimitContainerNotPlay'
import LimitContainerPlay from './LimitContainerPlay'
import LimitHeaderText from './LimitHeaderText'
import DatePicker from 'react-native-date-picker'
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useAccountSignalQuery, useNotInJobQuery } from '@/Services/modules/Maket'
import { useMemo } from 'react'
import { handleDataByStatus } from '@/Util'
import { useSelector } from 'react-redux'
import SellAll from './SellAll'

// console.log(DateTimePickerAndroid)
const Limit = (
  inputName,
  locale,
  labelKey,
  max,
  min,) => {
    const date = useSelector(state => state.maket.date)
  //   const graph = useSelector(state =>state.maket.graph)
  //   const { data: dataJob, isFetching: fetch1, isLoading: load1, refetch: refetch1 } = useAccountSignalQuery(date)
  //   const { data: dataNotJob, isFetching: fetch2, isLoading: load2, refetch: refetch2 } = useNotInJobQuery(date)

  //   const job = useMemo(() => {
  //     if (dataJob)
  //       return handleDataByStatus(dataJob.data, 'job', date)
  //     return null
  //   }, [dataJob])
  
  //   const notJob = useMemo(() => {
  //     if (dataNotJob)
  //       return handleDataByStatus(dataNotJob.data, 'notJob', date)
  //     return null
  //   }, [dataNotJob])

  //   const dataWin = useMemo(() => {
  //       const data = job ? job.WIN : [] 
  //       return data.reduce((pre, item) => 
  //         pre + (item.sellPrice / item.entry1)*item.sellAmount-item.sellAmount
  //       , 0)
  //   })

  //   const dataLose = useMemo(() => {
  //     const data = job ? job.LOSE : []
  //     return data.reduce((pre, item) => 
  //       pre + (item.sellPrice / item.entry1)*item.sellAmount-item.sellAmount
  //     , 0)
  // })

  // const total = dataWin + dataLose

  // console.log(total, '------------------')

    // const [date, setDate] = useState(new Date())
    // const [open, setOpen] = useState(false)
    // const [isDatePickerVisible, setDatePickerVisibility] = useState(true);

    // const showDatePicker = () => {
    //   setDatePickerVisibility(true);
    // };

    // const hideDatePicker = () => {
    //   setDatePickerVisibility(false);
    // };

    // const handleConfirm = (date) => {
    //   console.warn("A date has been picked: ", date);
    //   hideDatePicker();
    // };
  //   return (
  //     <View>
  //       <View style={{ marginTop: 36, marginLeft: 12, marginRight: 12 }}>
  //         <LimitHeaderText />
  //         <LimitContainerPlay />
  //         <LimitContainerNotPlay />
  //         <LimitContainerResult />
  //       </View>
  //       <View>
  //         <LimitContainerTable job={job} notJob = {notJob}/>
  //       </View>
  //       <Modal
  //         animationType="slide"
  //         transparent={true}
  //         visible={graph === 'SELECT_AC' ? true : false}
  //         onRequestClose={() => {
  //           dispatch(changeGraph(null))
  //         }}
  //       >
  //         <SellAll total={total}/>
  //       </Modal>
  //     </View>
      

  // //     <View>
  // //       <Button title="Show Date Picker" onPress={showDatePicker} />
  // //       <DateTimePickerModal
  // //         isVisible={isDatePickerVisible}
  // //         mode="date"
  // //         onConfirm={handleConfirm}
  // //         onCancel={hideDatePicker}
  // //       />
  // //     </View>
  //   )
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <View>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}

export default Limit

const styles = StyleSheet.create({})
