import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const CryptoTicker: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<CryptoPrice[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1'
        );
        setCryptoData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
        setLoading(false);
      }
    };

    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-gray-100 py-3 overflow-hidden">
        <div className="container">
          <div className="flex justify-center">
            <p>Loading cryptocurrency prices...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-100 py-3 overflow-hidden">
      <div className="crypto-ticker">
        <div className="crypto-ticker-content">
          {cryptoData.map((crypto) => (
            <span key={crypto.id} className="inline-flex items-center mx-6">
              <span className="font-semibold">{crypto.name}</span>
              <span className="mx-1">({crypto.symbol.toUpperCase()})</span>
              <span className="font-bold">${crypto.current_price.toLocaleString()}</span>
              <span 
                className={`flex items-center ml-1 ${
                  crypto.price_change_percentage_24h >= 0 
                    ? 'text-green-600' 
                    : 'text-red-600'
                }`}
              >
                {crypto.price_change_percentage_24h >= 0 ? (
                  <ArrowUpRight size={16} />
                ) : (
                  <ArrowDownRight size={16} />
                )}
                {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
              </span>
            </span>
          ))}
          {/* Duplicate for continuous scrolling effect */}
          {cryptoData.map((crypto) => (
            <span key={`${crypto.id}-dup`} className="inline-flex items-center mx-6">
              <span className="font-semibold">{crypto.name}</span>
              <span className="mx-1">({crypto.symbol.toUpperCase()})</span>
              <span className="font-bold">${crypto.current_price.toLocaleString()}</span>
              <span 
                className={`flex items-center ml-1 ${
                  crypto.price_change_percentage_24h >= 0 
                    ? 'text-green-600' 
                    : 'text-red-600'
                }`}
              >
                {crypto.price_change_percentage_24h >= 0 ? (
                  <ArrowUpRight size={16} />
                ) : (
                  <ArrowDownRight size={16} />
                )}
                {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoTicker;