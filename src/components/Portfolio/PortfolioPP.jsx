import React from 'react';

function PortfolioPP() {
  return (
    <>
      <h3 className='mt-5'>Packaging proposal</h3>
      <p className='mb-0'>
      This project focused on predicting the optimal packaging solution for a given set of items in an order.
      The predictive analysis comprised two key components: historical packing data retrieved from a database
      and AI-driven predictions based on item parameters.

      The project involved the development of two distinct applications. The first application connects to
      two databases to perform historical predictions. It periodically queried the database for new entries
      lacking package information. If the item had been previously packed, it utilized historical data; otherwise,
      it invoked the second application. This secondary application, utilized a K-Means machine
      learning model to generate predictions based on item parameters such as weight and size.

      Communication between the applications occurred over HTTP. The primary application was developed using .NET,
      ensuring robust functionality, while the Python-based second
      application provided specialized predictive capabilities.
      </p>
    </>
  );
}

export default PortfolioPP;