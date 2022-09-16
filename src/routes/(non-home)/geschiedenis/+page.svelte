<main class="flex flex-col items-center w-full">
	<div
		class="timeline overflow-y-auto flex flex-col justify-between my-12 2xl:w-4/5 sm:w-5/6 bg-gray-100 rounded-lg shadow-md"
	>
		<div class="inner">
			<article class="flex flex-col w-full p-16">
				<h2 class="text-4xl font-semibold mb-4 border-b border-gray-200 pb-3">13 September 2022</h2>
				<div class="flex justify-between">
					<div>
						<h4 class="text-xl font-semibold mb-4">Bogdan wordt eindelijk 10</h4>
						<p>BLYATTTTTTTTTTTTTTTTTTT</p>
					</div>
					<img class="rounded-lg w-1/3 max-h-full" src="/egelleeft.png" alt="blyaat" />
				</div>
			</article>
			<article class="flex flex-col w-full p-16">
				<h2 class="text-4xl font-semibold mb-4 border-b border-gray-200 pb-3">13 September 2022</h2>
				<div class="flex justify-between">
					<div>
						<h4 class="text-xl font-semibold mb-4">Bogdan wordt eindelijk 10</h4>
						<p>BLYATTTTTTTTTTTTTTTTTTT</p>
					</div>
					<img class="rounded-lg w-1/3 max-h-full" src="/egelleeft.png" alt="blyaat" />
				</div>
			</article>
			<article class="flex flex-col w-full p-16">
				<h2 class="text-4xl font-semibold mb-4 border-b border-gray-200 pb-3">13 September 2022</h2>
				<div class="flex justify-between">
					<div>
						<h4 class="text-xl font-semibold mb-4">Bogdan wordt eindelijk 10</h4>
						<p>BLYATTTTTTTTTTTTTTTTTTT</p>
					</div>
					<img class="rounded-lg w-1/3 max-h-full" src="/egelleeft.png" alt="blyaat" />
				</div>
			</article>
		</div>
	</div>
</main>

<style lang="scss">
	.timeline {
		min-height: 74vh;
		max-height: 74vh;

		transform: scaleX(-1);

		.inner {
			transform: scaleX(-1);
		}

		article {
			min-height: 74vh;
			max-height: 74vh;
		}

		/* width */
		&::-webkit-scrollbar {
			width: 1rem;
		}

		/* Track */
		&::-webkit-scrollbar-track {
			background: linear-gradient(magenta, rgb(65, 10, 154));
			border-radius: 0 0.5rem 0.5rem 0;
		}

		/* Handle */
		&::-webkit-scrollbar-thumb {
			background: rgba(255, 255, 255, 0.25);
			border-radius: 0 0.5rem 0.5rem 0;
		}

		/* Handle on hover */
		&::-webkit-scrollbar-thumb:hover {
			background: rgba(255, 255, 255, 0.4);
		}
	}
</style>
