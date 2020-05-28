export default function DetailCard({ children }) {
	return (
		<div class="mt-4 sm:w-1/3">
			<div class="bg-white p-8 h-full border-b-4 border-pink-500 rounded-lg flex flex-col items-center sm:mx-2 sm:p-3 md:p-8">
				{children}
			</div>
		</div>
	);
}
