import Head from 'next/head'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { UI_TEXT } from '../constants'

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="Airbnb-style property listing page built with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">Featured Listings</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card title="Cozy Apartment in Kigali" imageUrl="/assets/house.jpg" />
          <Card title="Modern Loft in Nyamirambo" imageUrl="/assets/house.jpg" />
          <Card title="Lake View Villa" imageUrl="/assets/house.jpg" />
        </div>

        <div className="mt-10">
          <Button label={UI_TEXT.bookNow} onClick={() => alert('Booking...')} />
        </div>
      </main>
    </>
  )
}
