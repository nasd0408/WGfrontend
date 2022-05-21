import React, { useState } from 'react'
import { TouchableOpacity, ScrollView, View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native'
import Modal from "react-native-modal";
import { windowHeight } from '../../../utils/Dimentions';

import {
    Card,
    MessageInfoText,
    MessageInfo,
    UserImg,
    UserName,
    MessageTime,
    LastMessage,
    ModalContainer,
    ListHeaderContainer,
    ResponseForm
} from './conversationStyles'
import Message from '../message/message';

const Conversation = ({ conversation }) => {

    let profilePic
    switch (conversation.userImg) {
        case '1':
            profilePic = require('../../../../assets/users/user-1.jpg')
            break;
        case '2':
            profilePic = require('../../../../assets/users/user-2.jpg')
            break;
        case '3':
            profilePic = require('../../../../assets/users/user-3.jpg')
            break;
        case '4':
            profilePic = require('../../../../assets/users/user-4.jpg')
            break;
        case '5':
            profilePic = require('../../../../assets/users/user-5.jpg')
            break;
        case '6':
            profilePic = require('../../../../assets/users/user-6.jpg')
            break;
        case '7':
            profilePic = require('../../../../assets/users/user-7.jpg')
            break;
        case '8':
            profilePic = require('../../../../assets/users/user-8.jpg')
            break;
    }

    const [modalChatVisible, setModalChatVisible] = useState(false)
    const messagesArray = conversation.messages

    return (
        <>
            <Modal
                propagateSwipe={true}
                isVisible={modalChatVisible}
                onSwipeComplete={() => setModalChatVisible(false)}
                onBackButtonPress={() => setModalChatVisible(false)}
                swipeDirection={[]}
            >
                <ModalContainer>
                    <ScrollView style={styles.scroll}>
                        <View flex={1} onStartShouldSetResponder={() => true}>
                            <FlatList
                                ListHeaderComponent={<ListHeaderContainer>
                                    <Text style={{ color: 'white' }}>Chat con {conversation.userName}</Text>
                                </ListHeaderContainer>}
                                style={{ width: '100%', padding: 10, height: (windowHeight - 100) }}
                                data={messagesArray}
                                renderItem={({ item }) => <Message message={item} />}
                                keyExtractor={item => item.id}
                                showsVerticalScrollIndicator={true}
                            ></FlatList>
                        </View>
                    </ScrollView>
                    <ResponseForm>
                        <TextInput
                            placeholder='Envía un mensaje'
                            style={styles.input}
                        />
                        <TouchableOpacity>
                            <Button title='Enviar' style={styles.button} color="#5d08da" fontSize={22}></Button>
                        </TouchableOpacity>
                    </ResponseForm>
                </ModalContainer>
            </Modal>

            <TouchableOpacity onPress={() => setModalChatVisible(true)}>
                <Card>
                    <MessageInfo>
                        <UserImg source={profilePic} ></UserImg>
                        <MessageInfoText>
                            <UserName>{conversation.userName}</UserName>
                            <MessageTime>{conversation.lastMessageTime}</MessageTime>
                        </MessageInfoText>
                    </MessageInfo>
                    <LastMessage>
                        {conversation.lastMessage}
                    </LastMessage>
                </Card>
            </TouchableOpacity>
        </>
    )
}

export default Conversation
const styles = StyleSheet.create({
    input: {
        paddingLeft: 3,
        fontSize: 16,
        color: '#000',
        width: '100%',
        backgroundColor: '#ccc',
    },
    scroll:{
        width: '100%',
    }
})