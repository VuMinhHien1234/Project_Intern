import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import UIHeader from '../../components/UIHeader';
import IconVectorBack from '../../assets/icons/ic_vectorback';
import IconNothing from '../../assets/icons/ic_nothing';
import {colors} from '../../constants';
import Infor_Item from './Infor_Item';
import IconMail from '../../assets/icons/icon_mail';
import IconPerson from '../../assets/icons/ic_person';
import IconPhone from '../../assets/icons/ic_phone';
import IconFile from '../../assets/icons/ic_file';
import IconPlusCircle from '../../assets/icons/ic_plusCircle';
import IconContract from '../../assets/icons/ic_contract';
import InforItem_3 from './InforItem_3';

const Sprint4 = () => {
  return (
    <View>
      <UIHeader
        text={'Danh mục Phản hồi Góp ý'}
        leftIcon={<IconVectorBack />}
        rightIcon={<IconNothing />}
        onPressLeftIcon={() => Alert.alert('onPressed Left Icon')}
        onPressRightIcon={() => {}}
      />
      <Infor_Item
        icon={<IconPerson />}
        title="Họ và tên"
        details="Nguyễn Huy Trung"
        lastIcon={undefined}
      />
      <Infor_Item
        icon={<IconPhone />}
        title="Số điện thoại"
        details="0123456789"
        lastIcon={undefined}
      />
      <Infor_Item
        icon={<IconMail />}
        title="Email"
        details="huytrung3390@gmail.com"
        lastIcon={undefined}
      />

      <InforItem_3 title={'Câu hỏi'} content={'Câu hỏi riêng'} />
      <InforItem_3 title={'Chọn cấp'} content={'Đảng bộ tỉnh'} />

      <View style={styles.text_inputContainer}>
        <View style={styles.wrap_textInput}>
          <View style={styles.left_components}>
            <IconContract />
            <Text style={styles.text_leftComponent}>Nội dung: </Text>
          </View>
          <TextInput style={styles.text_input} placeholder="Nội dung" />
        </View>
      </View>

      <Infor_Item
        icon={<IconFile />}
        title="Tệp đính kèm"
        details=""
        lastIcon={<IconPlusCircle />}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text_button}>Gửi phản hồi</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Sprint4;

const styles = StyleSheet.create({
  text_inputContainer: {backgroundColor: colors.background},
  wrap_textInput: {
    backgroundColor: 'white',
    margin: 15,
    justifyContent: 'space-between',
  },
  left_components: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text_leftComponent: {marginLeft: 5, fontSize: 18},
  text_input: {
    backgroundColor: '#F9F9F9',
    height: 100,
  },
  button: {
    backgroundColor: '#E74C3C',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignSelf: 'center',
  },
  text_button: {color: 'white', fontSize: 16, fontWeight: 'bold'},
});
