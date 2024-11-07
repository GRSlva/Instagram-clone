import { useState } from "react";
import { useFonts } from "expo-font";
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


export function Login({changePage}){
  let emailList = ['email1', 'email2']
  let [login, setlogin] = useState("");
  let [password, setpassword] = useState("");
  let exit = "<"

  function doLogin(){
    for(let i = 0; i < emailList.length; i++){
      if (login == emailList[i] && password == "12345"){
        changePage("Feed");
      }else{
        if (login != emailList[i]){
          alert(emailList[i]);
        }
        else{
          alert('senha fudida');
        }
      }
    }
    
  }

  const [loaded, error] = useFonts({
    'Reem-kufi-fun': require('./assets/instagram wow/fonts/Reem_Kufi_Fun/reemkufifun.ttf'),
  });

  return(
    <View style={stylesLogin.background}>

      <View style={stylesLogin.menuArea}>
        <Text>
          {exit}
        </Text>

      </View>

      <Text style={stylesLogin.text}>Português(Brasil)</Text>
      <Image style={stylesLogin.logo} source={require("./assets/instagram wow/logoLogin.png")}></Image>

      <TextInput style={stylesLogin.input} placeholder="Nome de usuário, email..." onChangeText={setlogin}></TextInput>
      <TextInput style={stylesLogin.input} placeholder="Senha..." onChangeText={setpassword}></TextInput>

      <TouchableOpacity style={stylesLogin.loginButton} onPress={doLogin}> 
        <Text style={stylesLogin.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={stylesLogin.loginButtonText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={stylesLogin.loginButtonAccount}>
        <Text style={stylesLogin.loginButtonTextAccount}>Criar nova conta</Text>
      </TouchableOpacity>

    </View>

  );

}

export function Feed(){

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

let stylesLogin = StyleSheet.create({
  background:{
      flex: 1,
      backgroundColor: '#152C6D',
      alignItems: 'center',
  },
  menuArea: {
    height: 55,
    flexDirection: 'row',
    padding: 5,
  },
  text: {
    color: '#fff',
    fontFamily: 'Reem-kufi-fun',
    fontSize: 20,
    marginTop:90,
  },
  logo:{
    height:75,
    width:75,
    marginTop:70,
    marginBottom:70,
  },
  input:{
    width:300,
    height:50,
    backgroundColor: '#384680',
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#A39F9F',
    padding:10,
    marginBottom: 20,
    color: "#A39F9F",
  },

  loginButton: {
    width: 300,
    height: 40,
    backgroundColor: '#1889F2',
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "#1889F2",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  loginButtonText: {
    color: "white",
    fontSize: 16
  },

  loginButtonTextPassword: {
    color: "white",
    fontSize: 16,
  },

  loginButtonTextAccount: {
    color: "#1889F2",
    fontSize: 16,
  },
  
  loginButtonAccount: {
    width: 300,
    height: 40,
    backgroundColor: '#152C6D',
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "#1889F2",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  }
});

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
});

export default function App(){
  let [page, setpage] = useState('Login')

  function changeToNewPage(newPage){
    setpage(newPage);
  }

  function render(){
    if (page == 'Login'){
      return <Login changePage={changeToNewPage}></Login>
    }
    if (page == 'Feed'){
      return <Feed></Feed>

    }
  }

  return(
    <View style={stylesApp.App}>
      {render()}
    </View>
  )
}

const stylesApp = StyleSheet.create({
  App:{
    flex:1,
  }
})