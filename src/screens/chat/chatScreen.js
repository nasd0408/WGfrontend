import { FlatList } from 'react-native'
import React from 'react'
import Conversation from '../../components/chat/conversation/conversation'
import { Container } from './chatScreenStyles'

const ChatScreen = ({ navigation }, conversation) => {

  const DATA = [
    {
      id:"1",
      userImg: "1",
      userName: "Jenny Doe",
      lastMessageTime: "18:15",
      lastMessage: "Excelente, nos vemos en un rato!",
      messages: [
        {
          id: "1",
          sentByUser: true,
          time: '17:59',
          text: 'Hola, ¿Cómo estás?'
        },
        {
          id: "2",
          sentByUser: false,
          time: '18:00',
          text: 'Bien, y tu como estás?'
        },
        {
          id: "3",
          sentByUser: true,
          time: '18:10',
          text: '¡Estoy muy bien! ¿Te gustaría jugar a Battlefield 4 en 20 minutos?'
        },
        {
          id: "4",
          sentByUser: true,
          time: '18:11',
          text: 'Ayer estuve jugando con Michael y nos reimos un montón'
        },
        {
          id: "5",
          sentByUser: false,
          time: '18:13',
          text: '¡Me encantaría! Tengo mucho tiempo sin mirarlo, pero siempre es divertido jugarlo con un escuadrón de amigos. ¿Puedo invitar a Nicolás?'
        },
        {
          id: "6",
          sentByUser: true,
          time: '18:14',
          text: '¡Claro! Los escuadrones son de hasta 5 personas, ¿tienes a alguien más?'
        },
        {
          id: "7",
          sentByUser: false,
          time: '18:14',
          text: 'Le escribiré a Sasha a ver si está disponible para jugar un rato con nosotros'
        },
        {
          id: "8",
          sentByUser: true,
          time: '18:15',
          text: 'Excelente, nos vemos en un rato!'
        },
      ]
    },
    {
      id:"2",
      userImg: "3",
      userName: "Bryan Doe",
      lastMessageTime: "21:11",
      lastMessage: "Por fin pude pasar Doki Doki Literature Club"
    },
    {
      id:"3",
      userImg: "2",
      userName: "Obama Enrique",
      lastMessageTime: "20:19",
      lastMessage: "Cerraron club penguin t.t"
    },
    {
      id:"4",
      userImg: "6",
      userName: "Elsa Pato",
      lastMessageTime: "18:30",
      lastMessage: "Sendo quickscope menor"
    },
    {
      id:"5",
      userImg: "7",
      userName: "Yuribidizaida Astroberto",
      lastMessageTime: "17:31",
      lastMessage: "Tenemos reunión del consejo comunal a las 2"
    },
    {
      id:"6",
      userImg: "4",
      userName: "El Brayan",
      lastMessageTime: "17:31",
      lastMessage: "Es Maicrosof, danos 500$ o te cerramos la cuenta"
    },
  ]

  return (
    <>
      <Container>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Conversation conversation={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </>
  )
}

export default ChatScreen



/*const [isLoading, setLoading] = useState(true);
const [data, setData] = useState([]);
 
useEffect(()=>{
  fetch('https://ecf3ba35-e391-4a86-90d8-60b4f15ac40d.mock.pstmn.io/posts')
    .then ((Response) => Response.json())
    .then((responseJson) => {
      setData(responseJson);
      setLoading(false)
    })
    .catch((error)=>console.error(error))
},[])
*/