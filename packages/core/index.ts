import { makeInstaller } from "@ethany-ui/utils";
import components from "./components";
import "@ethany-ui/theme/index.css";

const installer = makeInstaller(components);

export * from "@ethany-ui/components";

export default installer;
