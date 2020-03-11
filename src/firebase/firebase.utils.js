import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyANEZ-_zv0oeKqsAJigZ_-Kb5gHGt4zSps",
  authDomain: "getshitdone-e7f87.firebaseapp.com",
  databaseURL: "https://getshitdone-e7f87.firebaseio.com",
  projectId: "getshitdone-e7f87",
  storageBucket: "getshitdone-e7f87.appspot.com",
  messagingSenderId: "344852769619",
  appId: "1:344852769619:web:af98a2f8dce124000d8fa6"
}

const fireApp = firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("error creating user", error.message)
    }
  }

  return userRef
}

export const converCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const task = doc.data()
    return {
      task
    }
  })
  const mapped = transformedCollection.map(el => {
    return el.task
  })

  return mapped
}
const db = fireApp.firestore()
export { db }

export const addTaskDocument = (collectionKey, task) => {
  let random = Math.random()
  let key = random.toString()
  console.log(key)

  db.collection(collectionKey)
    .doc(key)
    .set({
      header: task.header,
      description: task.description,
      stage: task.stage,
      id: key
    })
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
