import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {convertDateTimeToString} from '../../../utilities/DateTime';

export default () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <View>
      <Text>Ngày nộp tiền*:</Text>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <View>
          <TextInput
            editable={false}
            value={convertDateTimeToString(date)}
            style={{
              marginTop: 5,
            }}
          />
        </View>
      </TouchableOpacity>

      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};
