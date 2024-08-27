import { Stack } from "@mantine/core";
import useParams from "../../utils/useParams";
import Confirmation from "./modules/Confirmation";
import Contact from "./modules/Contact";
import DressCode from "./modules/DressCode";
import Gifts from "./modules/Gifts";
import Header from "./modules/Header";
import Place from "./modules/Place";
import Stay from "./modules/Stay";
import AudioPlayer from "../../components/AudioPlayer";
import { useEffect } from "react";

const Invitation = () => {
  const params = useParams(["inv"] as const);

  console.log(params)
  useEffect(() => {
    if (params.inv) {
      localStorage.setItem('invitationId', params.inv);
    }
  }, [params.inv]);

  const invitationId = params.inv || localStorage.getItem('invitationId');

  return (
    <Stack align="center">
      <Stack
        style={{
          maxWidth: 600,
        }}
      >
        <AudioPlayer />
        <Header />
        <Place />
        <DressCode />
        <Stay />
        <Gifts />
        {invitationId && <Confirmation invitationId={invitationId} />}
        <Contact />
      </Stack>
    </Stack>
  );
};

export default Invitation;
