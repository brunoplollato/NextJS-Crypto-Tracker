import styles from './styles.module.scss';

export function SearchBar({...rest}) {
  return (
    <div className={styles.coinSearch}>
      <input className={styles.coinInput} {...rest} />
    </div>
  );
}
