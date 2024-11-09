declare module "@lottiefiles/dotlottie-react-native" {
  import { RefObject } from "react";

  export interface DotLottieProps {
    source: string | object;
    style?: object;
    loop?: boolean;
    autoplay?: boolean;
    ref?: RefObject<DotLottie>;
  }

  export class DotLottie extends React.Component<DotLottieProps> {
    play: () => void;
    pause: () => void;
    stop: () => void;
    setLoop: (loop: boolean) => void;
    setSpeed: (speed: number) => void;
    setPlayMode: (mode: "FORWARD" | "REVERSE") => void;
  }

  export const Mode: {
    FORWARD: "FORWARD";
    REVERSE: "REVERSE";
  };
}

declare module "*.lottie" {
  const content: any;
  export default content;
}
