import { View, Text , Image, TouchableOpacity} from "react-native"
import { FontAwesome6 } from "@expo/vector-icons"
import { useState } from "react"

type PostProps = {
    username : string, 
    caption : string,
    image? : string,
    pf? : string
}

export default function Post({username, caption, image, pf}:PostProps){

    const[like, setLike] = useState(0)
  return(
    <View style={{backgroundColor:"pink" , padding:15 , borderRadius:8 }}>
        
        <View style={{alignItems:"center" , flexDirection:"row"}}>
            {
                pf && <Image source={{uri: pf}} style={{width:50 , height:50 , borderRadius:50,margin:10 }}  />
            }
            <Text style={{fontSize:20 , fontWeight:700}}>{username}</Text>
        </View>
        
        <View>
            <Text style={{flexDirection:"column"}}>{caption}</Text>
            {
                image &&  <Image source={{uri: image}} style={{width:"100%" ,height:200 , marginTop:10 , marginBottom:10}} />
            }
        </View>

        <View style={{flexDirection:"row" }}>
            <TouchableOpacity onPress={() => setLike (like + 1)}>
                <FontAwesome6 name="heart" size={20} color="black" />
            </TouchableOpacity>
            <Text style={{marginLeft:5 , marginRight:5}}>{like}</Text>
            <FontAwesome6 name="comment" size={20} color="black" />
            <FontAwesome6 name="share" size={20} color="black" style={{marginLeft:"15"}} />
        </View>
    </View>
    
  )
}