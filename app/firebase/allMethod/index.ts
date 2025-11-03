import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "..";
import {
  Bookmark,
  Form,
  SignInTypeForm,
  SignUpTypeForm,
  UserType,
} from "@/app/types";
import toast from "react-hot-toast";
import {
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
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
    const user: UserType = {
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

export const addUserMethod = async (user: UserType) => {
  await setDoc(doc(db, "users", user.uid), user);
};

export const addBookmarkMethod = async (bookmark: Bookmark) => {
  try {
    await setDoc(doc(db, "bookmarks", bookmark.uid), bookmark);
  } catch (error: any) {
    toast.error(error.message);
  }
};

export const getBookmarksMethod = (callback: (data: Bookmark[]) => void) => {
  const col = collection(db, "bookmarks");

  const unsubscribe = onSnapshot(col, (querySnapshot) => {
    const temp: Bookmark[] = [];

    querySnapshot.forEach((doc) => {
      const bookmark = {
        uid: doc.id,
        ...doc.data(),
      } as Bookmark;

      temp.push(bookmark);
    });

    callback(temp);
  });

  return unsubscribe;
};
export const getUsersMethod = async () => {
  const col = collection(db, "users");
  const querySnapshot = await getDocs(col);
  let temp: UserType[] = [];
  querySnapshot.forEach((doc) => {
    const user = {
      uid: doc.id,
      ...doc.data(),
    } as UserType;
    temp.push(user);
  });

  return temp;
};

export const userIsAdmin = async (
  bookmarks: Bookmark[]
): Promise<Bookmark[]> => {
  const users = await getUsersMethod();
  // console.log(users);
  const adminUids = users
    .filter((user) => user.role === "admin")
    .map((user) => user.uid);
  // console.log(adminUids);

  const filtered = bookmarks.filter((bookmark) =>
    adminUids.includes(bookmark.whoCreated ?? "")
  );
  // console.log(filtered);

  return filtered;
};

export const addArchiveMethod = async (bookmark: Bookmark, userId: string) => {
  const bookmarksRef = doc(db, "bookmarks", bookmark.uid);

  await updateDoc(bookmarksRef, {
    ...bookmark,
    isArchived: true,
    whoArchived: arrayUnion(userId),
  });
};

export const RemoveArchiveMethod = async (
  bookmark: Bookmark,
  userId: string
) => {
  const bookmarksRef = doc(db, "bookmarks", bookmark.uid);

  await updateDoc(bookmarksRef, {
    ...bookmark,
    whoArchived: arrayRemove(userId),
  });
};

export const editBookmarkMethod = async (bookmark: Bookmark) => {
  const bookmarksRef = doc(db, "bookmarks", bookmark.uid);

  // console.log(bookmark);
  await updateDoc(bookmarksRef, {
    title: bookmark.title,
    description: bookmark.description,
    url: bookmark.url,
    tags: bookmark.tags,
  });
};

export const deleteMethod = async (bookmark: Bookmark) => {
  await deleteDoc(doc(db, "bookmarks", bookmark.uid));
};
