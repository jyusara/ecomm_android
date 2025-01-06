import { Button, Input, Layout, Text } from "@ui-kitten/components"
import { Alert,useWindowDimensions } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { MyIcon } from "../../components/ui/MyIcon";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigation/StackNavigator";
import { useState } from "react";
import { useAuthStore } from "../../store/auth/useAuthStore";


interface Props extends StackScreenProps<RootStackParams, 'RegisterScreen'> {}

export const RegisterScreen = ({ navigation }:Props) =>{

    const {register} = useAuthStore();
    const [isPosting, setIsPosting] = useState(false);
    const [form, setForm]= useState({
      fullName:'',
      email: '',
      password: ''
    });

    const { height} = useWindowDimensions();

    const onRegister =async () => {
        if ( form.fullName.length === 0 || form.email.length === 0 || form.password.length === 0) {
          return;
        }
        setIsPosting(true);

        const wasSuccessful = await register(form.fullName, form.email, form.password);
        setIsPosting(false);

        if (wasSuccessful) {
          Alert.alert('Registro exitoso','Tu cuenta se creo correctamente :) .');
          return;
        }

        Alert.alert('Error', 'Datos incorrectos');
    }



    return (
      <Layout style={{ flex: 1}}>
        <ScrollView style={{ marginHorizontal: 40}}>
          <Layout style={{ paddingTop:height * 0.30}}>
            <Text category="h1">Crear cuenta</Text>
            <Text category="p2">Por favor, crea una cuenta para continuar</Text>
          </Layout>

          {/* Inputs */}
          <Layout style={{ marginTop: 20}}>
          <Input
              placeholder="Nombre completo"
              value={ form.fullName}
              onChangeText={ (fullName) => setForm({ ...form, fullName})}
              accessoryLeft={ <MyIcon name="person-outline"/>}
              style={{marginBottom: 10}}
            />
            <Input
              placeholder="Correo electrónico"
              keyboardType="email-address"
              autoCapitalize="none"
              value={ form.email}
              onChangeText={ (email) => setForm({ ...form, email})}
              accessoryLeft={ <MyIcon name="email-outline"/>}
              style={{marginBottom: 10}}
            />
            <Input
              placeholder="Contraseña"
              autoCapitalize="none"
              secureTextEntry
              value={ form.password}
              onChangeText={ (password) => setForm({ ...form, password})}
              accessoryLeft={ <MyIcon name="lock-outline"/>}
              style={{marginBottom: 10}}
            />
          </Layout>


          {/* Space */}
          <Layout style={{ height: 10}}/>

          {/* Buttons */}
          <Layout>
            <Button
            disabled={isPosting}
            accessoryRight={ <MyIcon name="arrow-forward-outline" white/>}
              onPress={onRegister}
            >
                Crear
            </Button>
          </Layout>

          {/* Info para crear cuenta */}
          <Layout style={{ height: 50}}/>

          <Layout style={{ 
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'center',
          }}> 
            <Text>¿Ya tienes cuenta?</Text>
            <Text
              status="primary"
              category="s1"
              onPress={() => navigation.goBack()}
            >
              {' '}
              ingresar{' '}</Text>
          </Layout>

        </ScrollView>
      </Layout>
    )
  }