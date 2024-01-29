import { Text, View } from "react-native";

export default function App(){
  return(
    <View style={{
      flex: 1,
      backgroundColor: '#131016',
    }} >
    <Text style={{
      color: '#f0f0f0',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 48,
    }} >Nome do evento</Text>
    <Text style={{
       color: '#f0f0f0',
       fontSize: 16,
       fontWeight: 'bold',
       textAlign: 'center',
       margin: 48,
    }}>Domingo, 4 de Novembro de 2024</Text>
    </View>
  )
}