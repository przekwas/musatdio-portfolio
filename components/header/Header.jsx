import Logo from './Logo';
import Hamburger from './Hamburger';

export default function Header() {
	return (
		<header className="bg-indigo-700 w-full flex justify-center border-b-4 border-pink-500 px-4 py-3">
			<div className="max-w-4xl w-full">
				<div className="flex items-center justify-between text-pink-400">
					<Logo className="h-10 fill-current" />

					<button
						type="button"
						className="block text-gray-500 hover:text-gray-400 focus:text-white focus:outline-none sm:hidden">
						<Hamburger />
					</button>
				</div>
				<div className="my-4">
					<h1 className="text-2xl text-indigo-100">
						Mustadio Balthasar Alfred-Winston Van Helmont
					</h1>
					<p className="text-sm text-indigo-200">Rock Gnome Artificer</p>
					<div className="relative mt-4 flex justify-between">
						<div className="">
							<span className="bg-pink-500 text-indigo-100 font-bold mt-2 px-4 py-2 rounded-full text-xs uppercase">
								Level 1
							</span>
						</div>
						<div className="absolute right-0 bg-white rounded-full flex justify-center items-center p-5 border-4 border-pink-500">
							<img className="w-16 h-16" src="/mustadio-cropped.jpg" />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
