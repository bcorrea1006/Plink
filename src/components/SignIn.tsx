import { useEffect } from 'react';
import { auth } from '../firebase/firebase';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const SignIn: React.FC = () => {
  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

    const uiConfig = {
      signInSuccessURL: '/',
      signInOptions: [
        // This is the way
        {
          provider: firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
        },
      ],
    };

    ui.start('#firebaseui-auth-container', uiConfig);

    return () => ui.reset();
  }, []);

  return (
    <div id='firebaseui-auth-container'>
      Okay... so this is the div, huh? Where does the CONTINUE AS GUEST button
      come from??? And how do I access it so that I can change what happens when
      the user clicks on it?
    </div>
  );
};

export default SignIn;
