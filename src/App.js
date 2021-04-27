import InputBar from '../src/components/InputBar';
import LoginForm from './components/LoginForm';
import { useGlobalContext } from './context/context';
import Alert from './components/Alert';
import LogoutButton from './components/LogoutButton';
import Result from './components/Result';

function App() {
  const { alert } = useGlobalContext();
  return (
    <div className="container m-auto">
      <h1 className="text-gray-100 text-2xl uppercase text-center tracking-widest  mt-8 mb-2">
        Cipher App
      </h1>
      {alert.show && <Alert />}
      <LoginForm />
      <LogoutButton />
      <InputBar />
      <Result />
    </div>
  );
}

export default App;
