import { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";

let Post = () => {

  let [img, setimg] = useState(require('./assets/instagram wow/like.png'));
  let [likeNumber, setlikeNumber] = useState(0);

  function likePost(){
    setimg(require('./assets/instagram wow/likeada.png'));
    setlikeNumber(likeNumber + 1000);
  }


  return(
  <View> 
    <View style={stylesFeed.profileArea}>
      <Image style={stylesFeed.profilePicture} source={require("./assets/instagram wow/palhaco.png")}></Image>
      <Text style={stylesFeed.username}>Iranildo Francisco</Text>
    </View>

    <Image style={stylesFeed.post} source={require("./assets/instagram wow/hd.jpg")}></Image>

    <View style={stylesFeed.likeArea}>
        <TouchableOpacity onPress={likePost}>
          <Image style={stylesFeed.icons} source={img}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={stylesFeed.icons} source={require("./assets/instagram wow/send.png")}></Image>
        </TouchableOpacity>
      </View>
      <View style={stylesFeed.descriptionArea}>
        <Text style={stylesFeed.descriptionName}>Iranildo Francisco</Text>
        <Text style={stylesFeed.description}>SHOW AO VIVO NO CIRCO DO LIMÃOZINHO EM ARACÁTI PARÓDIAS & PIADAS!!! Traga sua família e venha se divertir no show do Caçarola! Sucesso!</Text>
      </View>
    <Text style={stylesFeed.like}>{likeNumber} curtidas</Text>
  </View>
  );
};

export default function App(){

  return (
    <View style={stylesFeed.background}>

      <View style={stylesFeed.menuArea}>
        <TouchableOpacity>
          <Image source={require("./assets/instagram wow/logo.png")}></Image>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={stylesFeed.sendImage} source={require("./assets/instagram wow/send.png")}></Image>
        </TouchableOpacity>

      </View>
      <ScrollView>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </ScrollView>
    </View>
  );
}

let stylesFeed = StyleSheet.create({
  background:{
    flex:1,
  },
  menuArea: {
    height: 55,
    backgroundColor: "#FFF",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    borderColor: '#000',
    elevation: 1,
  },
  sendImage: {
    width:23,
    height:23,
  },
  profileArea:{
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  profilePicture:{
    width: 50,
    height:50,
    borderRadius: 25,
  },
  username:{
    fontSize:22,
    textAlign: 'left',
    color: '#000',
    marginTop:-24,
    padding:8
  },
  post:{
    flex:1,
    width: "100%",
    height: 400,
    alignItems: 'center',
  },
  likeArea: {
    flexDirection: 'row',
    padding: 5,

  },
  icons:{
    width:33,
    height:33,
    marginRight: 7,
  },
  descriptionArea: {
    flexDirection: 'row,',
  },
  descriptionName:{
    fontSize:18,
    fontWeight: 'bold',
    color: '#000',
    padding: 5,
  },
  description:{
    padding: 5,
    fontSize:15,
    color: '#000',
  },
  like: {
    fontWeight: 'bold',
    marginLeft: 5,
    marginBottom: 12,
  }
})