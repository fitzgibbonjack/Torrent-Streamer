import React, { useState } from "react";

// Components
import { HeadFC } from "gatsby";

// Types
import { FormEvent } from "react";
import { PageProps } from "gatsby";
import { StreamingStatistics } from "../types/streaming";

const IndexPage: React.FC<PageProps> = () => {
	const [torrent, setTorrent] = useState<string | null>(null);
	const [stats, setStats] = useState<StreamingStatistics>();

	return (
		<main>
			<h1 className="mb-2">Torrent Streaming - PoC</h1>

			<form onSubmit={handleSubmit}>
				<label className="d-block mb-1">Torrent magnet URL:</label>
				<input type="text" name="torrent" />

				<button type="submit" className="ml-1">
					Stream
				</button>
			</form>

			{torrent && (
				<p className="mt-2">
					<strong>Streaming: </strong>
					{torrent}
				</p>
			)}
		</main>
	);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		// @ts-ignore
		const { torrent } = event.target;
		const torrentUrl = torrent.value;
		setTorrent(torrentUrl);

		// Clear input
		torrent.value = "";

		streamFile(torrentUrl);
	}

	function streamFile(torrentUrl: string) {
		const apiUrl = process.env.API_URL;
		const baseUrl = `${apiUrl}/api/stream`;
		const body = { stream: torrentUrl };

		fetch(baseUrl, {
			method: "POST",
			body: JSON.stringify(body),
			headers: { "Content-Type": "application/json" },
		});
	}
};

export default IndexPage;

export const Head: HeadFC = () => <title>Torrent Streamer</title>;
