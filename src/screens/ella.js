import * as React from "react";
import {
    TouchableOpacity,
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Image,
    Alert,
    Dimensions,
} from "react-native";
import { Button } from 'react-native-elements';
import Carousel from "../components/Carousel";
import { ella2Data } from "../data/ellaData";

const { width, height } = Dimensions.get("window");

const ella = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={styles.titleText}>Ella</Text>
            <View>
                <View style={{ height: height - 75 }}>
                    <Carousel data={ella2Data} />

                    <ScrollView>
                        <View
                            style={{
                                backgroundColor: "#fafbfc",
                                borderRadius: 10,
                                height: 325,
                                marginTop: 5,
                                marginLeft: 10,
                                marginRight: 10,
                            }}
                        >
                            <Text style={{ margin: 10 }}>
                                Ella is a small town in the Badulla District of Uva Province,
                                Sri Lanka governed by an Urban Council. It is approximately
                                200 kilometres east of Colombo and is situated at an elevation
                                of 1,041 metres above sea level. The area has a rich bio-diversity,
                                dense with numerous varieties of flora and fauna
                        </Text>

                        </View>
                    </ScrollView>
                    </View>
                    <TouchableOpacity>
                        <Button
                            style={styles.buttons}
                            title="Add to Favorites"
                            raised
                            color="fcc221"
                            onPress={() => Alert.alert('Added to favorites')}
                        />
                    </TouchableOpacity>

                </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
                container: {
                backgroundColor: 'white',
    },
    itemStyle: {
                padding: 10,
    },
    titleText: {
                color: "#000",
        fontSize: 28,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 5,
        marginTop: 10,
        marginBottom: 20,
    },

    cards: {
                padding: 15,
        borderColor: "#fcc221",
        borderRadius: 10,
        borderWidth: 1,
        marginVertical: 2,
        marginHorizontal: 16,
    },

    buttons: {

            }
});

export default ella;