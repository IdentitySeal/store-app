import firebase, { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const GoogleLogin = () => {

    const [user] = useAuthState(auth)

    return (
        <div>
            <SignOut/>            
            {user ? <CheckoutPage /> : <SignIn/>}
        </div>

    )
}

const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <>
            <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        </>
    )

}

const SignOut =()=> {
    return auth.currentUser && (
        <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
}

const CheckoutPage = () => {

    return (
        <div>HERE is THE checkout PAGE</div>
    )
}

export default GoogleLogin