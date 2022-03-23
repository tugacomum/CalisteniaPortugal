import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes from './auth.routes';
import AppRoutes from '../routes/app.routes';
import { useAuth } from '../contexts/auth';

export default function Routes() {
    const { user } = useAuth();

    return (
        <NavigationContainer>
            {!user ? <AuthRoutes /> : <AppRoutes />}
        </NavigationContainer>
    );
}