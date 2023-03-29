import Link from 'next/link';
import React from 'react'

const ErrorPage = () => {
  return (
    <div className="container">
      <h2>Page Not Found...</h2>
      <Link href='/'>Go To Home</Link>
    </div>
  );
}

export default ErrorPage