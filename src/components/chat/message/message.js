import { StyleSheet, View } from 'react-native'
import {
    Container,
    Card,
    MessageInfo,
    MessageInfoText,
    MessageTime,
    MessageText,
} from './messageStyles'

const Message = ({ message }) => {

    const messageStyle = message.sentByUser ? styles.sent : styles.received
    return (
        <>
            <Container>
                <Card style={messageStyle}>
                    <MessageInfo>
                        <MessageInfoText style={messageStyle}>
                            <MessageText style={messageStyle}>{message.text}</MessageText>
                            <MessageTime style={messageStyle}>{message.time}</MessageTime>
                        </MessageInfoText>
                    </MessageInfo>
                </Card>
            </Container>
        </>
    )
}

export default Message

const styles = StyleSheet.create({
    sent: {
        backgroundColor: "#5d08da",
        color: "white",
        borderBottomEndRadius: 0,
        alignSelf: 'flex-end',
        textAlign: 'right'
    },
    received: {
        backgroundColor: "#c00c86",
        color: "white",
        borderBottomLeftRadius: 0,
        alignSelf: 'flex-start',
        textAlign: 'left'
    }
})
