import React, { useEffect, useState } from 'react';
import { getAssets } from '../API/ItsmAPI';

function AssetsList() {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAssets()
      .then(data => {
        setAssets(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Assets</h2>
      <ul>
        {assets.map(asset => (
          <li key={asset.id}>{asset.name} - {asset.brand.name} - {asset.type.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AssetsList;
