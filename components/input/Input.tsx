import { ViewStyle, View, TextInput, StyleSheet, StyleProp } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

type InputProps = {
    placeholder: string
    label?: string
    rightIcon?: string
    leftIcon?: string
    isInvalid?: boolean
    isWarn?: boolean
    style?: StyleProp<ViewStyle>
}

const style = StyleSheet.create({
    input: {
        borderColor: "white", 
        width: 320, 
        borderWidth: 1, 
        borderRadius: 5, 
        height: 62, 
        paddingLeft: 20 ,
        textAlign:"center",
        color: "white"
    },
    inputWithIcon: {
        marginTop: 15,
        textAlign: "center",
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
})

const Input = (props: InputProps) => {
    if (props.leftIcon) {
        return (
            <View style={ style.inputWithIcon } >
                <Icon name={props.leftIcon}
                    color={"white"}
                    size={30}
                    style={{
                        height: 31,
                        position: "absolute",
                        left: 35
                    }} />
                <TextInput
                    style={style.input}
                    placeholder={props.placeholder}
                    placeholderTextColor={"grey"}
                />
            </View>
        )
    }

    if (props.rightIcon) {
        return (
            <View style={style.inputWithIcon}>
                <TextInput
                    style={style.input}
                    placeholder={props.placeholder}
                    placeholderTextColor={"grey"}
                />
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

    return (
        <View> 
            <TextInput 
                style={style.input} 
                placeholder={ props.placeholder }
                placeholderTextColor={"grey"}
            />
        </View>
    )
}

export default Input;
