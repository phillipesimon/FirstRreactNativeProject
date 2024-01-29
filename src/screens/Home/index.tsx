import {  Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export default function Home(){
  return(
    <View style={styles.container} >
    <Text style={styles.eventName} >Nome do evento</Text>
    <Text style={styles.eventDate}>Domingo, 4 de Novembro de 2024</Text>
    <TextInput 
    style={styles.input}
    placeholder="Participant's name"
    placeholderTextColor="#6b6b6b"
    />
    </View>
  )
}