import Link from 'next/link';

import styles from './styles.module.scss';

export function Coins({ id, name, price, symbol, marketCap, volume, image, priceChange }) {
  return (
    <Link href='/coin/[id]' as={`/coin/${id}`}>
      <a>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.coin}>
              <img src={image} alt={name} className={styles.coinImg} />
              <h1>{name}</h1>
              <p className={styles.coinSymbol}>{symbol}</p>
            </div>
            <div className={styles.coinData}>
              <p className={styles.coinPrice}>${price}</p>
              <p className={styles.coinVolume}>${volume.toLocaleString('en-US')}</p>

              {priceChange < 0 ? (
                <p className={styles.coinPercentRed}>{priceChange.toFixed(2)}%</p>
              ) : (
                <p className={styles.coinPercentGreen}>{priceChange.toFixed(2)}%</p>
              )}

              <p className={styles.coinMarketcap}>
                Mkt Cap: ${marketCap.toLocaleString('en-US')}
              </p>
            </div>
          </div>
        </div> 
      </a>
    </Link>
  );
}
