import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAssets, updateAsset } from './features/assets/assetSlice';
import { selectAssets } from './features/assets/assetSelectors';
import { mockAssets } from './mock/assetData';
import SocketSimulator from './mock/socketSimulator';

function App() {
  const dispatch = useDispatch();
  const assets = useSelector(selectAssets);

  useEffect(() => {
    dispatch(setAssets(mockAssets));
    new SocketSimulator((update) => dispatch(updateAsset(update)));
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Crypto Dashboard</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>% Change</th>
            <th>24h Volume</th>
          </tr>
        </thead>
        <tbody>
          {assets.map(asset => (
            <tr key={asset.id}>
              <td>{asset.name}</td>
              <td>${asset.price}</td>
              <td>{asset.percentChange}%</td>
              <td>{asset.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;