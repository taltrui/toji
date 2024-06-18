import { Stack } from "@mantine/core";
import useParams from "../../utils/useParams";
import Confirmation from "./modules/Confirmation";
import Contact from "./modules/Contact";
import DressCode from "./modules/DressCode";
import Gifts from "./modules/Gifts";
import Header from "./modules/Header";
import Place from "./modules/Place";
import Stay from "./modules/Stay";

const Home = () => {
  const params = useParams(["inv"] as const);

  return (
    <Stack align="center">
      <Stack
        style={{
          maxWidth: 600,
        }}
      >
        <Header />
        <Place />
        <DressCode />
        <Stay />
        <Gifts />
        {params.inv && <Confirmation invitationId={params.inv} />}
        <Contact />
      </Stack>
    </Stack>
  );
};

export default Home;
