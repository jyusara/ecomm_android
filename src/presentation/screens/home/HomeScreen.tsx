import { Button, Icon, Layout, Text } from '@ui-kitten/components';
import { useAuthStore } from '../../store/auth/useAuthStore';



export const HomeScreen = () =>{
 
  const { logout } = useAuthStore();

  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>¡Bienvenido a EasyCommerce!</Text>

      <Text style={{ textAlign: 'center', margin: 20 }}>
        La plataforma para gestionar y vender productos fácilmente.
      </Text>

      {/*<Icon name="facebook"/>*/}

      <Button
        accessoryLeft={ <Icon name="log-out-outline"/> }
        onPress={ logout }
      >
        Cerrar sesión
      </Button>
    </Layout>
  )
}