import { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const SignIn: React.FC = () => {
  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth());

    const uiConfig = {
      signInSuccessURL: '/', // where to redirect after login
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      tosURL: '/terms',
      privacyPolicyURL: '/privacy',
    };

    ui.start('firebaseui-auth-container', uiConfig);
  }, []);

  return <div id='firebase-auth-container'></div>;
};

export default SignIn;
