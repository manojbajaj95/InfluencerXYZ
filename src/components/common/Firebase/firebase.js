import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";
// import * as firebaseui from "firebaseui";

export const config = {
  apiKey: "AIzaSyCucj91_5AMOOwbiVoOgEO3ooyUYB3QPLw",
  authDomain: "influencerxyz-123.firebaseapp.com",
  databaseURL: "https://influencerxyz-123.firebaseio.com",
  projectId: "influencerxyz-123",
  storageBucket: "influencerxyz-123.appspot.com",
  messagingSenderId: "779710022421",
  appId: "1:779710022421:web:4ca1f0393b51f5d3989f1c",
  measurementId: "G-EE8G03BT73",
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    /* Helper */

    this.fieldValue = firebase.firestore.FieldValue;
    this.emailAuthProvider = firebase.auth.EmailAuthProvider;

    /* Firebase APIs */
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

    this.auth = firebase.auth();
    this.db = firebase.firestore();
    this.analytics = firebase.analytics();

    /* Social Sign In Method Provider */

    // this.googleProvider = new firebase.auth.GoogleAuthProvider();
    // this.facebookProvider = new firebase.auth.FacebookAuthProvider();
    // this.twitterProvider = new firebase.auth.TwitterAuthProvider();
    // this.phoneProviderId = firebase.auth.PhoneAuthProvider.PROVIDER_ID;
    // this.ui = new firebaseui.auth.AuthUI(this.auth);
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = async (email, password) => {
    const result = await this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        return true;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == "auth/weak-password") {
          alert("The password is too weak.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
        return false;
      });
    return result;
  };

  doSignInWithEmailAndPassword = async (email, password) => {
    const result = await this.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        return true;
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
        return false;
      });
    return result;
  };

  doSignUpOrSignIn = async (email, password) => {
    return this.auth.fetchSignInMethodsForEmail(email).then((e) => {
      if (e.length) {
        return this.doSignInWithEmailAndPassword(email, password);
      } else {
        return this.doCreateUserWithEmailAndPassword(email, password);
      }
    });
  };

  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);

  doSignInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider);

  doSignInWithTwitter = () => this.auth.signInWithPopup(this.twitterProvider);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
    });

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  getFirebaseDoc = async (table, id) => {
    const result = await this.db
      .doc(`${table}/${id}`)
      .get()
      .then(function (doc) {
        return doc.data();
      })
      .catch(function (error) {
        return [];
      });
    return result;
  };

  // *** DB Api's ***
  getFromDB = async (table, uid) => {
    const result = await this.db
      .collection(table)
      .where("userId", "==", uid)
      .get()
      .then(function (doc) {
        const list = [];
        doc.forEach((d) => {
          if (!d.data().isDeleted) {
            list.push({
              ...d.data(),
              id: d.id,
            });
          }
        });
        return list;
      })
      .catch(function (error) {
        return [];
      });

    return result;
  };

  addOrUpdateDB = async (table, body, id, isReturnPromise) => {
    const db_collection = id
      ? this.db.collection(table).doc(id).update(body)
      : this.db.collection(table).add(body);
    let result;
    if (isReturnPromise) {
      result = await db_collection;
    } else {
      result = await db_collection
        .then(function () {
          return true;
        })
        .catch(function (error) {
          console.log(error);
          return false;
        });
    }
    return result;
  };

  // *** Merge Auth and DB User API *** //

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        this.user(authUser.uid)
          .get()
          .then((snapshot) => {
            // this.doSignOut();
            const dbUser = snapshot.data();
            // console.log("DB User is")
            // console.log(dbUser)
            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              phoneNumber: authUser.phoneNumber,
              ...dbUser,
            };

            this.analytics.setUserId(authUser.uid);

            next(authUser);
          });
      } else {
        fallback();
      }
    });
  // *** User API ***

  user = (uid) => this.db.collection("users").doc(`${uid}`);

  users = () => this.db.collection("users");

  // *** Message API ***

  message = (uid) => this.db.doc(`messages/${uid}`);

  messages = () => this.db.collection("messages");
}

export default Firebase;
