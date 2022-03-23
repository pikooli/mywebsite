import React, { useEffect, useCallback } from "react";

import tom1 from "public/drumkit/sounds/tom-1.mp3";
import tom2 from "public/drumkit/sounds/tom-2.mp3";
import tom3 from "public/drumkit/sounds/tom-3.mp3";
import tom4 from "public/drumkit/sounds/tom-4.mp3";
import snare from "public/drumkit/sounds/snare.mp3";
import kickBass from "public/drumkit/sounds/kick-bass.mp3";
import crash from "public/drumkit/sounds/crash.mp3";
import Title3 from "components/text/Title3";

type Props = {};

const Drumkit: React.FC<Props> = () => {
  const listener = useCallback((e: KeyboardEvent) => {
    const element: HTMLElement = document.getElementsByClassName(
      e.key
    )[0] as HTMLElement;
    if (element) element.click();
  }, []);

  useEffect(() => {
    window.document.addEventListener("keydown", listener);
    return () => {
      window.document.removeEventListener("keydown", listener);
    };
  }, []);

  function playSound(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (e) {
      const target = e.currentTarget;
      target.style.borderColor = "#da0463";
      let audio;
      switch (target.classList[0]) {
        case "w":
          audio = new Audio(tom1); //change the source
          break;
        case "a":
          audio = new Audio(tom2); //change the source
          break;
        case "s":
          audio = new Audio(tom3); //change the source
          break;
        case "d":
          audio = new Audio(tom4); //change the source
          break;
        case "j":
          audio = new Audio(snare); //change the source
          break;
        case "k":
          audio = new Audio(kickBass); //change the source
          break;
        case "l":
          audio = new Audio(crash); //change the source
          break;
      }
      if (audio) {
        audio.play();
        audio = null;
      }
      setTimeout(() => {
        target.style.borderColor = "#404b69";
      }, 500);
    }
  }

  return (
    <div className="drumkit">
      <div className="set py-2">
        <Title3 title="Here a little drum kit to pass time. 🥁" />
        <p>You can click on it or use the keyboard. 👍</p>
        <button className="w drum" onClick={(e) => playSound(e)}>
          w
        </button>
        <button className="a drum" onClick={(e) => playSound(e)}>
          a
        </button>
        <button className="s drum" onClick={(e) => playSound(e)}>
          s
        </button>
        <button className="d drum" onClick={(e) => playSound(e)}>
          d
        </button>
        <button className="j drum" onClick={(e) => playSound(e)}>
          j
        </button>
        <button className="k drum" onClick={(e) => playSound(e)}>
          k
        </button>
        <button className="l drum" onClick={(e) => playSound(e)}>
          l
        </button>
      </div>
    </div>
  );
};

export default Drumkit;
