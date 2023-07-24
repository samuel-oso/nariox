const config = {
  apiKey: "AIzaSyAMdH5t2sJFBJ_QjAYh5zpsRvPRF1cJzXc",
  authDomain: "nariox-6b2ec.firebaseapp.com",
  projectId: "nariox-6b2ec",
  storageBucket: "nariox-6b2ec.appspot.com",
  messagingSenderId: "755187767078",
  appId: "1:755187767078:web:93deb2797df43e8001d3e7",
  measurementId: "G-0ZQ6BJPZ0W",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.ts"
    );
  } else {
    return config;
  }
}
