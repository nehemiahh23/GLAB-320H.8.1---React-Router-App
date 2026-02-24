import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

export default function Price () {
	const [coin, setCoin] = useState("null");
	
	const apiKey = "398242c0-2695-4f78-b811-f2feee74cfad";
	const params = useParams()
	const symbol = params.symbol

  // useEffect to run getCoin when component mounts.
  useEffect(() => {
    fetch(`http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`)
	.then(r => r.json())
	.then(data => setCoin(data))
	.catch(e => console.error(e))
  }, []);

  // loaded function for when data is fetched.
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist.
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // If coin has data, run the loaded function; otherwise, run loading.
  return coin && coin.rate ? loaded() : loading();
}