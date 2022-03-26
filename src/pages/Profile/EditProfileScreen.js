import React from 'react';
import { Input, Item } from "native-base";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Alert } from 'react-native';
import { useState } from 'react';
import { Label } from "native-base";
import { Button } from "native-base";
import { api } from '../../services/api';
import { useAuth } from '../../contexts/auth';

const EditProfileScreen = ({ navigation }) => {
  const URL_REGISTO = 'profile';
  const { user, setUser } = useAuth();
  const [nickname, setNickname] = useState(user.nickname ?? "");
  const [goals, setGoals] = useState(user.goals ?? "");
  const [avatar, setAvatar] = useState(user.avatar ?? "");
  const [bio, setBio] = useState(user.bio) ?? "";
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
      navigation.navigate('Profile');
    } catch (err) {
      Alert.alert('Erro', err.message);
    }
  }
  return (
    <View style={styles.bottomView}>
      <View style={{ padding: 40 }}>
        <View style={{ marginTop: 0 }}>
          <Item floatingLabel style={{ borderColor: '#D21E1F', marginTop: 50 }}>
            <Label>Nickname</Label>
            <Input autoCapitalize='none' autoComplete='off' onChangeText={(text) => setNickname(text)} value={nickname} />
          </Item>
          <Item floatingLabel style={{ borderColor: '#D21E1F', marginTop: 20 }}>
            <Label>Goals</Label>
            <Input autoCapitalize='none' autoComplete='off' onChangeText={(text) => setGoals(text)} value={goals} />
          </Item>
          <Item floatingLabel style={{ borderColor: '#D21E1F', marginTop: 20 }}>
            <Label>Avatar</Label>
            <Input autoCapitalize='none' autoComplete='off' onChangeText={(text) => setAvatar(text)} value={avatar} />
          </Item>
          <Item floatingLabel style={{ borderColor: '#D21E1F', marginTop: 20 }}>
            <Label>Bio</Label>
            <Input autoCapitalize='none' autoComplete='off' onChangeText={(text) => setBio(text)} value={bio} />
          </Item>
        </View>
        <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
          <Button style={styles.loginBtn} onPress={EditProfile}>
            <Text style={{ color: '#ffffff' }}>Submeter</Text>
          </Button>
        </View>
      </View>
    </View>
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
    top: 20
  }
});