import React, {Component} from 'react'
import{TouchableOpacity,Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { images, icons,colors } from '../constants'
function IUButton(props) {
  const {onPress,title,isSelected} = props
    return <TouchableOpacity
        onPress={onPress}
        style={{
            borderColor: 'white',
            borderWidth: 1,
            height: 45,
            borderRadius: 5,
            marginVertical: 10,
            marginHorizontal: 15,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isSelected==true ? 'white':null,

        }}>
          {isSelected == true && 
        <Icon
            size={20}
            name={"check-circle"}
            style={{
                color: 'green',
                position: 'absolute',
                left: 10,
                top: 10,
            }}></Icon>}
        <Text style={{
            color: isSelected==true? colors.primary:'white',
        }}
        >{title}</Text>
    </TouchableOpacity>
}
export default IUButton