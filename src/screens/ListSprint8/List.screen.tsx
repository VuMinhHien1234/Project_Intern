import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
import DatePicker from './DropDown/DatePicker';
import IconTrue from '../../../assets/icons/IconTrue';
import IconFalse from '../../../assets/icons/ic_false';
import UIHeaderS8 from './components/UIHeaderS8';
import IconDropDown from '../../../assets/icons/ic_dropdown';
import {colors} from '../../constants';
import {screenWidth} from '../../utilities';

const ListScreen = () => {
  const semesterData = [
    {label: 'Hoc Ky 1', value: 'Hoc Ky 1'},
    {label: 'Hoc Ky 2', value: 'Hoc Ky 2'},
    {label: 'Hoc Ky 3', value: 'Hoc Ky 3'},
    {label: 'Hoc Ky 4', value: 'Hoc Ky 4'},
    {label: 'Hoc Ky 5', value: 'Hoc Ky 5'},
    {label: 'Hoc Ky 6', value: 'Hoc Ky 6'},
    {label: 'Hoc Ky 7', value: 'Hoc Ky 7'},
    {label: 'Hoc Ky 8', value: 'Hoc Ky 8'},
  ];
  const multiSelection = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];
  const payMethod = [
    {label: 'Cash', value: 'Cash'},
    {label: 'Money Tranfer', value: 'Money Tranfer'},
    {label: 'Gold', value: 'Gold'},
    {label: 'Deposit', value: 'Deposit'},
  ];
  const branch = [
    {label: 'Ha Noi', value: 'Ha Noi'},
    {label: 'Da Nang', value: 'Da Nang'},
    {label: 'Hai Phong', value: 'Hai Phong'},
    {label: 'CS4', value: 'TP HCM'},
  ];

  const [semester, setSemester] = useState('Hoc Ky 1');
  const [money, setMoney] = useState('');
  const [selected, setSelected] = useState<string[]>([]);
  const [pay, setPay] = useState('');
  const [place, setPlace] = useState('');
  const [reason, setReason] = useState('');
  const [changeIcon, setChangeIcon] = useState(false);
  const [commitIcon, setCommitIcon] = useState(false);

  type dataType = {
    label: string;
    value: string;
  };
  const handleRemove = (index_del: number) => {
    const filteredItems = selected.filter(
      item => !item.includes(selected[index_del]),
    );
    setSelected(filteredItems);
  };

  const handleChangeIcon = () => {
    setChangeIcon(!changeIcon);
  };
  const handleChangeCommitIcon = () => {
    setCommitIcon(!commitIcon);
  };
  const handleMoney = (text: string) => {
    setMoney(text);
  };

  const handleDropDownSemester = (item: dataType) => {
    setSemester(item.label);
  };
  const handleDropDownPayMethod = (item: dataType) => {
    setPay(item.label);
  };
  const handleDropDownPlace = (item: dataType) => {
    setPlace(item.label);
  };

  return (
    <ScrollView>
      <UIHeaderS8 />
      <View style={styles.container1}>
        <Text style={styles.title_container1}>I. THÔNG TIN CHUNG :</Text>
        <IconDropDown />
      </View>
      <View style={styles.container2}>
        <Text style={styles.title_container2}>
          II. ĐỀ NGHỊ ĐỐI CHIẾU CÔNG NỢ :
        </Text>
        <View style={styles.item_container2}>
          <Text>- Học kỳ đề nghị đối chiếu công nợ*:</Text>
          <View style={styles.item_container2_1}>
            <TextInput placeholder="Chọn học kỳ" value={semester}></TextInput>
            <Dropdown
              style={styles.item1_dropdownContainer2}
              placeholderStyle={styles.placeholderDropdown}
              data={semesterData}
              search
              labelField="label"
              valueField="value"
              placeholder="Chọn học kỳ"
              searchPlaceholder="Search..."
              value={'Chọn học kỳ'}
              onChange={handleDropDownSemester}
            />
          </View>
        </View>
        <View>
          <Text>- Khoản công nợ đã nộp (theo hóa đơn)*:</Text>
          <View style={styles.money}>
            <View style={styles.half_width}>
              <Text>+ Số tiền nộp (VNĐ)*:</Text>
              <TextInput
                keyboardType="numeric"
                placeholder="Số tiền"
                value={money}
                onChangeText={handleMoney}
              />
            </View>
            <View style={styles.half_width}>
              <DatePicker />
            </View>
          </View>
          <View>
            <Text>+ Hình thức nộp tiền*:</Text>
            <View style={styles.item_container2_1}>
              <TextInput placeholder="Chon ki hoc" value={pay}></TextInput>
              <Dropdown
                style={styles.item1_dropdownContainer2}
                placeholderStyle={styles.placeholderDropdown}
                data={payMethod}
                search
                labelField="label"
                valueField="value"
                placeholder="Hinh thuc nop"
                searchPlaceholder="Search..."
                value={'Chọn cách thanh toán'}
                onChange={handleDropDownPayMethod}
              />
            </View>
          </View>
          <View>
            <Text>+ Nộp tiền vào tài khoản chi nhánh*:</Text>
            <View style={styles.item_container2_1}>
              <TextInput placeholder="Chi nhánh" value={place}></TextInput>
              <Dropdown
                style={styles.item1_dropdownContainer2}
                placeholderStyle={styles.placeholderDropdown}
                data={branch}
                search
                labelField="label"
                valueField="value"
                placeholder="Chọn chi nhánh"
                searchPlaceholder="Search..."
                value={'Chon Hoc ky'}
                onChange={handleDropDownPlace}
              />
            </View>
          </View>
        </View>
        <View>
          <Text>- Đề nghị cập nhật (xoá/ trừ) công nợ*:</Text>
          <View>
            <MultiSelect
              style={styles.multiSelect}
              data={payMethod}
              labelField="label"
              valueField="value"
              placeholder="Thêm đề nghị"
              value={selected}
              onChange={item => {
                setSelected(item);
              }}
              renderRightIcon={() => <IconDropDown />}
              renderSelectedItem={() => <></>}
            />

            <FlatList
              style={{padding: 10}}
              data={selected || []}
              horizontal
              renderItem={({item, index}) => {
                return (
                  <View style={styles.item_MultiSelect}>
                    <Text numberOfLines={2}>{item}</Text>
                    <TouchableOpacity onPress={() => handleRemove(index)}>
                      <Text style={{color: 'red'}}>X</Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />

            <View style={{flexDirection: 'row', padding: 10}}>
              <TouchableOpacity onPress={handleChangeIcon}>
                <View style={styles.icon1}>
                  {changeIcon ? <IconTrue /> : <IconFalse />}
                </View>
              </TouchableOpacity>
              <Text>Khác</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.text_recommend}>Nhập đề nghị khác</Text>
          <View style={styles.text_line}>
            <Text>h</Text>
          </View>
          <Text style={styles.textIn}>Li do*:</Text>
          <TextInput
            style={styles.input}
            value={reason}
            onChangeText={item => {
              setReason(item);
            }}
          />
        </View>
      </View>
      <View style={styles.icon_footer}>
        <TouchableOpacity onPress={handleChangeCommitIcon}>
          <View style={styles.icon1}>
            {commitIcon ? <IconTrue /> : <IconFalse />}
          </View>
        </TouchableOpacity>
        <Text style={styles.text_footer}>
          Tôi xin xác nhận nội dung trong đơn là đúng sự thật!
        </Text>
        <TouchableOpacity>
          <Text style={styles.text_buttonFooter}>Gửi đơn</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container1: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.background,
    padding: 10,
  },
  title_container1: {fontWeight: 'bold', fontSize: 20},
  container2: {
    marginHorizontal: 20,
    justifyContent: 'space-between',
    backgroundColor: colors.background_S8,
    padding: 10,
  },
  title_container2: {fontWeight: 'bold', fontSize: 20},
  item_container2: {marginTop: 10},
  item_container2_1: {flexDirection: 'row', justifyContent: 'space-between'},
  item1_dropdownContainer2: {
    height: 70,
    width: 150,
    justifyContent: 'center',
    left: 10,
    padding: 10,
  },
  placeholderDropdown: {marginLeft: 10},
  multiSelect: {
    padding: 10,
    marginTop: 15,
    backgroundColor: '#e9f5f4',
    width: 150,
    borderRadius: 15,
  },
  item_MultiSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D8F1F6',
    marginHorizontal: 16,
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    width: 120,
    borderRadius: 10,
    paddingVertical: 8,
  },
  icon1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
  },
  text_recommend: {textAlign: 'center', marginVertical: 10},
  text_line: {height: 1, backgroundColor: 'rgba(142, 164, 184, 1)'},
  textIn: {padding: 10},
  input: {
    height: 100,
    backgroundColor: '#e9f5f4',
    borderRadius: 10,
    borderWidth: 1,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  icon_footer: {
    flexDirection: 'row',
    alignItems: 'center',
    left: 20,
  },
  text_footer: {width: 250, padding: 30},
  text_buttonFooter: {
    padding: 20,
    backgroundColor: 'rgba(36, 93, 124, 1)',
    borderRadius: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  money: {flexDirection: 'row', marginTop: 10},
  half_width: {width: screenWidth / 2},
});
