import "@fortawesome/fontawesome-svg-core/styles.css";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faEthereum,
} from "@fortawesome/free-brands-svg-icons";

const Fontawersome = () => {
  config.autoAddCss = false;
  library.add(fab, faCoffee, faFacebook, faGithub, faLinkedin, faEthereum);
  return <></>;
};

export default Fontawersome;
