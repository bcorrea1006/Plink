// Optional user State observer helpers
import { auth } from "../firebase/firebase";
import { onAuthStateChanged} from "firebase/auth";
import type { User } from "firebase/auth";

export const subscribeToAuth = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};