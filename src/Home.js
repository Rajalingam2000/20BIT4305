import React, { useEffect, useState } from 'react';
  import './index.css'
const Home = () => {
  const [output, setMergedData] = useState([]);
  const ports = [
    "http://20.244.56.144/numbers/primes",
    "http://20.244.56.144/numbers/fibo",
    "http://20.244.56.144/numbers/odd"
  ];

  useEffect(() => {
    const fetchData = async () => {
      const mapurl = ports.map(async (url) => {
        try {
          const response = await fetch(url, { timeout: 500 });
          if (!response.ok) {
            throw new Error(`Error${url}`);
          }
          const data = await response.json();
          return data.numbers;
        } catch (error) {
          console.error(error);
          return [];
        }
      });

      const out = await Promise.all(mapurl);
      const mrgdata = [].concat(...out); 
      const uniq = [...new Set(mrgdata)]; 
      const sno = uniq.sort((a, b) => a - b); 
      setMergedData(sno);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <>
      FINEL MERGED INTEGER....
        </>
        <p>
          {JSON.stringify({ numbers: output }, null, 2)}
          </p>
      </div>
    </div>
  );
}

export default Home;
