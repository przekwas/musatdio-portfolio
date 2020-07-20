import Scholar from './Scholar';
import DetailCard from '../cards/DetailCard';

export default function Details() {
	return (
		<>
			<h2 class="mt-8 pb-1 font-bold text-xl text-indigo-700 border-b border-indigo-200">
				Details
			</h2>

			<div class="flex flex-col sm:flex-row sm:-mx-2">
				<DetailCard>
					<div class="bg-gray-200 text-indigo-700 w-16 p-2 rounded-full">
						<svg
							class="h-12 w-12 fill-current"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 100 100">
							<path d="M4,69.3.46,60.92l12-6.38v-10L.6,38l3.34-8.07,12.65,1.36,5.72-7.85L17.16,11.69l6.47-5.52,10,9,9.71-2.85L45.85,0h9.08c.7,4,1.41,8.12,2.12,12.23l9.64,3.11,9.54-9,7.19,5.06c-2,4.11-3.81,8-5.73,12.05l5.45,7.41,13.22-1,3.18,8.41L88.18,45v9.45l11.13,6.38c-.9,2.73-1.79,5.4-2.74,8.27L83.63,67.74l-6.12,8c1.77,3.74,3.58,7.54,5.58,11.77l-6.56,5.4-9.77-9L57.22,87l-2.65,13h-8.7c-.79-4.26-1.59-8.5-2.42-12.93L33.2,83.47c-2.39,3.22-5.09,6.84-8,10.72l-8.36-6.82c1.9-4.15,3.66-8,5.51-12l-5.54-7.74Zm46.77,9.57C68.64,78.19,81,65.22,79.94,47.63c-.89-14.45-13.32-28.5-30.38-27.75S19.69,34,20.24,51C20.76,67.08,34.35,79.49,50.73,78.87Z" />
							<path d="M50.28,26.09c12.94.08,23.73,10.52,23.57,22.8-.18,12.94-10.52,24-22.53,24A23.81,23.81,0,0,1,27.21,48.73,22.91,22.91,0,0,1,50.28,26.09Zm16.34,23.3A15.84,15.84,0,0,0,50.89,33.32c-9.65,0-16.65,7-16.64,16.62,0,8.16,7.33,15.48,15.42,15.44C59,65.33,66.65,58.06,66.62,49.39Z" />
						</svg>
					</div>
					<div class="mt-4 font-bold">Artificer</div>
					<div class="mt-2 text-sm text-gray-600 text-center">
						Magical tinkering
						<br />
						Spellcasting
						<br />
						<i>Proficiencies</i>:
						<div className="flex flex-col items-center">
							<span>Arcana,</span>
							<span>Investigation,</span>
							<span>Herbalist's Tools</span>
						</div>
					</div>
				</DetailCard>

				<div class="mt-4 sm:w-1/3">
					<div class="bg-white p-8 h-full border-b-4 border-pink-500 rounded-lg flex flex-col items-center sm:mx-2 sm:p-3 md:p-8">
						<div class="bg-gray-200 text-indigo-700 w-16 p-2 rounded-full">
							<svg
								class="h-12 w-12 fill-current"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 100 100">
								<g id="D_D_Logos" data-name="D&amp;D Logos">
									<g id="D_D" data-name="D&amp;D">
										<path
											class="cls-1"
											d="M100,62.79a3.45,3.45,0,1,1-3.45-3.48A3.3,3.3,0,0,1,100,62.79m-3.45,2.77a2.77,2.77,0,1,0-2.62-2.77,2.55,2.55,0,0,0,2.62,2.77m.84-2.28c1.29-.29,1-2.26-.54-2.26H95.16v3.54h.93v-1.1h.33l.84,1.1h1v-.2Zm-.54-1.42a.41.41,0,1,1,0,.81h-.76v-.81Z"
										/>
										<path
											class="cls-1"
											d="M19.76,57.92H15.9V40.24h3.86c5.07,0,8,3.23,8,8.87s-2.9,8.81-8,8.81M74,42.09v-1a12,12,0,0,0-1.87.73,8.94,8.94,0,0,1,1.87.22M31.77,57.57l-1.07,1.5.38-4.24A11.52,11.52,0,0,1,35,47.54c-.3,0-.62.08-1,.15l-3.8.79L33,45.73a14.87,14.87,0,0,1,3.4-2.25l.41-.22A16.22,16.22,0,0,0,28.86,34a18.68,18.68,0,0,0-8.45-2.07v0H13.5c-5.47,0-8.06-.07-10-.51A11.21,11.21,0,0,1,.42,30L0,29.76l0,.5c0,.16.39,3.86,4.82,7.1.86.61,1.46,1.22,1.46,3.4V60.6c0,2.12-.42,2.71-1.41,3.31s-3.26,1.93-3.26,1.93l-.77.45h18c5,0,8.18-.85,11.59-3.13a15.57,15.57,0,0,0,1.35-1,15.44,15.44,0,0,1,0-4.55m34.42.48a1.21,1.21,0,0,0,.12-1.1L65.2,53.9,68,55.56a4.5,4.5,0,0,1,.74.56L70.42,56a8,8,0,0,1,3.6.49V47.79a4.47,4.47,0,0,0-1.33.66l-.71.64-.77-.58a3.41,3.41,0,0,0-2-.59,4.57,4.57,0,0,0-3.38,1.49c-.5.58-1,1.18-1.37,1.77v6.89c.68.52,1.39.51,1.76,0M87,34a18.68,18.68,0,0,0-8.45-2.07v0H71.61c-5.47,0-8.06-.07-10-.51A11.21,11.21,0,0,1,58.53,30l-.42-.28,0,.5c0,.16.39,3.86,4.82,7.1.86.61,1.46,1.22,1.46,3.4v1.43a18.82,18.82,0,0,1,3.15-1.54,9.41,9.41,0,0,0-1.27,1.4,8.29,8.29,0,0,1,3.31-1.22,12.52,12.52,0,0,1,4.4,0v-.54h3.86c5.06,0,8,3.23,8,8.87s-2.91,8.81-8,8.81H76.37a6.45,6.45,0,0,1,2.17,4.75,6.23,6.23,0,0,1-1.18,3.61c4.81,0,7.88-.9,11.2-3.12a16.17,16.17,0,0,0,3.69-3.37A17.45,17.45,0,0,0,95.84,49,16.61,16.61,0,0,0,87,34"
										/>
										<path
											class="cls-1"
											d="M37.55,36.05a8.24,8.24,0,0,1,2.32-6.84,9.62,9.62,0,0,1,7.91-2.79c5.74.31,8.49,4.24,8.49,8.48a12.49,12.49,0,0,1-2.49,6.72l-.25-.26c-.28-.28-.61-.57-1-.88a16.89,16.89,0,0,1-2.72-2.89c1.57-2.86.67-6.91-2.65-6.91a3.67,3.67,0,0,0-3.42,4.15A9.19,9.19,0,0,0,43.13,39,5,5,0,0,1,41,36.84l-1.22-2.92-1,3a5.23,5.23,0,0,0-.17,2.3h0a6.93,6.93,0,0,1-1.08-3.18M33.78,46.56c1.64-1.64,5-2.66,5.21-3.55s-1.51-2.37-2.16-2.65a10.18,10.18,0,0,1,3.57.35,4.22,4.22,0,0,1-.47-3.43c1.3,3.12,5.94,3.62,7.09,6.2a5.06,5.06,0,0,0-2.44-3.09c-.66-1.7-.17-4.82.64-5.69-.29,4.5,6.13,7.07,7.46,10.33-.79-2.8-3.77-4.57-5.19-6.24a4.53,4.53,0,0,1,.4-3.64c-.15,3,3.1,5.36,4.83,7,2.05,2,2.63,3.73,2.35,5.16a1.22,1.22,0,0,1,1,1.3,2.53,2.53,0,0,0,1.48-1.36,5.42,5.42,0,0,1-2.46,5.3,2.09,2.09,0,0,0-.28-1.89c-.66-.8-2.54-.81-3.17-.76,0,0,.77-1.16.47-1.74-.39-.73-4.06-.41-5.71.19a7.22,7.22,0,0,1,2.35.28c-.26.38-.93,2-.45,2.49s1-.33,1-.33-.57,1.77-.16,2.18,1.29.12,1.29.12c-.55,1.39-2.68,2.34-4.18,2.34a3.13,3.13,0,0,0,1.55-1.69A4.16,4.16,0,0,1,46,54a2.8,2.8,0,0,0,1.15-2.84c-.45-2-3.29-2.3-4.72-1.31a5.62,5.62,0,0,1,2.93-3.08,14.29,14.29,0,0,0-2.17-.55A8.17,8.17,0,0,1,47.54,45c-1.78-.46-5,.11-6.52,1.87a11,11,0,0,1,2.17.38,13.36,13.36,0,0,0-5.64,3.17c.21-1.18.54-2.18.27-2.89-.4-1-1.62-1.42-4-.92m18.49.22a3.67,3.67,0,0,0-2.14-2.18c.33,1.14.76,2.18,2.14,2.18M77.38,62.67c0-3.3-3.2-5.86-6.85-5.52A3.12,3.12,0,0,1,73,60c0,2.58-3.22,3.38-5,3,1.89-1.31,1.64-5.08-.63-6.42.77,2.11-1.54,4.21-3.78,2.37-1.25-1-4.13-3.43-5.42-4.47s-2.8-.43-3.39-.88-.24-2-1.17-2.5c-.77-.45-1.54-.2-2.44-.5a1.68,1.68,0,0,1-1.32-1.76,2.21,2.21,0,0,0,.25,2.4c.62.71,1.64,1.15,2.07,1.93.55,1-.38,2.42,2.06,4.34,1.17.91,3,2.41,4.16,3.45,2,1.75.93,3.92,1.19,5.82a4.61,4.61,0,0,0,3.28,3.76,3.44,3.44,0,0,1,0-4.71,6.23,6.23,0,0,0,4.47,5.57c3.24.86,6.69-1,7.41-2.27a5.12,5.12,0,0,1-4.58-1c3.8.54,7.17-2.11,7.17-5.49m-19.72-.86c-1-.89-2.53-2.15-3.67-3.06-1.3,2.22-4.07,5.12-6.87,5.12-5.16,0-7.75-7.3-2-13.28a2.68,2.68,0,0,0-.78-.12,2.37,2.37,0,0,0-1.3.35L40.8,52.39l.52-2.89A3.66,3.66,0,0,1,41.5,49a12.15,12.15,0,0,0-3.09,2.12l-2.24,2.45.24-3.45.15-.77a4.58,4.58,0,0,0,.18-1.49.42.42,0,0,0-.17-.18c-1.06.82-4,3.41-4.33,7.22a3.33,3.33,0,0,1,1-1c.33-.12.61,0,.3,1-.12.37-2.94,8,2.61,13.29,0,0-.61-1.55-.24-2,.18-.23.41-.25.73.16s.49.62.76.92h0A12,12,0,0,0,39,68.73a11.43,11.43,0,0,0,6.48,2.1c6.87,0,10.5-4.74,12.52-8.71-.09-.1-.19-.21-.3-.31M69.48,45.25c-5.11.25-9.52,4.6-11.77,7.67a3.89,3.89,0,0,1,1.22.64l1.92,1.57a27.31,27.31,0,0,1,4.08-6.48,5.43,5.43,0,0,1,7-1.06c1.13-1,5-2,7-1.39A10,10,0,0,0,72.15,43c-2.41,0-3.77,1.18-4.12.65S69.66,42,69.66,42c-2.84.12-4.91,3.47-5.77,3-.51-.25.77-1.86.77-1.86a12.46,12.46,0,0,0-5.23,6.66c2.39-2.93,7-5,10.05-4.59m.86,13A2,2,0,0,1,71.87,60a1.56,1.56,0,0,1-.81,1.37,3.3,3.3,0,0,1-.83.36A5.59,5.59,0,0,0,70.45,60c0-1.09-.11-1.69-.11-1.69"
										/>
									</g>
								</g>
							</svg>
						</div>
						<div class="mt-4 font-bold">Rock Gnome</div>
						<div class="mt-2 text-sm text-gray-600 text-center">
							Darkvision
							<br />
							Gnome Cunning
							<br />
							Artificer's Lore
							<br />
							Tinker
							<br />
							+2 INT, +1 CON
						</div>
					</div>
				</div>

				<div class="mt-4 sm:w-1/3">
					<div class="bg-white p-8 border-b-4 border-pink-500 rounded-lg flex flex-col items-center sm:mx-2 sm:p-3 md:p-8">
						<div class="bg-gray-200 text-indigo-700 w-16 p-2 rounded-full">
							<Scholar className="h-12 w-12 fill-current" />
						</div>
						<div class="mt-4 font-bold">Sage</div>
						<div class="mt-2 text-sm text-gray-600 text-center">
							Lawful Neutral
							<br />
							Dwarvish
							<br />
							Elvish
							<br />
							<i>Proficiencies</i>:
							<div className="flex flex-col items-center">
								<span>Perception,</span>
								<span>History</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}