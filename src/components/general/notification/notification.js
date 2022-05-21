import React from 'react'
import { TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
    Card,
    NotificationInfoText,
    NotificationInfo,
    Title,
    Time,
    NotificationText,
    InteractionWrapper,
    Interaction,
    InteractionText
} from './notificationStyles'


const Notification = ({ notification }) => {

    const closeIcon = 'close'
    const closeIconColor = '#C00C86'
    const closeText = 'Eliminar'

    return (

        <Card>
            <NotificationInfo>
                <NotificationInfoText>
                    <Title>{notification.title}</Title>
                    <Time>{notification.time}</Time>
                </NotificationInfoText>
            </NotificationInfo>
            <NotificationText>
                {notification.content}
            </NotificationText>
            <InteractionWrapper>
                <TouchableOpacity>
                    <Interaction>
                        <Ionicons name={closeIcon} size={25} color={closeIconColor} />
                        <InteractionText>{closeText}</InteractionText>
                    </Interaction>
                </TouchableOpacity>
            </InteractionWrapper>
        </Card>

    )
}

export default Notification