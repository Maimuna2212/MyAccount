import { useRouter} from 'expo-router';
import { useState }from 'react';
import { Alert, Button, StyleSheet, Text, TextInput,View } from 'react-native';

export default function RegistrationScreen() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  

  //handleReview function checks if all fields are filled and if passwords match before navigation to the Review screen. It usesAlert to show error messages if validation fails.
  //'alert' is a built-in ReactNative component that displays an alert dialog with a message and optional buttons. In this case, it is used to show error messages when validation fails.

  const handleReview=()=>{
    if(!userName || !email|| !phoneNumber|| !password|| !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if(password !== confirmPassword){
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    router.push({
      pathname: './review',//'pathname' specifies the path of the screen to navigate to. In this case, it navigates to the 'Review' screen.
      params: {userName, email, phoneNumber}, //'parms' is an object that contains the data to be passed to the next screen. In this case, it passes the user's name, email, and phone number to the 'Review'screen.
    });
  };

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Account</Text>

      {/*'placeholder' is used to show a hint to the user about what to enter in the input field*/}
      {/*'onChangeText' is used to update the state when the user types in the input field*/}
      {/*'keyboardType' is used to specify the type of keyboard to show (e.g, email, phone)*/}
      {/*'secureTextEntry' is used to hide the text input (e.g, for passwords)*/}

      <TextInput style = {styles.input} placeholder="Username" value={userName} onChangeText = {setUserName}/>
      <TextInput style = {styles.input} placeholder="Email" keyboardType="email-address"  value={email} onChangeText = {setEmail}/>
      <TextInput style = {styles.input} placeholder="PhoneNumber" keyboardType="phone-pad" value={phoneNumber} onChangeText = {setPhoneNumber}/>
      <TextInput style = {styles.input} placeholder="Password" secureTextEntry value={password} onChangeText = {setPassword}/>
      <TextInput style = {styles.input} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText = {setConfirmPassword}/>

      <Button title="Review Details" onPress={handleReview}/>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{flex:1, padding:20, justifyContent:'center'},
  title:{fontSize:24, fontWeight:'bold', marginBottom:20, textAlign:'center'},
  input:{borderWidth:1, borderColor:'#ccc', padding:12, marginBottom:15, borderRadius:8} 
});