import Head from 'next/head';
import React, { useState } from 'react';

import { CoinList } from '../components/CoinList';
import { SearchBar } from '../components/SearchBar';

export default function Home({ filteredCoins }) {
  const [ search, setSearch ] = useState('')

  const allCoins = filteredCoins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleChange = e => {
    e.preventDefault()
    
    setSearch(e.target.value.toLowerCase())
  }

  return (
    <>
      <Head>
        <title>Bitstamp</title>
      </Head>
      <div>
        <SearchBar type="text" placeholder="Search" onChange={handleChange} />
        
        <CoinList filteredCoins={allCoins} />
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false')

  const filteredCoins = await res.json()

  return {
    props: {
      filteredCoins
    }
  }
}
