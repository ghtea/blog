import {getAuth, signOut as firebaseSignOut, signInWithPopup, GithubAuthProvider, User, onAuthStateChanged} from "firebase/auth";
import {ReactNode, createContext, useMemo, useState, useEffect, useCallback} from "react"

export type AuthenticationProviderProps = {
  children: ReactNode
}

type AuthenticationContextType = {
  user: User | undefined
  signIn: () => void
  signOut: () => void
}
const initialAuthenticationContext = {
  user: undefined,
  signIn: () => {},
  signOut: () => {}
}
const AuthenticationContext = createContext<AuthenticationContextType>(initialAuthenticationContext);

const auth = getAuth();
const githubProvider = new GithubAuthProvider();

export const AuthenticationProvider = ({children}: AuthenticationProviderProps) => {
  const [user, setUser] = useState<User | undefined>(undefined)

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
    })
  },[signIn, signOut, user])

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  )
}