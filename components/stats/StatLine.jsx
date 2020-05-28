export default function StatLine({ title, value, mod }) {
	return (
		<span class="flex justify-between bg-gray-700 mt-4 md:mx-2 border border-gray-600 rounded-lg py-2 px-4 block w-full md:w-1/2">
			<div>{title}:</div>
			<div className="flex justify-end w-full">
				<div className="mr-16">
					<b>{value}</b>
				</div>{' '}
				<div>
					<span className="text-xs">{mod}</span>
				</div>
			</div>
		</span>
	);
}
