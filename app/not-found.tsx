import Link from 'next/link';
import { FaceSmileIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
	return (
		<main className="flex h-full flex-col items-center justify-center gap-2">
			<FaceSmileIcon className="w-10 text-gray-400" />
			<h2 className="text-xl font-semibold">404 Not Found</h2>
			<p>This is not the page you&rsquo;re looking for.</p>
			<Link
				href="/"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
			>
				Return home
			</Link>
		</main>
	)
}