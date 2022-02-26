import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";
import { useContext } from "react";

export default function Playing() {
	const { song, handleSetSong } = useContext(Songs);

	const handleClickNext = () => {
		handleSetSong(song.id + 1);
	};

	const handleClickPrev = () => {
		handleSetSong(song.id - 1);
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
				autoPlay={true}
				autoPlayAfterSrcChange={true}
			/>
		</div>
	);
}
