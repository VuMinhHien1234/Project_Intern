// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React, { useEffect, useRef, useState } from 'react';
// import type { PropsWithChildren } from 'react';
// import {
//   Button,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// // type SectionProps = PropsWithChildren<{
// //   title: string;
// // }>;

// // function Section({children, title}: SectionProps): React.JSX.Element {
// //   const isDarkMode = useColorScheme() === 'dark';
// //   return (
// //     <View style={styles.sectionContainer}>
// //       <Text
// //         style={[
// //           styles.sectionTitle,
// //           {
// //             color: isDarkMode ? Colors.white : Colors.black,
// //           },
// //         ]}>
// //         {title}
// //       </Text>
// //       <Text
// //         style={[
// //           styles.sectionDescription,
// //           {
// //             color: isDarkMode ? Colors.light : Colors.dark,
// //           },
// //         ]}>
// //         {children}
// //       </Text>
// //     </View>
// //   );
// // }

// // function App(): React.JSX.Element {
// //   const isDarkMode = useColorScheme() === 'dark';

// //   const backgroundStyle = {
// //     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
// //   };

// //   /*
// //    * To keep the template simple and small we're adding padding to prevent view
// //    * from rendering under the System UI.
// //    * For bigger apps the reccomendation is to use `react-native-safe-area-context`:
// //    * https://github.com/AppAndFlow/react-native-safe-area-context
// //    *
// //    * You can read more about it here:
// //    * https://github.com/react-native-community/discussions-and-proposals/discussions/827
// //    */
// //   const safePadding = '5%';

// //   return (
// //     <View style={backgroundStyle}>
// //       <StatusBar
// //         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
// //         backgroundColor={backgroundStyle.backgroundColor}
// //       />
// //       <ScrollView
// //         style={backgroundStyle}>
// //         <View style={{paddingRight: safePadding}}>
// //           <Header/>
// //         </View>
// //         <View
// //           style={{
// //             backgroundColor: isDarkMode ? Colors.black : Colors.white,
// //             paddingHorizontal: safePadding,
// //             paddingBottom: safePadding,
// //           }}>
// //           <Section title="Step One">
// //             Edit <Text style={styles.highlight}>App.tsx</Text>
// //           </Section>
// //           <Section title="See Your Changes">
// //             <ReloadInstructions />
// //           </Section>
// //           <Section title="Debug">
// //             <DebugInstructions />
// //           </Section>
// //           <Section title="Learn More">
// //             Read the docs to discover what to do next:
// //           </Section>
// //           <LearnMoreLinks />
// //         </View>
// //       </ScrollView>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   sectionContainer: {
// //     marginTop: 32,
// //     paddingHorizontal: 24,
// //   },
// //   sectionTitle: {
// //     fontSize: 24,
// //     fontWeight: '600',
// //   },
// //   sectionDescription: {
// //     marginTop: 8,
// //     fontSize: 18,
// //     fontWeight: '400',
// //   },
// //   highlight: {
// //     fontWeight: '700',
// //   },
// // });

// // const App = () => {
// //   const [text, setText] = useState("Hello, World");

// //   useEffect(() => {
// //     console.log("The text has changed:", text);
// //   }, [text]);

// //   return (
// //     <SafeAreaView>
// //       <Text>Hello</Text>
// //     </SafeAreaView>
// //   );
// // };

// // export default App;

// // const App = () => {
// //   let array = Array(1000).fill(0);
// //   const scrollView = useRef(null);

// //   const handleClick = () => {
// //     if (scrollView.current) {
// //       scrollView.current.scrollTo({ x: 0, y: 0, animated: true });
// //     }
// //   };

// //   return (
// //     <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
// //       <ScrollView ref={scrollView}>
// //         {array.map((_, index) => (
// //           <Text key={index}>Hello {index}</Text>
// //         ))}
// //       </ScrollView>

// //       <Button onPress={handleClick} title="Scroll on Top" />
// //     </SafeAreaView>
// //   );
// // };

// // export default App;

// import { ThemeContext } from "./contexts/ThemeContext";
// const App = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   }

//   return (
//     <ThemeContext.Provider value ={isDarkMode}>
//       <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
//         <View style={{ backgroundColor: isDarkMode ? '#222222' : '#ffffff' }}>
//           <Text>Hello World</Text>
//           <Button title={'Switch Mode'} onPress={toggleTheme}></Button>
//         </View>
//       </SafeAreaView>
//     </ThemeContext.Provider>

//   );
// };

// export default App;

import {StyleSheet, View} from 'react-native';
import React from 'react';
import {FoodList, ProductGridView} from './screen';
import FoodItems from './screen/FoodList/FoodItems';

const App = () => {
  return (
    <View>
      <ProductGridView />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
