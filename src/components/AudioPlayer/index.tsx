import { useState, useRef } from "react";

import MainSong from "../../assets/mainsong.mp3";
import { ActionIcon, Affix, Box, useMantineTheme } from "@mantine/core";
import { IconMusic, IconPlayerPause, IconPlayerPlay } from "@tabler/icons-react";
import ReactAudioSpectrum from "react-audio-spectrum";

import styles from "./styles.module.scss";
const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const theme = useMantineTheme();
  theme.colors.green[1]
  const togglePlay = () => {
    if (isPlaying) {

      setTimeout(() => audioRef.current?.pause(), 450);
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Affix bottom={20} right={20}>
      <Box className={`${styles.playerContainer} ${isPlaying ? styles.pause : styles.play}`}>
        <audio ref={audioRef} src={MainSong} id="main-song-player" onEnded={() => setIsPlaying(false)} />
        <Box className={styles.waveformContainer}>
          <ReactAudioSpectrum
            id="audio-canvas"
            height={30}
            width={30}
            audioId="main-song-player"
            capColor={'red'}
            capHeight={0}
            meterWidth={3}
            meterCount={256}
            meterColor={[
              { stop: 0, color: theme.colors.green[6] },
              { stop: 0.5, color: theme.colors.green[8] },
              { stop: 1, color: theme.colors.green[9] }
            ]}
            gap={3}
          />
        </Box>
        <ActionIcon onClick={togglePlay} style={{
          height: 30,
          width: 30,
          backgroundColor: 'transparent',
          marginLeft: 12,
          marginRight: 13,
        }}>{isPlaying ? <IconPlayerPause color={theme.colors.green[9]} /> : <IconMusic color={theme.colors.green[9]} />}</ActionIcon>
      </Box>
    </Affix>
  );
};

export default AudioPlayer;
