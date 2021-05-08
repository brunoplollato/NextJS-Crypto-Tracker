import styles from './styles.module.scss';

export default function Coin({ coin }) {
  return (
    <div className={styles.coinPage}>
      <div className={styles.container}>
        <img 
          src={coin.image.large} 
          alt={coin.name} 
          className={styles.coinImage}
        />
        <h1 className={styles.coinName}>{coin.name}</h1>
        <p className={styles.coinTicker}>{coin.symbol}</p>
        <p className={styles.coinCurrent}>{coin.market_data.current_price.usd}</p>
        
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)

  const data = await res.json()

  return {
    props: {
      coin: data
    }
  }

}