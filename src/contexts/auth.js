import { createContext, useContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    useEffect(() => {
        checkToken()
    }, [])
    const [user, setUser] = useState(null);
    async function signIn({ login, password }) {
        try {
            const { token, user } = await api.post('/login', {
                login,
                password
            }).then(r => r.data);
            api.defaults.headers['authorization'] = `Bearer ${token}`;
            AsyncStorage.setItem('@calistenia_pt:token', token);
            setUser(user);
        } catch (err) {
            Alert.alert("Erro", err.response.data.message);
        }
    }

    async function checkToken() {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            api.defaults.headers['authorization'] = `Bearer ${token}`;
            const user = await api.get('profile').then(r => r.data);
            setUser(user);
        }
    }

    function logout() {
        setUser(null);
        delete api.defaults.headers['authorization'];
    }

    return (
        <AuthContext.Provider value={{ user, signIn, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}