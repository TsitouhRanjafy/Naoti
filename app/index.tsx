import { Dimensions, StyleSheet, Text, TextInput, Image, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemedText } from '@/components/ThemedText'
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
const color = "#FBFCF8";
const color2 = "#F0F8FF";
const color3 = "#242424"
const Drawer = createDrawerNavigator();

const index = () => {

    const [textInput,setTextInput] = useState<string>("Naoti")

  return (
    <SafeAreaView style={styles.main}>
        <View style={styles.headerContainer}>
            <View style={styles.header}>
                <Ionicons name='menu' color={color3} size={40}> </Ionicons>
                <Image source={require("@/assets/images/iconChercher24.png")}></Image>
            </View>
        </View>

        {/* Barre de recherche */}
        <View style={styles.searchBarContainer}>

            <View style={styles.searchBar}>
                <TextInput style={styles.textInput}>
                </TextInput>
                <View style={styles.iconSearchContainer}>
                    <Ionicons name='search' style={styles.iconSearch} size={20} color={color3}></Ionicons>
                </View>
            </View>
        </View>

        <View style={styles.listContainer}>
            <View style={styles.list}>
                <ThemedText style={styles.titre}>list</ThemedText>
            </View>
        </View>
        
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
    main : {
        backgroundColor : color,
    },
    titre : {   
        color : "red"
    },
    headerContainer : {
        display : "flex",
        justifyContent : "center",
        flexDirection : "row",
    },
    header : {
        height :  (10 * height ) / 100,
        display :"flex",
        justifyContent : "space-between",
        alignItems : "center",
        flexDirection : "row",
        backgroundColor : color,
        width : width - 30,
        borderWidth : 1
    },
    searchBarContainer : {
        display : "flex",
        justifyContent : "center",
        flexDirection : "row",
    },
    searchBar : {
        height :  (5 * height ) / 100,
        width : width - 30,
        display : "flex",
        justifyContent : "center",
        flexDirection : "row",
        alignItems : "center",
        overflow : "hidden",
        backgroundColor : color,
        borderTopLeftRadius : 50,
        borderBottomLeftRadius : 50,
        borderWidth : 1
        
    },
    textInput : {
        backgroundColor : color2,
        height : 50,
        width : width - 70,
        color : color,
        paddingLeft : 8,
    },
    iconSearchContainer : {
        display : "flex",
        justifyContent : "center",
        flexDirection : "row",
        alignItems : "center",
        backgroundColor : color2,
        height : 40,
        width : 40,
        borderBottomRightRadius : 50,
        borderTopRightRadius : 50,
        
    },
    iconSearch : {
        padding : 0,
        margin : 0,
    },
    listContainer : {
        display : "flex",
        justifyContent : "center",
        flexDirection : "row",
        alignItems : "center"
    },
    list : {
        height :  (80 * height ) / 100,
        backgroundColor : color,
        width : width - 30,
    }
})