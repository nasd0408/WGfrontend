import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import FormInput from "../../components/auth/formInput/formInput";
import FormButton from "../../components/auth/formButton/formButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./EditProfileScreenStyles";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import useForm from "../../hooks/useForm";
const EditProfileScreen = ({ route, navigation }) => {
  const [changed, setChanged] = useState(false);
  const [openFecha, setOpenfecha] = useState(false);
  const [initialState, setInitialState] = useState({
    email: "",
    password: "",
    name: "",
    date: new Date(),
    cedula: "",
  });

  const [data, setData] = useState();

  useEffect(() => {
    let user = route.params.user;
    setInitialState({
      email: "",
      password: "",
      name: user.userName,
      date: new Date(),
      cedula: "",
    });
  }, []);

  const onSubmit = (values) => {
    console.log("onSubmit", values);
  };
  const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit);
  return (
    <View style={styles.container}>
      <Ionicons
        name='game-controller'
        size={50}
        color='white'
        style={{ padding: 5 }}
      />
      <Text
        style={{
          fontSize: 20,
          color: "white",
          fontWeight: "100",
          marginBottom: 10,
        }}
      >
        Editar Perfil
      </Text>
      <FormInput
        labelValue={inputs.name}
        placeHolderText='Nombre y apellido'
        iconType='user'
        autoCorrect={false}
      />
      <FormInput
        labelValue={inputs.cedula}
        placeHolderText='Numero de identificacion (CI)'
        iconType='idcard'
        keyboardType='numeric'
        onChangeText={subscribe("cedula")}
      />

      <TouchableOpacity
        style={styles.fechaContainer}
        onPress={() => setOpenfecha(true)}
      >
        <Ionicons name='calendar-outline' size={25} style={styles.iconStyle} />
        <Text style={changed ? styles.fecha : styles.unchangedFecha}>
          {changed
            ? inputs.date.toISOString().substring(0, 10)
            : "fecha de nacimiento"}{" "}
        </Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={openFecha}
        mode='date'
        onConfirm={(fecha) => {
          subscribe("date");
          setChanged(true);
          setOpenfecha(false);
        }}
        onCancel={() => setOpenfecha(false)}
      />

      <FormInput
        labelValue={inputs.email}
        placeHolderText='Correo electronico'
        iconType='mail'
        keyboardType='email-address'
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={subscribe("email")}
      />

      <FormInput
        labelValue={inputs.password}
        onChangeText={subscribe("password")}
        placeHolderText='Contraseña'
        iconType='lock'
        secureTextEntry={true}
      />
      <FormButton buttonTitle='Actualizar' onPress={handleSubmit} />
    </View>
  );
};

export default EditProfileScreen;
