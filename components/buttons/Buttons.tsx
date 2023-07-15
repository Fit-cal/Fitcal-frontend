import { Pressable, View, Button, StyleProp, ViewStyle, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';

type ButtonProps = {
    title: string
    style?: StyleProp<ViewStyle>
    leftIcon?: string
    rightIcon?: string 
    isDisabled?: boolean
    color?: string
    onPress?: () => void
}

const style = StyleSheet.create({
    button: {
        marginTop: 15,
        marginBottom: 15,
        borderWidth: 1, 
        borderColor: "white", 
        display: "flex", 
        width: 320, 
        flexDirection: "row", 
        height: 62, 
        alignItems: "center", 
        justifyContent: "center", 
        borderRadius: 5
    },
    buttonWithIcon: {
        marginTop: 15,
        marginBottom: 15,
        borderWidth: 1, 
        borderColor: "white", 
        display: "flex", 
        width: 320, 
        flexDirection: "row", 
        height: 62, 
        alignItems: "center", 
        justifyContent: "center", 
        borderRadius: 5
    },
    disabledButton: {
        marginTop: 15,
        marginBottom: 15,
        display: "flex", 
        width: 320, 
        flexDirection: "row", 
        height: 62, 
        alignItems: "center", 
        justifyContent: "center", 
        borderRadius: 5, 
        borderWidth: 1, 
        borderColor: "grey", 
    }
})


const Buttons = (props: ButtonProps) => {

    if (props.leftIcon) {
        return (
            <View style={props.style ? props.style : style.buttonWithIcon }>
                <Icon name={props.leftIcon}
                    color={"white"}
                    size={30}
                    style={{
                        height: 31,
                        position: "absolute",
                        left: 35
                    }} />
            <Button title={props.title} color={ props.color ? props.color : "white" } />
            </View>
        )
    }

    if (props.rightIcon) {
        return (
            <View style={props.style ? props.style : style.buttonWithIcon }>
                <Button title={props.title} color={"white"} />
                <Icon name={props.rightIcon}
                    color={"white"}
                    size={30}
                    style={{
                        height: 31,
                        position: "absolute",
                        right: 35
                    }}
                />
            </View>
        )
    }

    if (props.isDisabled) {
        return (
        <View style={props.style ? props.style : style.disabledButton}>
            <Button title={props.title} color={ props.color ? props.color : "white" } />
        </View>

        )
    }

    return (
        <View style={props.style ? props.style : style.button}>
            <Button title={props.title} color={ props.color ? props.color : "white" } />
        </View>
    )
}

export default Buttons;