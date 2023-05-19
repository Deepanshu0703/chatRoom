import { initializeApp } from 'firebase/app';
import {getAuth } from 'firebase/auth';
import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp,
    onSnapshot,
    query,
    orderBy,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA9ty1o9zNKtP8wLsMrAJAh9mqBDJxVutg",
  authDomain: "chat-room-2b4f7.firebaseapp.com",
  projectId: "chat-room-2b4f7",
  storageBucket: "chat-room-2b4f7.appspot.com",
  messagingSenderId: "1095926371627",
  appId: "1:1095926371627:web:ba940703be371e7ace616e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

async function sendMessage(roomId, user, text) {
    try {
        await addDoc(collection(db, 'chat-rooms', roomId, 'messages'), {
            uid: user.uid,
            displayName: user.displayName,
            text: text.trim(),
            timestamp: serverTimestamp(),
        });
    } catch (error) {
        console.error(error);
    }
}

function getMessages(roomId, callback) {
    return onSnapshot(
        query(
            collection(db, 'chat-rooms', roomId, 'messages'),
            orderBy('timestamp', 'asc')
        ),
        (querySnapshot) => {
            const messages = querySnapshot.docs.map((x) => ({
                id: x.id,
                ...x.data(),
            }));

            callback(messages);
        }
    );
}

export {  sendMessage, getMessages };
