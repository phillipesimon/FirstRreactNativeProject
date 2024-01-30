import { Text, TextInput, View, TouchableOpacity, StatusBar } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {

  function handleParticipantAdd() {
    console.log("You clicked the add participant button");
  }

  return (
    <View style={styles.container} >
      <Text style={styles.eventName} >Nome do evento</Text>
      <Text style={styles.eventDate}>Domingo, 4 de Novembro de 2024</Text>

      <View style={styles.form} >
        <TextInput
          style={styles.input}
          placeholder="Participant's name"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#131016"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />

      <Participant />
      <Participant />

    </View>
  )
}