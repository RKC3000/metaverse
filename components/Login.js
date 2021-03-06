import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative text-white">
      {/* <h1>I am the login screen</h1> */}
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        {/* Papafam logo */}
        <Image
          className="object-cover rounded-full"
          src="/My-picture-1.jpg"
          height={200}
          width={200}
        />

        {/* Login Button */}
        <button
          onClick={authenticate}
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
        >
          Login to the METAVERSE
        </button>
      </div>

      <div className="w-full h-screen">
        <Image src="/login-background.jpeg" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;
