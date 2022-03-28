import React from 'react';
import { Input, Item } from "native-base";
import {
  View,
  Text,
  StyleSheet,
  Dimensions, Image, ScrollView
} from 'react-native';
import { Avatar } from 'react-native-paper';
import { Alert } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from "native-base";
import { api } from '../../services/api';
import { useAuth } from '../../contexts/auth';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const EditProfileScreen = ({ navigation }) => {
  const URL_REGISTO = 'profile';
  const { user, setUser, logout } = useAuth();
  const [nickname, setNickname] = useState(user.nickname ?? "");
  const [goals, setGoals] = useState(user.goals ?? "");
  const [avatar, setAvatar] = useState(user.avatar ?? "");
  const [bio, setBio] = useState(user.bio) ?? "";
  const [email] = useState(user.email) ?? "";
  const EditProfile = async (e) => {
    e.preventDefault();
    try {
      if (nickname.length < 6 || nickname === "")
        throw new Error('Nickname tem que ser maior que 6 e não pode ser nulo')
      else if (goals.length < 0 || goals === "")
        throw new Error('Objetivos têm que ter um comprimento maior que 0')
      else if (bio.length < 0 || bio === "")
        throw new Error('Biografia inválida')
      const response = await api.patch(URL_REGISTO, { nickname, goals, avatar, bio });
      setUser({ ...user, nickname, goals, avatar, bio });
      Alert.alert('Perfil atualizado com sucesso');
      navigation.navigate('Profile');
    } catch (err) {
      Alert.alert('Erro', err.message);
    }
  }
  return (
  <>
      <SafeAreaView>
        <ScrollView>
          <Image source={require('./../../../assets/img/pfpback.jpg')} style={{ width: Dimensions.get('window').width / 1, height: 140, position: 'absolute', opacity: 0.8 }} />
          <MaterialCommunityIcons name="arrow-left" color='white' style={{ padding: 15, position: 'absolute' }} size={30} onPress={() => navigation.navigate('Profile')} />
          <Avatar.Image source={require('./../../../assets/img/teste4.jpg')} size={120} style={{ alignSelf: 'center', top: 90 }}/>
          <MaterialCommunityIcons name="camera" color='white' style={{ position: 'relative', top: 50, alignSelf: 'center' }} size={30} />
          <View style={{ top: 70 }}>
            <Text style={{ color: 'black', fontSize: 15, top: 0, left: 20, fontWeight: 'bold' }}>O teu perfil</Text>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} >
              <Input style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' onChangeText={(text) => setNickname(text)} value={nickname} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -10, fontWeight: 'bold' }}>Nickname</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }}>
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={email} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Email</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }}>
              <Input style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={'por fazer'} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Nome</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }}>
              <Input style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={'por fazer'} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Cidade</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }}>
              <Input style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={'por fazer'} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>País</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }}>
              <Input style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' onChangeText={(text) => setBio(text)} value={bio} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Bio</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'transparent', height: 45, backgroundColor: 'transparent', color: 'black', top: 10 }}>
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15, fontWeight: 'bold' }} autoCapitalize='none' autoComplete='off' value={'Configurações de treino'} />
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }}>
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={'por fazer'} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Permitir sons</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'transparent', height: 45, backgroundColor: 'transparent', color: 'black', top: 10 }}>
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15, fontWeight: 'bold' }} autoCapitalize='none' autoComplete='off' value={'Perfil fitness'} />
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} onPress={() => navigation.navigate('Reg1')}>
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={'por fazer'} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Género</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} onPress={() => navigation.navigate('Reg2')}>
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={'por fazer'} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Peso</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} onPress={() => navigation.navigate('Reg3')}>
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={'por fazer'} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Altura</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} onPress={() => navigation.navigate('Reg4')}>
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={'por fazer'} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Nível fitness</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} onPress={() => navigation.navigate('Reg5')}>
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={'por fazer'} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Objetivos</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} onPress={() => navigation.navigate('Reg6')}>
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={'por fazer'} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Máx. PullUps</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} onPress={() => navigation.navigate('Reg6')}>
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={'por fazer'} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Máx. PushUps</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} onPress={() => navigation.navigate('Reg6')}>
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={'por fazer'} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Máx. Squads</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} onPress={() => navigation.navigate('Reg6')}>
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={'por fazer'} /><Text style={{ alignSelf: 'flex-end', fontSize: 15, right: 10, top: -12, fontWeight: 'bold' }}>Máx. Dips</Text>
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'transparent', height: 45, backgroundColor: 'transparent', color: 'black', top: 10 }}>
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15, fontWeight: 'bold' }} autoCapitalize='none' autoComplete='off' value={'Conta'} />
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} >
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={'Trocar password'} /><MaterialCommunityIcons name="arrow-right" color='white' style={{ padding: 15, position: 'absolute', color:'black', left: Dimensions.get('window').width / 1.2 }} size={30} onPress={() => navigation.navigate('Profile')} />
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} >
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={'Trocar endereço email'} /><MaterialCommunityIcons name="arrow-right" color='white' style={{ padding: 15, position: 'absolute', color:'black', left: Dimensions.get('window').width / 1.2 }} size={30} onPress={() => navigation.navigate('Profile')} />
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'transparent', height: 45, backgroundColor: 'transparent', color: 'black', top: 10 }}>
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15, fontWeight: 'bold' }} autoCapitalize='none' autoComplete='off' value={'App'} />
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} >
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={'Avalia a app'} /><MaterialCommunityIcons name="arrow-right" color='white' style={{ padding: 15, position: 'absolute', color:'black', left: Dimensions.get('window').width / 1.2 }} size={30} onPress={() => navigation.navigate('Profile')} />
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} >
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={'Termos e condições'} /><MaterialCommunityIcons name="arrow-right" color='white' style={{ padding: 15, position: 'absolute', color:'black', left: Dimensions.get('window').width / 1.2 }} size={30} onPress={() => navigation.navigate('Profile')} />
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} >
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={'Contacta-nos'} /><MaterialCommunityIcons name="arrow-right" color='white' style={{ padding: 15, position: 'absolute', color:'black', left: Dimensions.get('window').width / 1.2 }} size={30} onPress={() => navigation.navigate('Profile')} />
            </Item>
            <View style={{ height: 2 }}></View>
            <Item style={{ borderWidth: 1, borderColor: 'white', height: 45, backgroundColor: 'white', color: 'black', top: 10 }} onPress={() => logout()}>
              <Input editable={false} style={{ textAlignVertical: 'center', left: 15, fontSize: 15 }} autoCapitalize='none' autoComplete='off' value={'Terminar sessão'} /><MaterialCommunityIcons name="logout" color='white' style={{ padding: 15, position: 'absolute', color:'black', left: Dimensions.get('window').width / 1.2 }} size={30} onPress={() => navigation.navigate('Profile')} />
            </Item>
            <View style={{height: 50}}></View>
          </View>
          <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
            <Button style={styles.loginBtn} onPress={EditProfile}>
              <Text style={{ color: '#ffffff' }}>Submeter</Text>
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandViewText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  bottomView: {
    flex: 1.5,
    backgroundColor: '#ffffff',
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  forgotPassView: {
    height: 50,
    marginTop: 20,
    flexDirection: 'row',
  },
  loginBtn: {
    alignSelf: 'center',
    backgroundColor: '#F95A41',
    width: Dimensions.get('window').width / 2,
    justifyContent: 'center',
    borderRadius: 10,
    top: 100
  }
});