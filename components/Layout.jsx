import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react"
import Head from "next/head";

export default function Layout({ children }) {
    const { data: session } = useSession();

    const login = async (e) => {
        e.preventDefault();
        await signIn("google")
    }
    if (!session) {
        return (
            <div className="bg-blue-900 w-screen h-screen flex items-center align-middle">
                <Head><title>Ecommerce - Admin Panel Login</title></Head>
                <div className="text-center w-full">
                    <button
                        onClick={login}
                        className="bg-white p-2 px-4 rounded-lg"
                    >
                        Login with Google
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-bgPrimary min-w-screen min-h-screen flex items-center align-middle">
            <div className="w-full min-h-screen flex">
                <Nav />
                <div className="bg-bgSecondary flex-grow h-full min-h-screen  pb-10   ">
                    {children}
                </div>
            </div>
        </div>
    );
}
