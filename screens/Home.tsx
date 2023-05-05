import { useEffect, useState } from "react";
import Requests from "../requests/Requests";
import { StyleSheet, Text, View } from 'react-native';

type Info = {
    Name: string
    Email: string
}
const Home = () => {
    const [info, setInfo] = useState<Info>()

    const data = async () => {
        const user = await Requests.get("/")
        setInfo(user.data)
    }
    useEffect(() => {
        data()
    }, [])

    return(
        <View>
            <Text>Name: {info?.Name}</Text>
            <Text>Email: {info?.Email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  text: {
    color: '#fff'
  }
})
export default Home;
