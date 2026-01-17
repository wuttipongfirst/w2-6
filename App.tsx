import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Post from './components/Post';
import postData from './post-data.json'


export default function App() {
  return (
    <SafeAreaView style={{paddingHorizontal:20, gap:10}}>
      <View style={{backgroundColor:"pink" , width:"100%" , height:50 , borderRadius:5 }}>
        <Text style={{fontSize:30 , fontWeight:5}}>Instagram</Text>
      </View>
      <FlatList
        data={postData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => 
        <Post
          pf={item.pf}
          username={item.username}
          caption={item.caption}
          image={item.image}
        
        />}
        contentContainerStyle={{gap:10}}
      />

    </SafeAreaView>
  );
}


