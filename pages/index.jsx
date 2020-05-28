import Head from 'next/head';
import Header from '../components/header/Header';
import Background from '../components/background/Background';
import Details from '../components/details/Details';
import Footer from '../components/footer/Footer';
import Stats from '../components/stats/Stats';

export default function Home() {
	return (
		<div className="flex flex-col items-center">
			<Head>
				<title>Mustadio, Artificer</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main class="mt-16 w-full flex flex-col items-center">
				<div class="max-w-4xl mx-4 ">
					<Background />

					<Details />
				</div>

				<div class="bg-gray-800 py-12 mt-12 w-full flex flex-col items-center border-t-2 border-black">
					<Stats />
				</div>
			</main>

			<Footer />
		</div>
	);
}
