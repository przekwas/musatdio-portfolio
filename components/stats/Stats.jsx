import StatLine from './StatLine';

export default function Stats() {
	return (
		<>
			<h2 class="pb-1 font-bold text-xl text-gray-400">Stats [Standard Array]</h2>

			<div class="max-w-xl w-full text-gray-200 mt-4 px-8 md:px-0">
				<div class="flex flex-col md:flex-row md:-mx-2">
					<StatLine title="Strength" value={8} mod={-1} />
					<StatLine title="Dexterity" value={14} mod={+1} />
				</div>
				<div class="flex flex-col md:flex-row md:-mx-2">
					<StatLine title="Constitution" value={14} mod={+2} />
					<StatLine title="Intelligence" value={17} mod={+3} />
				</div>
                <div class="flex flex-col md:flex-row md:-mx-2">
					<StatLine title="Wisdom" value={12} mod={+1} />
					<StatLine title="Charisma" value={10} mod={+0} />
				</div>
			</div>
		</>
	);
}
