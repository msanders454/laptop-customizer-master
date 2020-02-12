import React from 'react';

const USCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

export default USCurrency;