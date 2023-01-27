import { setPreviewData, redirectToPreviewURL } from "@prismicio/next";
import { createClient } from "../../prismicio";
import { Handler } from "./_helpers";

const handler: Handler = async (req, res) => {
  const client = createClient({ req });

  await setPreviewData({ req, res });

  await redirectToPreviewURL({ req, res, client });
};

export default handler;
