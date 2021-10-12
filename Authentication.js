//This file contains multiple sign-in functions
//Import these functions into any react component to use it
import { auth } from './firebase';

//Sign-in via email with password
export function handleEmailWithPasswordLogin(email, password) {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      console.log('Logged in:', userCredentials.user.email);
    })
    .catch((error) => alert(error.message));
}

//Sign-in via email with no password
export function handleEmailWithoutPasswordLogin(email) {
  auth
    .sendSignInLinkToEmail(email)
    .then(() => {
      console.log('link succesfully sent to email');
    })
    .catch((error) => alert(error.message));
}

////Sign-in via phone number
export async function handlePhoneLogin(phoneNumber) {
  const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
  return confirmation;
}

//Sign-in via Facebook
async function onFacebookButtonPress() {
  const result = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]);
  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }
  const data = await AccessToken.getCurrentAccessToken();
  if (!data) {
    throw 'Something went wrong obtaining access token';
  }
  const facebookCredential = auth.FacebookAuthProvider.credential(
    data.accessToken
  );
  return auth().signInWithCredential(facebookCredential);
}
//Sign-in via Google
async function onGoogleButtonPress() {
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return auth().signInWithCredential(googleCredential);
}
//Sign-in via Anonymously
function handleAnonymousLogin() {
  auth()
    .signInAnonymously()
    .then(() => {
      console.log('User signed in anonymously');
    })
    .catch((error) => {
      if (error.code === 'auth/operation-not-allowed') {
        console.log('Enable anonymous in your firebase console.');
      }
      console.error(error);
    });
}
//Verify users email
export async function handleEmailVerify() {
    await firebase.auth().currentUser.sendEmailVerification({
        handleCodeInApp: true,
        url: 'app/email-verification',
       });
  }
//Sign out user
function handleSignout() {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
}
