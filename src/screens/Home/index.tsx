import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {
  const participants = ["Simon", "John", "Dark", "Tales", "Adam", "Chris", "Queen", "Vict", "Peter", "Luan", "Geir", "Carl",
    "Simon1", "John2", "Dark3", "Tales4", "Adam5", "Chris6", "Queen7", "Vict8", "Peter9", "Luan10", "Geir11", "Carl12"]

  function handleParticipantAdd() {
    if (participants.includes("Simon")) {
      return Alert.alert("Participant already exists", "This participant already exists in the list!")
    }
  }
  function handleParticipantRemove(name: string) {
    Alert.alert("Remove Participant", `Do You want to remove the participant ${name}?`, [
      {
        text: "Yes",
        onPress: () => Alert.alert("Participant Removed!")
      },
      {
        text: "No",
        style: "cancel"
      }
    ]);
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



      {/* Listagem com FlatList */}
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item} onRemove={() => handleParticipantRemove(item)}
          />
        )}

        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou ainda? Adicione participantes a sua lista de presença!
          </Text>
        )}
      />


      {/*Listagem com ScrollView*/}
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map((participant) => (

            <Participant key={participant} name={participant} onRemove={() => handleParticipantRemove("Simon")} />
          ))
        }
      </ScrollView> */}

    </View>
  )
}