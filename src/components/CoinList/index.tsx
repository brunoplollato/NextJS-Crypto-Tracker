import { Coins } from "../Coins";

type Coin = {
  key: string;
  name: string;
  id: string;
  current_price: number;
  symbol: string;
  market_cap: number;
  total_volume: number;
  image: string;
  price_change_percentage_24h: number;
}

type FilteredCoins = {
  filteredCoins: Coin[];
}

export function CoinList({ filteredCoins }:FilteredCoins) {
  return (
    <>
      {filteredCoins.map(coin => {
        return <Coins 
                key={coin.id}
                name={coin.name}
                id={coin.id}
                price={coin.current_price}
                symbol={coin.symbol}
                marketCap={coin.market_cap}
                volume={coin.total_volume}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
              />        
      })}
    </>
  );
}
