import React, { useRef } from 'react';
import { Searchbar } from 'react-native-paper';
import { Dimensions, StyleSheet } from 'react-native';
import { View, Image, ScrollView, Text, SafeAreaView, RefreshControl } from 'react-native';
import { TouchableOpacity } from 'react-native';
import BottomSheet from "react-native-gesture-bottom-sheet";
import 'react-native-gesture-handler';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function Exercise() {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const bottomSheet = useRef();
    const bottomSheet1 = useRef();
    const bottomSheet2 = useRef();
    const bottomSheet3 = useRef();
    const bottomSheet4 = useRef();
    const bottomSheet5 = useRef();
    return (
        <ScrollView refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
        }>
            <View style={{ padding: 14, marginHorizontal: 10 }}>
                <Searchbar
                    placeholder="Procurar exercícios"
                    onChangeText={onChangeSearch}
                    value={searchQuery} style={{ height: 40 }}
                />
                <SafeAreaView style={styles.container}>
                    <BottomSheet hasDraggableIcon ref={bottomSheet} height={530}>
                        <Image source={require('./../../../assets/img/highplank.jpg')} style={{ width: Dimensions.get('window').width / 1, height: 200, top: -20 }} />
                        <View style={{ paddingLeft: 15, paddingTop: 20 }}>
                            <Text style={{ fontSize: 20, paddingLeft: 15, paddingTop: 20, color: 'black' }}>High Plank</Text>
                            <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 15, color: 'grey' }}>Muscle groups</Text>
                            <View style={{ height: 10 }}></View>
                            <View style={{ paddingLeft: 15 }}>
                                <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 40, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>abs</Text>
                            </View>
                            <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 15, color: 'grey' }}>Level</Text>
                            <View style={{ height: 10 }}></View>
                            <View style={{ flexDirection: 'row', paddingLeft: 15 }}>
                                <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 80, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>beginner</Text>
                                <View style={{ width: 10 }}></View>
                                <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 100, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>intermediate</Text>
                                <View style={{ width: 10 }}></View>
                                <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 80, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>advanced</Text>
                            </View>
                            <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 15, color: 'grey' }}>Equipment</Text>
                            <View style={{ paddingLeft: 15 }}>
                                <View style={{ height: 10 }}></View>
                                <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 115, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>no equipment</Text>
                            </View>
                        </View>
                    </BottomSheet>
                    <BottomSheet hasDraggableIcon ref={bottomSheet1} height={530}>
                        <Image source={require('./../../../assets/img/pumpstuck.jpg')} style={{ width: Dimensions.get('window').width / 1, height: 200, top: -20 }} />
                        <View style={{ paddingLeft: 15, paddingTop: 20 }}>
                            <Text style={{ fontSize: 20, paddingLeft: 15, paddingTop: 20, color: 'black' }}>Tuck Planche Pumps</Text>
                            <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 15, color: 'grey' }}>Muscle groups</Text>
                            <View style={{ height: 10 }}></View>
                            <View style={{ paddingLeft: 15 }}>
                                <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 80, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>shoulders</Text>
                            </View>
                            <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 15, color: 'grey' }}>Level</Text>
                            <View style={{ height: 10 }}></View>
                            <View style={{ flexDirection: 'row', paddingLeft: 15 }}>
                                <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 100, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>intermediate</Text>
                                <View style={{ width: 10 }}></View>
                                <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 80, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>advanced</Text>
                            </View>
                            <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 15, color: 'grey' }}>Equipment</Text>
                            <View style={{ paddingLeft: 15 }}>
                                <View style={{ height: 10 }}></View>
                                <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 100, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>parallettes</Text>
                            </View>
                        </View>
                    </BottomSheet>
                    <BottomSheet hasDraggableIcon ref={bottomSheet2} height={530}>
                        <Image source={require('./../../../assets/img/kneetric.jpg')} style={{ width: Dimensions.get('window').width / 1, height: 200, top: -20 }} />
                        <View style={{ paddingLeft: 15, paddingTop: 20 }}>
                            <Text style={{ fontSize: 20, paddingLeft: 15, paddingTop: 20, color: 'black' }}>Knee Tricep Extensions</Text>
                            <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 15, color: 'grey' }}>Muscle groups</Text>
                            <View style={{ height: 10 }}></View>
                            <View style={{ paddingLeft: 15 }}>
                                <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 130, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>Chest & Triceps</Text>
                            </View>
                            <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 15, color: 'grey' }}>Level</Text>
                            <View style={{ height: 10 }}></View>
                            <View style={{ flexDirection: 'row', paddingLeft: 15 }}>
                                <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 100, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>intermediate</Text>
                                <View style={{ width: 10 }}></View>
                                <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 80, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>advanced</Text>
                            </View>
                            <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 15, color: 'grey' }}>Equipment</Text>
                            <View style={{ paddingLeft: 15 }}>
                                <View style={{ height: 10 }}></View>
                                <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 115, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>no equipment</Text>
                            </View>
                        </View>
                    </BottomSheet>
                    <BottomSheet hasDraggableIcon ref={bottomSheet3} height={530}>
                        <Image source={require('./../../../assets/img/tuckfront.png')} style={{ width: Dimensions.get('window').width / 1, height: 200, top: -20 }} />
                        <View style={{ paddingLeft: 15, paddingTop: 20 }}>
                            <Text style={{ fontSize: 20, paddingLeft: 15, paddingTop: 20, color: 'black' }}>Tuck Front Lever Hold</Text>
                            <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 15, color: 'grey' }}>Muscle groups</Text>
                            <View style={{ height: 10 }}></View>
                            <View style={{ paddingLeft: 15 }}>
                                <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 100, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>Back & Abs</Text>
                            </View>
                            <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 15, color: 'grey' }}>Level</Text>
                            <View style={{ height: 10 }}></View>
                            <View style={{ flexDirection: 'row', paddingLeft: 15 }}>
                                <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 100, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>intermediate</Text>
                                <View style={{ width: 10 }}></View>
                                <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 80, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>advanced</Text>
                            </View>
                            <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 15, color: 'grey' }}>Equipment</Text>
                            <View style={{ paddingLeft: 15 }}>
                                <View style={{ height: 10 }}></View>
                                <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 90, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>pull up bar</Text>
                            </View>
                        </View>
                    </BottomSheet>
                    <BottomSheet hasDraggableIcon ref={bottomSheet4} height={530}>
                        <Image source={require('./../../../assets/img/byke.jpg')} style={{ width: Dimensions.get('window').width / 1, height: 200, top: -20 }} />
                        <View style={{ paddingLeft: 15, paddingTop: 20 }}>
                            <Text style={{ fontSize: 20, paddingLeft: 15, paddingTop: 20, color: 'black' }}>Hanging Bicycles</Text>
                            <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 15, color: 'grey' }}>Muscle groups</Text>
                            <View style={{ height: 10 }}></View>
                            <View style={{ paddingLeft: 15 }}>
                                <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 40, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>abs</Text>
                            </View>
                            <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 15, color: 'grey' }}>Level</Text>
                            <View style={{ height: 10 }}></View>
                            <View style={{ flexDirection: 'row', paddingLeft: 15 }}>
                                <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 80, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>beginner</Text>
                                <View style={{ width: 10 }}></View>
                                <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 100, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>intermediate</Text>
                                <View style={{ width: 10 }}></View>
                                <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 80, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>advanced</Text>
                            </View>
                            <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 15, color: 'grey' }}>Equipment</Text>
                            <View style={{ paddingLeft: 15 }}>
                                <View style={{ height: 10 }}></View>
                                <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 115, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>pull up bar</Text>
                            </View>
                        </View>
                    </BottomSheet>
                    <BottomSheet hasDraggableIcon ref={bottomSheet5} height={530}>
                        <Image source={require('./../../../assets/img/barcrunch.jpg')} style={{ width: Dimensions.get('window').width / 1, height: 200, top: -20 }} />
                        <View style={{ paddingLeft: 15, paddingTop: 20 }}>
                            <Text style={{ fontSize: 20, paddingLeft: 15, paddingTop: 20, color: 'black' }}>Hanging Bar Crunches</Text>
                            <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 15, color: 'grey' }}>Muscle groups</Text>
                            <View style={{ height: 10 }}></View>
                            <View style={{ paddingLeft: 15 }}>
                                <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 40, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>abs</Text>
                            </View>
                            <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 15, color: 'grey' }}>Level</Text>
                            <View style={{ height: 10 }}></View>
                            <View style={{ flexDirection: 'row', paddingLeft: 15 }}>
                                <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 80, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>beginner</Text>
                                <View style={{ width: 10 }}></View>
                                <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 100, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>intermediate</Text>
                                <View style={{ width: 10 }}></View>
                                <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 80, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>advanced</Text>
                            </View>
                            <Text style={{ fontSize: 12, paddingLeft: 15, paddingTop: 15, color: 'grey' }}>Equipment</Text>
                            <View style={{ paddingLeft: 15 }}>
                                <View style={{ height: 10 }}></View>
                                <Text style={{ color: 'white', borderColor: 'black', borderWidth: 1, width: 90, borderRadius: 5, backgroundColor: 'black', textAlign: 'center' }}>pull up bar</Text>
                            </View>
                        </View>
                    </BottomSheet>
                </SafeAreaView>
                <View>
                    <TouchableOpacity onPress={() => bottomSheet.current.show()}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('./../../../assets/img/highplank.png')} style={styles.imgstyle} />
                            <Text style={styles.textexecstyle}>High Plank</Text>
                        </View>
                        <Text style={styles.textgroupstyle}>Abs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => bottomSheet1.current.show()}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('./../../../assets/img/pump.jpg')} style={styles.imgstyle} />
                            <Text style={styles.textexecstyle}>Tuck Planche Pumps</Text>
                        </View>
                        <Text style={styles.textgroupstyle}>Shoulders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => bottomSheet2.current.show()}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('./../../../assets/img/kneetric.jpg')} style={styles.imgstyle} />
                            <Text style={styles.textexecstyle}>Knee Tricep Extensions</Text>
                        </View>
                        <Text style={styles.textgroupstyle}>Chest & Triceps</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => bottomSheet3.current.show()}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('./../../../assets/img/tuckfront.png')} style={styles.imgstyle} />
                            <Text style={styles.textexecstyle}>Tuck Front Lever Hold</Text>
                        </View>
                        <Text style={styles.textgroupstyle}>Back & Abs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => bottomSheet4.current.show()}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('./../../../assets/img/byke.jpg')} style={styles.imgstyle} />
                            <Text style={styles.textexecstyle}>Hanging Bicycles</Text>
                        </View>
                        <Text style={styles.textgroupstyle}>Abs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => bottomSheet5.current.show()}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('./../../../assets/img/barcrunch.jpg')} style={styles.imgstyle} />
                            <Text style={styles.textexecstyle}>Hanging Bar Crunches</Text>
                        </View>
                        <Text style={styles.textgroupstyle}>Abs</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
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