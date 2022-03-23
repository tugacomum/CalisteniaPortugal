import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import signup from "../pages/Auth/signup";
import signin from "../pages/Auth/signin";
import reg0 from "../pages/Auth/reg0";
import reg1 from "../pages/Auth/reg1";
import reg2 from "../pages/Auth/reg2";
import reg3 from "../pages/Auth/reg3";
import reg4 from "../pages/Auth/reg4";
import reg5 from "../pages/Auth/reg5";
import reg6 from "../pages/Auth/reg6";
import verifyemail from "../pages/Auth/verifyemailcode";
import requestrecoverpassword from "../pages/Auth/requestrecoverpass";
import recoverpassword from "../pages/Auth/recoverpassword";

import { StatusBar } from "react-native";
const AuthStack = createStackNavigator();

export default function AuthRoutes() {
    return (
        <>
            <StatusBar backgroundColor={'#262626'} barStyle='auto' translucent={true} />
            <AuthStack.Navigator screenOptions={{ headerShown: false }}>
                <AuthStack.Screen name="Reg0" component={reg0} />
                <AuthStack.Screen name="Reg1" component={reg1} />
                <AuthStack.Screen name="Reg2" component={reg2} />
                <AuthStack.Screen name="Reg3" component={reg3} />
                <AuthStack.Screen name="Reg4" component={reg4} />
                <AuthStack.Screen name="Reg5" component={reg5} />
                <AuthStack.Screen name="Reg6" component={reg6} />
                <AuthStack.Screen name="SignIn" component={signin} />
                <AuthStack.Screen name="SignUp" component={signup} />
                <AuthStack.Screen name="RequestRecoverPassword" component={requestrecoverpassword} />
                <AuthStack.Screen name="RecoverPassword" component={recoverpassword} />
                <AuthStack.Screen name="VerifyEmail" component={verifyemail} />
            </AuthStack.Navigator>
        </>
    )
}