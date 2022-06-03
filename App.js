import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainStack from './src/navigation/main/mainStack';
export default function App() {
  return (
<SafeAreaProvider>

    <MainStack></MainStack>
</SafeAreaProvider>
  );
}




