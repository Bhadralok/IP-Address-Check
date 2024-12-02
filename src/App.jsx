import { useState, useEffect } from "react";
export default function App() {
  const [ipaddress, setIpaddress] = useState(null);
  const [error, setError] = useState(null);
  const url = "https://api.aruljohn.com/ip/json";
  async function getLocation() {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setIpaddress(data.ip);
    } catch (error) {
      setError(`Error : ${error.message}`);
    }
  }
  const anything = "something";
  useEffect(() => {
    getLocation();
  }, []);
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <>
      {error ? (
        <p className="errorState text-white text-4xl">
          There seem to be a Problem, Please 
          <em
            onClick={handleReload}
            className="text-blue-500 underline not-italic"
          >
            reload
          </em>
        </p>
      ) : (
        <div className="h-[80vh] w-[80vw] flex items-center justify-center main">
          <div className="flex flex-col justify-center m-0 items-center">
            <h1 className="text-white">Your IP address</h1>
            <h2 className="ipaddress py-[0.7rem] px-[2rem]  font-bold text-white text-base sm:text-xl md:text-xl lg:text-5xl flex justify-center items-center rounded-full bg-black">
              {ipaddress}
            </h2>
          </div>
        </div>
      )}
    </>
  );
}
