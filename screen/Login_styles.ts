import { StyleSheet } from "react-native";
import { colors } from "../constants";

export default StyleSheet.create({
item:{
  
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'red'
  
},
text_errorInput:{
  color: 'red',
  marginTop: 5,
},
keyboard:{
  flex: 1,
   backgroundColor: 'white',
    paddingHorizontal: 20,
     justifyContent: 'center'
},

title:{
  color: 'black',
  fontSize: 22,
  fontWeight: 'bold'
},
images_title:{
  
    width: 100,
    height: 100,
    marginTop: 10
  
},
title_description:{
  color: colors.primary,
  fontSize: 16,
  marginBottom: 5
},
space_text:{
   marginBottom: 15 
},
input_text:{
  
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    padding: 10,
    color: 'black'
  
},
button:{
  
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 20
  
},
text_button:{
  color: 'white',
  fontSize: 18
}

})