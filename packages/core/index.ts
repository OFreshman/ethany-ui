import { makeInstaller } from "@ethany-ui/utils";
import components from "./components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons"
import "@ethany-ui/theme/index.css";

library.add(fas)

const installer = makeInstaller(components);

export * from "@ethany-ui/components";

export default installer;
