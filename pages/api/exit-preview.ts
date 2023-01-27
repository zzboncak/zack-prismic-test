import { exitPreview } from "@prismicio/next";
import { Handler } from "./_helpers";

const exit: Handler = async (req, res) => {
  await exitPreview({ res, req });
};

export default exit;
