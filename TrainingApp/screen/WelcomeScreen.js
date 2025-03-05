import React from "react";
import {Text,View} from 'react-native';

// function MainScreen(props){
//     return <Text>This is main Screen </Text>
// }
const WelcomeScreen = (props)=>{
    //destructuring an object
    const{x,y} = props
    const {person}=props
    //const =>let =>var
    //destructuring person object
    const {name,age,email} = person
    const {products}=props
    
    return <View>
        <Text>{x}, {y}</Text>
        <Text>{name},{email},{age}</Text>
        {products.map(eachProduct => 
        <Text>{eachProduct.productsName},{eachProduct.year}</Text>)}
    </View>
  
   
}
export default WelcomeScreen