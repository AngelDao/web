import React, { useState, useEffect } from 'react';

function useNetwork() {
  const [network, setNetwork] = useState("Mainnet");

  function changeNetwork(network: string) {
    setNetwork(network);
  }

  return { set: changeNetwork, get:network };
}