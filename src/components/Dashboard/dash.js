// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   Dimensions,
//   Animated,
//   TouchableOpacity,
//   FlatList,
//   Image
// } from 'react-native';
// import * as NB from "native-base"
// import ProgressBar from '../common/circularProgress/ProgressBar';
// import { HeaderBar } from '../common/header/index';

// import data from './data.json';
// import { Icons, Fonts } from '../../config/index';
// const { width, height, fontScale } = Dimensions.get('window');
// let date = new Date()

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {}
//   }
//   static navigationOptions = {
//     header: null
//   }
//   scrollX = new Animated.Value(1);
//   scrollx = new Animated.Value(1);

//   funC = (i, a, b, c, d) => (
//     a.interpolate({
//       inputRange: [i - 1, i, i + 1],
//       outputRange: [b, c, d],
//       extrapolate: 'clamp'
//     })
//   )

//   scrollFunc = (...a) => {
//     return Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollx } } }])(...a)
//   }

//   scrollTab = (event) => {
//     this.refs.scrollview.scrollTo({ x: event.nativeEvent.contentOffset.x / 7, y: 0, animated: !this.firstTime })
//     this.firstTime = false
//   }
//   firstTime = false;
//   // scrollTabA = (event) => {
//   //   if (event.nativeEvent.contentOffset.x / width >= width) {

//   //   }
//   // }

//   render() {
//     let position = Animated.divide(this.scrollX, width);
//     return (
//       <View style={{ flex: 1 }}>
//         <HeaderBar
//           LeftItem={true}
//           Heading="Dashboard"
//           RightItem={<NB.Icon style={styles.iconStyle} name="ios-notifications-outline" />}
//         />
//         <View>
//           <ScrollView style={styles.container}>
//             <View style={{ width, height: (height * 0.65), justifyContent: 'center' }}>
//               <ScrollView
//                 style={{ height: '17%' }}
//                 ref='scrollview'
//                 horizontal={true}
//                 pagingEnabled={true}
//                 showsHorizontalScrollIndicator={false}
//                 onScroll={(...a) =>
//                   this.scrollFunc(...a)
//                 }
//                 scrollEnabled={true}
//               >
//                 {
//                   data.map((d, i) => {
//                     let textColor = position.interpolate({
//                       inputRange: [i - 1, i, i + 1],
//                       outputRange: ['rgba(171, 152, 253, 0.8)', '#FFF', 'rgba(171, 152, 253, 0.8)'],
//                       extrapolate: 'clamp'
//                     })

//                     let textColor1 = position.interpolate({
//                       inputRange: [i - 1, i, i + 1],
//                       outputRange: ['#000', '#FFF', '#000'],
//                       extrapolate: 'clamp'
//                     })

//                     let textColor2 = position.interpolate({
//                       inputRange: [i - 1, i, i + 1],
//                       outputRange: ['rgba(171, 152, 253, 0.8)', '#FFF', 'rgba(171, 152, 253, 0.8)'],
//                       extrapolate: 'clamp'
//                     })

//                     let backgroundActiveColor = position.interpolate({
//                       inputRange: [i - 1, i, i + 1],
//                       outputRange: ['white', '#a996fd', 'white'],
//                       extrapolate: 'clamp'
//                     })

//                     let borderRadiusActive1 = position.interpolate({
//                       inputRange: [i - 1, i, i + 1],
//                       outputRange: [10, 0, 0],
//                       extrapolate: 'clamp'
//                     })

//                     let backgroundActiveColor2 = position.interpolate({
//                       inputRange: [i - 2, i - 1, i, i + 1, i + 2],
//                       outputRange: ['white', '#a996fd', '#a996fd', '#a996fd', 'white'],
//                       extrapolate: 'clamp'
//                     })

//                     let borderRadiusActive2 = position.interpolate({
//                       inputRange: [i - 1, i, i + 1],
//                       outputRange: [0, 0, 10],
//                       extrapolate: 'clamp'
//                     })

//                     let borderRadiusInactive = position.interpolate({
//                       inputRange: [i - 1, i, i + 1],
//                       outputRange: [0, 10, 0],
//                       extrapolate: 'clamp'
//                     })

//                     let newDate = date
//                     newDate.setDate(`${date.getDate() + (1 + 7 - date.getDay()) % 7}`)
//                     console.log(newDate)

//                     return (

