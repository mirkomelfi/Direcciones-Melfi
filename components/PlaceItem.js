import { COLORS } from "../constants";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const PlaceItem = (title,image,address,onSelect) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
        <Image style={styles.imagen} source={{uri:image}} />
        <View style={styles.infoContainer}  >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.address}>{address}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default PlaceItem

const styles = StyleSheet.create({
    container:{
        borderBottomColor:"#ccc",
        borderBottomWidth:1,
        paddingVertical:16,
        paddingHorizontal:30,
        flexDirection:"row",
        alignItems:"center"
    },
    imagen:{
        borderRadius:35,
        backgroundColor:COLORS.PEACH_PUFF,
        width:70,
        height:70
    },
    infoContainer:{
        marginLeft:25,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        color:COLORS.BLUSH,
        fontSize:18,
        marginBottom:6
    },
    address:{
        color:"#777",
        fontSize:16,
    },

})