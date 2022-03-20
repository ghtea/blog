import {getAuth, signOut as firebaseSignOut, signInWithPopup, GithubAuthProvider, User, onAuthStateChanged} from "firebase/auth";
import {ReactNode, createContext, useMemo, useState, useEffect, useCallback, useContext} from "react"

export type AuthenticationProviderProps = {
  children: ReactNode
}

type AuthenticationContextType = {
  user: User | undefined
  signIn: () => void
  signOut: () => void
  isSignedIn: boolean
  isAdmin: boolean
}
const initialAuthenticationContext = {
  user: undefined,
  signIn: () => {},
  signOut: () => {},
  isSignedIn: false,
  isAdmin: false,
}
const AuthenticationContext = createContext<AuthenticationContextType>(initialAuthenticationContext);
export const useAuthentication = () => useContext(AuthenticationContext)

const auth = getAuth();
const githubProvider = new GithubAuthProvider();

export const AuthenticationProvider = ({children}: AuthenticationProviderProps) => {
  const [user, setUser] = useState<User | undefined>(undefined)

  useEffect(()=>{
    console.log("user: ", user); // TODO: remove 
  },[user])

  const isSignedIn = useMemo(()=>Boolean(user),[user])

  const isAdmin = useMemo(()=>user?.uid === process.env.NEXT_PUBLIC_ADMIN_USER_ID, [user?.uid])

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(undefined)
      }
    });
  },[])

  const signIn = useCallback(async  ()=>{
    try {
      await signInWithPopup(auth, githubProvider)
    }
    catch (error){
      console.error(error)
    }
  },[])

  const signOut = useCallback(async ()=>{
    await firebaseSignOut(auth)
  },[])
  
  const value = useMemo(()=>{
    return ({
      signIn,
      signOut,
      user,
      isSignedIn,
      isAdmin,
    })
  },[isAdmin, isSignedIn, signIn, signOut, user])

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  )
}