import React from 'react'
import { View, Text, StyleSheet,Button,TextInput,ScrollView } from 'react-native'
import { COLORS } from '../constants'
import { addPlace } from '../store/places.actions'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import ImageSelector from '../components/ImageSelector'

const NewPlaceScreen = ({navigation}) => {
    const dispatch=useDispatch()
    const [title,setTitle]=useState("")
    const handleTitleChange=text=>setTitle(text)
    const handleSave=()=>{
        dispatch(title);
        navigation.navigate("Direcciones")
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text}>Titulo</Text>
                <TextInput style={styles.input} onChangeText={handleTitleChange} value={title} />
                <ImageSelector onImage={(image)=>console.log(image)} />
                <Button color={COLORS.MAROON} title="Grabar direccion" onPress={()=>{handleSave}}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:20
    },
    text:{
        fontSize:18,
        marginBottom:16
    },
    input: {
        borderBottomColor:"#ccc",
        borderBottomWidth:1,
        marginBottom:10,
        paddingHorizontal:12,
        paddingVertical:4
    },

})

export default NewPlaceScreen
