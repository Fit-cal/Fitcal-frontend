import { View, Text, Image } from "react-native";
import { FC } from "react";
import Buttons from "../components/buttons/Buttons";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from '../App';

type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>
type DetailSceenRouteProp = RouteProp<RootStackParamList, 'Top'>

export type DetailsScreenProps = {
    route: DetailSceenRouteProp;
    navigation: RootStackNavigationProp;
}


const Top:FC<DetailsScreenProps> = ({route, navigation}) => {
    const { name, picture } = route.params;

    return (
        <View style={{backgroundColor: "#000" ,flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text style={{color:"white"}}>{ name }</Text>
            <Image source={{ uri: picture }} style={{ width: 90, height: 90 }} />
            <Buttons title="to to setting" onPress={() => navigation.navigate("Setting")} />
        </View>
    )
}

export default Top;
