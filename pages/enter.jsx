import { auth, googleAuthProvider } from "../lib/firebase";

export default function EnterPage({ }) {
	const user = null;
	const username = null;
	
	return (
			<main>
                {user ? 
					!username ? <UsernameForm/> : <SignOutButton/>
					:
					<SignInButton/>
				}
		    </main>
	)
}

function SignInButton() {
	const signInWithGoogle = async () => {
		await auth.signInWithPopup(googleAuthProvider);
	};
	return(
		<button className="btn-google" onClick={signInWithGoogle}>
			<img src={'/google.avif'} alt="" />
		</button>
	);
}
  
  // Sign out button
function SignOutButton() {
	return <button onClick={() => auth.signOut()}>Sign Out</button>
}
  
function UsernameForm() {
	
}
  