export const ADD_PLACE = 'ADD_PLACE'
import * as FileSystem from "expo-File-System"


export const addPlace = (title,image) => {
    return async dispatch=>{ 
        const fileName=image.split("/").pop()
        const path=FileSystem.documentDirectory+fileName
        try{
            FileSystem.moveAsync({
                from:image,
                to:path,
            });
        }catch(error){
            console.log(error)
        }
        dispatch({type:ADD_PLACE,payload:{title,image:path}})
    };
};