import { FlatList } from 'react-native'
import React from 'react'
import Notification from '../../components/general/notification/notification'
import { Container } from './notificationsScreenStyles'
import { StyleSheet } from 'react-native'

const NotificationScreen = ({ navigation }, notification) => {

  const DATA = [
    {
      id:"1",
      title: "Tu publicación ha recibido un me gusta.",
      time: "23:18",
      content: "A Jenny Doe le gusta tu publicación."
    },
    {
      id:"2",
      title: "Tu publicación ha recibido un nuevo comentario.",
      time: "23:18",
      content: "Toca aquí para leerlo."
    },
    {
      id:"3",
      title: "Tu publicación ha recibido un nuevo comentario.",
      time: "23:10",
      content: "Toca aquí para leerlo."
    },
    {
      id:"4",
      title: "Tu publicación ha recibido un me gusta.",
      time: "23:18",
      content: "A Nicolás Sira le gusta tu publicación."
    },
  ]

  return (
    <>
      <Container>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Notification notification={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({})