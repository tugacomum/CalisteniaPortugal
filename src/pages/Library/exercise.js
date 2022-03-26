import React, { useRef } from 'react';
import { Searchbar } from 'react-native-paper';
import { Dimensions, StyleSheet } from 'react-native';
import { View, Image, ScrollView, Text, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import BottomSheet from "react-native-gesture-bottom-sheet";
import 'react-native-gesture-handler';

export default function Exercise() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const bottomSheet = useRef();
    return (
        <View style={{ padding: 14, marginHorizontal: 10 }}>
            <Searchbar
                placeholder="Procurar exercícios"
                onChangeText={onChangeSearch}
                value={searchQuery} style={{ height: 40, top: -8 }}
            />
            <SafeAreaView style={styles.container}>
                <BottomSheet hasDraggableIcon ref={bottomSheet} height={530}>
                    <Image source={require('./../../../assets/img/highplank.jpg')} style={{ width: Dimensions.get('window').width / 1, height: 200, top:-15 }} />
                    <View style={{ paddingLeft: 15, paddingTop: 20 }}>
                        <Text style={{ fontSize: 20, paddingLeft: 15, paddingTop: 20, color: 'black' }}>High Plank</Text>
                        <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 15, color: 'grey' }}>Muscle groups</Text>
                        <View style={{ height: 10 }}></View>
                        <View style={{paddingLeft: 15}}>
                            <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 40, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>abs</Text>
                        </View>
                        <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 15, color: 'grey' }}>Level</Text>
                        <View style={{ height: 10 }}></View>
                        <View style={{ flexDirection: 'row', paddingLeft: 15 }}>
                            <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 80, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>beginner</Text>
                            <View style={{width: 10}}></View>
                            <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 100, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>intermediate</Text>
                            <View style={{width: 10}}></View>
                            <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 80, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>advanced</Text>
                        </View>
                        <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 15, color: 'grey' }}>Equipment</Text>
                        <View style={{paddingLeft: 15}}>
                        <View style={{ height: 10 }}></View>
                            <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 115, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>no equipment</Text>
                        </View>
                    </View>
                </BottomSheet>
            </SafeAreaView>
            <ScrollView>
                <View>
                    <TouchableOpacity onPress={() => bottomSheet.current.show()}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('./../../../assets/img/highplank.png')} style={styles.imgstyle} />
                            <Text style={styles.textexecstyle}>High Plank</Text>
                        </View>
                        <Text style={styles.textgroupstyle}>Abs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('./../../../assets/img/pump.jpg')} style={styles.imgstyle} />
                            <Text style={styles.textexecstyle}>Tuck Planche Pumps</Text>
                        </View>
                        <Text style={styles.textgroupstyle}>Shoulders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('./../../../assets/img/kneetric.jpg')} style={styles.imgstyle} />
                            <Text style={styles.textexecstyle}>Knee Tricep Extensions</Text>
                        </View>
                        <Text style={styles.textgroupstyle}>Chest & Triceps</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('./../../../assets/img/tuckfront.png')} style={styles.imgstyle} />
                            <Text style={styles.textexecstyle}>Tuck Front Lever Hold</Text>
                        </View>
                        <Text style={styles.textgroupstyle}>Back & Abs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('./../../../assets/img/byke.jpg')} style={styles.imgstyle} />
                            <Text style={styles.textexecstyle}>Hanging Bicycles</Text>
                        </View>
                        <Text style={styles.textgroupstyle}>Abs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('./../../../assets/img/barcrunch.jpg')} style={styles.imgstyle} />
                            <Text style={styles.textexecstyle}>Hanging Bar Crunches</Text>
                        </View>
                        <Text style={styles.textgroupstyle}>Abs</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 22,
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    view: {
        margin: 10,
    },
    imgstyle: {
        borderRadius: 10, width: 115, height: 85
    },
    textexecstyle: {
        fontSize: 15, paddingLeft: 15, paddingTop: 20, color: 'black'
    },
    textgroupstyle: {
        fontSize: 12, paddingLeft: 130, color: 'grey', top: -40
    },
    button: {
        height: 50,
        width: 150,
        backgroundColor: "#140078",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        shadowColor: "#8559da",
        shadowOpacity: 0.7,
        shadowOffset: {
            height: 4,
            width: 4,
        },
        shadowRadius: 5,
        elevation: 6,
    },
    text: {
        color: "white",
        fontWeight: "600",
    },
});