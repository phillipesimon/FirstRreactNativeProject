import React, { useState, useEffect } from "react";

import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { format } from "date-fns";

export default function Home() {
  const currentDate = new Date()

  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')


  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert("Participant already exists", "This participant already exists in the list!")
    }

    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('')
  }
  function handleParticipantRemove(name: string) {



    Alert.alert("Remove Participant", `Do You want to remove the participant ${name}?`, [
      {
        text: "Yes",
        onPress: () => setParticipants(prevState => prevState.filter(paticipant => paticipant !== name))
      },
      {
        text: "No",
        style: "cancel"
      }
    ]);
  }

  return (
    <View style={styles.container} >
      <Text style={styles.eventName} >First project in React Native</Text>
      <Text style={styles.eventDate}>{format(currentDate, 'EEEE, MMMM d, yyyy')}</Text>

      <View style={styles.form} >
        <TextInput
          style={styles.input}
          placeholder="Participant's name"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={participantName}
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
            Has nobody arrived at the event yet? Add participants to your attendance list!
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

    </View >
  )
}