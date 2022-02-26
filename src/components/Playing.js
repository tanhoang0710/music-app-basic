import React from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";
import { useContext, useState } from "react";

export default function Playing() {
	const { song, handleSetSong, numOfSongs } = useContext(Songs);
	const [isShuffle, setIsShuffle] = useState(false);

	const shuffleIconClass = "fa-solid fa-shuffle";

	const shuffleClass = `text-[#868686] text-xl hover:cursor-pointer ml-5 ${
		isShuffle ? "" : "shuffleInactive"
	}`;

	const handleClickNext = () => {
		if (!isShuffle) handleSetSong(song.id + 1);
		else {
			const random = Math.floor(Math.random() * (numOfSongs - 0 + 1)) + 0;
			handleSetSong(random);
		}
	};

	const handleClickPrev = () => {
		handleSetSong(song.id - 1);
	};

	const handleShuffle = () => {
		setIsShuffle(!isShuffle);
	};

	return (
		<div>
			<AudioPlayer
				className="player-music"
				src={song.url}
				layout="stacked-reverse"
				showSkipControls={true}
				showJumpControls={false}
				onClickNext={handleClickNext}
				onClickPrev={handleClickPrev}
				autoPlayAfterSrcChange={true}
				onEnded={handleClickNext}
				customAdditionalControls={[
					RHAP_UI.LOOP,
					<span className={shuffleClass} onClick={handleShuffle}>
						<i className={shuffleIconClass}></i>
					</span>,
				]}
			/>
		</div>
	);
}
