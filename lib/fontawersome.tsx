import "@fortawesome/fontawesome-svg-core/styles.css";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCoffee, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faEthereum,
} from "@fortawesome/free-brands-svg-icons";

const Fontawersome = () => {
  config.autoAddCss = false;
  library.add(
    fab,
    faSun,
    faMoon,
    faCoffee,
    faFacebook,
    faGithub,
    faLinkedin,
    faEthereum
  );
  return <></>;
};

export default Fontawersome;