//                       <TouchableOpacity
//                         onPress={() => {
//                           this.refs.scrollView.scrollTo({ x: width * i, y: 0, animated: true });
//                         }}
//                         style={[styles.header,
//                         {
//                           marginLeft: i == 0 ? (width * 0.0) : 0,
//                           marginRight: i == (data.length - 1) ? (width * 0.0) : 0
//                         }]}
//                         key={i}
//                       >
//                         <Animated.View style={{ width: '100%', backgroundColor: backgroundActiveColor2, height: '100%', borderTopLeftRadius: borderRadiusInactive, borderTopRightRadius: borderRadiusInactive, }}>
//                           <Animated.View style={[{ width: '100%', backgroundColor: backgroundActiveColor, height: '100%', borderTopLeftRadius: borderRadiusInactive, borderTopRightRadius: borderRadiusInactive, borderBottomRightRadius: borderRadiusActive2, borderBottomLeftRadius: borderRadiusActive1 }, {}]}>
//                             <Animated.Text
//                               style={[styles.headerText, { color: textColor, }]}
//                             >
//                               {i === 0 ? '' : d.DAY}
//                             </Animated.Text>
//                             <Animated.Text
//                               style={[styles.headerText1, { color: textColor1, }]}
//                             >
//                               {i === 0 ? '' : d.DATE}
//                             </Animated.Text>
//                             {d.MARKED && <Animated.Text
//                               style={[styles.headerText2, { color: textColor2, }]}
//                             >
//                               {i === 0 ? '' : '.'}
//                             </Animated.Text>}
//                           </Animated.View>
//                         </Animated.View>
//                       </TouchableOpacity>
//                     )
//                   })
//                 }
//               </ScrollView>

//               <ScrollView
//                 ref='scrollView'
//                 horizontal={true}
//                 pagingEnabled={true}
//                 showsHorizontalScrollIndicator={false}
//                 onScroll={(e) => {
//                   this.scrollTab(e)
//                   return Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX } } }])(e)
//                 }}
//                 onLayout={() => {
//                   this.refs.scrollView.scrollTo({ x: width * (date.getDate()), y: 0, animated: false })
//                 }}
//                 style={{ height: '83%' }}
//               >
//                 {
//                   data.map((month, i) => {
//                     let textColor = position.interpolate({
//                       inputRange: [i - 1, i, i + 1],
//                       outputRange: ['#121212', '#fefefe', '#121212'],
//                       extrapolate: 'clamp'
//                     })

//                     return (

//                       <View
//                         style={[{ display: 'flex', alignItems: 'center', width, justifyContent: "space-between", backgroundColor: '#a996fd', borderRadius: 15 },
//                         {
//                         }]}
//                         key={i}
//                       >
//                         <View style={{ flexDirection: "row", height: "30%", width: "100%", justifyContent: "space-between", alignItems: "center", backgroundColor: "yellow" }}>

//                           <View style={{ width: "30%", height: "70%", alignItems: "center", justifyContent: "space-around" }}>
//                             <Image source={Icons.restaurant} style={{ height: "30%", width: "30%" }} resizeMode="contain" />
//                             <Text style={{ fontFamily: Fonts.book, fontSize: fontScale * 28, color: "white" }}>675</Text>
//                             <Text style={{ fontFamily: Fonts.medium, fontSize: fontScale * 10, color: "white" }}>EATEN</Text>
//                           </View>
//                           <View style={{ width: "30%", height: "70%", alignItems: "center", justifyContent: "space-around" }}>
//                             <Image source={Icons.restaurant} style={{ height: "30%", width: "30%" }} resizeMode="contain" />
//                             <Text style={{ fontFamily: Fonts.book, fontSize: fontScale * 28, color: "white" }}>675</Text>
//                             <Text style={{ fontFamily: Fonts.medium, fontSize: fontScale * 10, color: "white" }}>BURNED</Text>
//                           </View>
//                         </View>
//                         {/* <Animated.Text
//                           style={[styles.headerText, { color: textColor, }]}
//                         >
//                           {'1211'}
//                         </Animated.Text> */}
//                         <View style={{ width: '40%', height: '40%', position: "absolute", justifyContent: "center", alignItems: 'center' }}>
//                           <View style={{ height: height / 3.5, width: width }}>
//                             <ProgressBar
//                               // title={""}
//                               titleBottom={"REMAINING"}
//                               titleSize={11}
//                               titleColor={"white"}
//                               numberSize={30}
//                               numberColor={"white"}
//                               // head={true}
//                               totalFill={3000}
//                               fill={1950}
//                               progressFirstColor={[234, 232, 117]}
//                               progressSecondColor={[81, 255, 237]}
//                             />
//                           </View>
//                         </View>
//                         <View
//                           style={{ alignItems: 'center', width, backgroundColor: "red", height: "50%", justifyContent: "flex-end" }}
//                         >
//                           <View style={{ flexDirection: "row", height: "30%", width: "100%", justifyContent: "space-between", alignItems: "center", }}>

