import { useEffect, useState } from "react";
import Requests from "../requests/Requests";
import { StyleSheet, Text, View } from 'react-native';

type Info = {
    name: string
    email: string
}
const Home = () => {
    const [info, setInfo] = useState<Info>()
    const [list, setList] = useState<Info[]>()

    const data = async () => {
        const user = await Requests.get("/")
        setInfo(user.data)
    }
    const users = async () => {
        const users = await Requests.get("/users")
        setList(users.data)
    }
    useEffect(() => {
        data()
        users()
    }, [])

    return(
        <View>
            <Text style={styles.bigger}>Singles:</Text>
            <Text style={styles.text}>Name: {info?.name}</Text>
            <Text style={styles.text}>Email: {info?.email}</Text>
            <Text style={styles.bigger}>Multiples:</Text>
            {
                list?.map(user => (
                    <>
                    <Text style={styles.text}>Name: {user.name}</Text>
                    <Text style={styles.text}>Email: {user.email}</Text>
                    </>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
  text: {
    color: '#fff'
  },
  bigger: {
    color: '#fff',
    fontSize: 29,
  }
})
export default Home;
