import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "..";
import { Bookmark, SignInTypeForm, SignUpTypeForm, User } from "@/app/types";
import toast from "react-hot-toast";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export const signUpMethod = async (form: SignUpTypeForm) => {
  try {
    const result = await createUserWithEmailAndPassword(
      auth,
      form.email,
      form.password
    );

    if (!result.user.displayName) {
      await updateProfile(result.user, { displayName: form.fullname });
    }
    const user: User = {
      uid: result.user.uid,
      displayName: result.user.displayName,
      email: result.user.email,
      photoURL: result.user.photoURL ?? "",
      role: "user",
    };

    await addUserMethod(user);
    console.log(user);
    toast.success("Account created");
  } catch (err: any) {
    toast.error(err.message);
  }
};

export const signInMethod = (form: SignInTypeForm) => {
  signInWithEmailAndPassword(auth, form.email, form.password)
    .then((result) => {
      toast.success("logged in successfully");
    })
    .catch((err) => {
      toast.error(err.message);
    });
};

export const signOutMethod = () => {
  signOut(auth)
    .then((result) => {
      toast.success("successfully logged outy");
    })
    .catch((err) => {
      toast.error(err.message);
    });
};

export const passwordResetEmailMethod = (email: string) => {
  sendPasswordResetEmail(auth, email, {
    url: "http://localhost:3000/reset-password",
    handleCodeInApp: true,
  })
    .then(() => {
      toast.success("Email sent, please check");
    })
    .catch((err) => {
      toast.error(err.message);
    });
};

export const addUserMethod = async (user: User) => {
  await setDoc(doc(db, "users", user.uid), user);
};

export const addBookmarkMethod = async (bookmark: Bookmark) => {
  try {
    await setDoc(doc(db, "bookmarks", bookmark.uid), bookmark);
  } catch (error: any) {
    toast.error(error.message);
  }
};

export const getBookmarksMethod = async () => {
  const col = collection(db, "bookmarks");
  const querySnapshot = await getDocs(col);
  let temp: Bookmark[] = [];
  let bookmark: Bookmark | null = null;
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    bookmark = {
      uid: doc.id,
      ...doc.data(),
    } as Bookmark;

    temp.push(bookmark);
  });

  return temp;
};

export const getUsersMethod = async () => {
  const col = collection(db, "users");
  const querySnapshot = await getDocs(col);
  let temp: User[] = [];
  querySnapshot.forEach((doc) => {
    const user = {
      uid: doc.id,
      ...doc.data(),
    } as User;
    temp.push(user);
  });

  return temp;
};

export const userIsAdmin = (
  bookmarks: Bookmark[],
  users: User[]
): Bookmark[] => {
  const adminUids = users
    .filter((user) => user.role === "admin")
    .map((user) => user.uid);

  return bookmarks.filter((bookmark) =>
    adminUids.includes(bookmark.whoCreated ?? "")
  );
};

export const addArchiveMethod = async (bookmark: Bookmark, userId: string) => {
  const bookmarksRef = doc(db, "bookmarks", bookmark.uid);

  await updateDoc(bookmarksRef, {
    ...bookmark,
    isArchived: true,
    whoArchived: arrayUnion(userId),
  });
};
