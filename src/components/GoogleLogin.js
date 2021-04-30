import firebase, { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import styled from "styled-components"
import { Button } from "../components/Button"
import { Redirect } from "react-router-dom"



const GoogleLogin = () => {

    const [user] = useAuthState(auth)

    return (
        <div>
            <SignOut />
            {/* <Route exact path="/"> */}
            
                {user ? <Redirect to ="/" /> : <SignIn />}

            {/* </Route> */}
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
            <Button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</Button>
        </>
    )

}

const SignOut =()=> {
    return auth.currentUser && (
        <Button className="sign-out" onClick={() => auth.signOut()}>Sign Out</Button>
    )
}

const CheckoutPage = () => {

    return (
        <div>HERE is THE checkout PAGE</div>
    )
}

export default GoogleLogin