//                             <View style={{ width: "30%", height: "70%", alignItems: "center", justifyContent: "space-around" }}>
//                               <Image source={Icons.restaurant} style={{ height: "30%", width: "30%" }} resizeMode="contain" />
//                               <Text style={{ fontFamily: Fonts.book, fontSize: fontScale * 28, color: "white" }}>675</Text>
//                               <Text style={{ fontFamily: Fonts.medium, fontSize: fontScale * 10, color: "white" }}>EATEN</Text>
//                             </View>
//                             <View style={{ width: "30%", height: "70%", alignItems: "center", justifyContent: "space-around" }}>
//                               <Image source={Icons.restaurant} style={{ height: "30%", width: "30%" }} resizeMode="contain" />
//                               <Text style={{ fontFamily: Fonts.book, fontSize: fontScale * 28, color: "white" }}>675</Text>
//                               <Text style={{ fontFamily: Fonts.medium, fontSize: fontScale * 10, color: "white" }}>BURNED</Text>
//                             </View>
//                           </View>
//                           <View style={{ flexDirection: "row", height: "30%", width: "100%", justifyContent: "space-between", alignItems: "center", }}>

//                             <View style={{ width: "30%", height: "70%", alignItems: "center", justifyContent: "space-around" }}>
//                               <Image source={Icons.restaurant} style={{ height: "30%", width: "30%" }} resizeMode="contain" />
//                               <Text style={{ fontFamily: Fonts.book, fontSize: fontScale * 28, color: "white" }}>675</Text>
//                               <Text style={{ fontFamily: Fonts.medium, fontSize: fontScale * 10, color: "white" }}>EATEN</Text>
//                             </View>
//                             <View style={{ width: "30%", height: "70%", alignItems: "center", justifyContent: "space-around" }}>
//                               <Image source={Icons.restaurant} style={{ height: "30%", width: "30%" }} resizeMode="contain" />
//                               <Text style={{ fontFamily: Fonts.book, fontSize: fontScale * 28, color: "white" }}>675</Text>
//                               <Text style={{ fontFamily: Fonts.medium, fontSize: fontScale * 10, color: "white" }}>BURNED</Text>
//                             </View>
//                           </View>
//                         </View>
//                       </View>
//                     )
//                   })
//                 }
//               </ScrollView>
//             </View>
//           </ScrollView>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     width: '100%',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   mainHeading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#000',
//     width: '100%',
//     textAlign: 'center',
//   },
//   iconStyle: {
//     fontSize: fontScale * 26,
//     color: '#000',
//     fontWeight: "bold"
//   },
//   headView: {
//     width: '100%',
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   icon: {
//     marginRight: 2,
//   },
//   sideBar: {
//     textAlign: 'center',
//     textAlignVertical: 'top',
//   },
//   descriptionText: {
//     marginBottom: 2,
//   },
//   sideBarSub: {
//     textAlign: 'center',
//   },
//   descriptionSubText: {
//   },
//   flayerContainer: {
//     position: 'absolute',
//     zIndex: 10,
//     bottom: 44,
//     right: 26
//   },
//   headerText: {
//     fontSize: 10,
//     width: '100%',
//     marginTop: 7,
//     textAlign: 'center',
//     backgroundColor: 'transparent'
//   },
//   headerText1: {
//     width: '100%',
//     fontWeight: 'bold',
//     marginTop: 1,
//     textAlign: 'center',
//     backgroundColor: 'transparent'
//   },
//   headerText2: {
//     width: '100%',
//     fontSize: 45,
//     marginTop: -40,
//     textAlign: 'center',
//     backgroundColor: 'transparent'
//   },
//   header: {
//     width: width / 7,
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100%',
//   },
//   description: {
//     width: '100%',
//     borderLeftColor: '#4582D5',
//     borderLeftWidth: 2.5,
//     backgroundColor: '#FFF',
//     paddingTop: 17,
//     paddingBottom: 14,
//     paddingLeft: 14,
//     marginTop: 3,
//     flexDirection: 'column'
//   }
// });
