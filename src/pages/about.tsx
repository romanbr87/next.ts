// pages/next.tsx

import React from "react";
import Head from "next/head";

const NextPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Next.js TypeScript Page</title>
        <meta
          name="description"
          content="This is a clean Next.js TypeScript page."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Next.js!</h1>
        <p>This is a clean Next.js TypeScript page.</p>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Your Company</p>
      </footer>

      {/* Add your custom styles or scripts here */}
    </div>
  );
};

export default NextPage;
