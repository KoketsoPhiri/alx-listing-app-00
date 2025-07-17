// pages/index.tsx
import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { APP_NAME } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <Head>
        <title>{APP_NAME} - Home</title>
        <meta name="description" content="A modern Airbnb clone listing app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to {APP_NAME}
        </h1>
        <p className="text-lg text-gray-600">
          Your gateway to unique properties.
        </p>
      </header>

      <main className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Cozy Apartment in City Center" description="A beautiful 1-bedroom apartment close to all amenities." />
          <Card title="Spacious Family House" description="Perfect for families, with a large garden and 4 bedrooms." />
          <Card title="Modern Studio Loft" description="Chic loft with stunning city views, ideal for solo travelers." />
        </div>

        <div className="text-center mt-12">
          <Button onClick={() => alert('View More Properties clicked!')}>
            View More Properties
          </Button>
        </div>
      </main>

      <footer className="text-center mt-12 text-gray-500">
        <p>&copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
