import * as React from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'
import { Icon, Button } from 'react-native-elements'

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerUserName}>
          <Icon
            type='font-awesome'
            name='user'
            color='gray'
            containerStyle={styles.icon}
          />
          <TextInput
            placeholder='Username'
            placeholderTextColor='gray'
            style={styles.textInput}
          />
        </View>

        <View style={styles.containerPassword}>
          <Icon
            type='entypo'
            name='key'
            color='gray'
            containerStyle={styles.icon}
          />
          <TextInput
            placeholder='Password'
            placeholderTextColor='gray'
            style={styles.textInput}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.containerSignIn}>
          <Button title='SIGN IN' backgroundColor='#ffa100' />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  containerSignIn: {
    height: 60,
    marginLeft: '6%',
    marginRight: '6%',
    paddingTop: '2%',
  },
  containerUserName: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    marginLeft: '10%',
    marginRight: '10%',
  },
  containerPassword: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    marginLeft: '10%',
    marginRight: '10%',
  },
  containerRegister: {
    height: 60,
    marginLeft: '6%',
    marginRight: '6%',
    alignItems: 'center',
  },
  icon: {
    flex: 1,
  },
  textInput: {
    backgroundColor: 'transparent',
    flex: 5,
    color: 'black',
    paddingLeft: '25%',
  },
})
