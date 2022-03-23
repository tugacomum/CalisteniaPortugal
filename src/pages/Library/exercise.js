import React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { View, Image, ScrollView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

export default function Exercise({navigation}) {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const renderInner = () => (
        <Text>Hello</Text>
    )
    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle} ></View>
            </View>
        </View>
    )
    const bs = React.createRef();
    const fall = new Animated.Value(1);
    return (
        <View style={{ padding: 14, marginHorizontal: 10 }}>
            <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
            <Searchbar
                placeholder="Procurar exercícios"
                onChangeText={onChangeSearch}
                value={searchQuery} style={{ height: 40, top: -8 }}
            />
            <ScrollView>
                <View>
                    <TouchableOpacity onPress={() => bs.current.snapPoints(0)}>
                    <View style={{ flexDirection: 'row', paddingTop: 15 }}>
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
    imgstyle:{
        borderRadius: 10, width: 115, height: 85
    },
    textexecstyle: {
        fontSize: 15, paddingLeft: 15, paddingTop: 20, color: 'black'
    },
    textgroupstyle: {
        fontSize: 12, paddingLeft: 130, color: 'grey', top: -40
    }
});