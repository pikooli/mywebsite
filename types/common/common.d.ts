type Obj = {
  [key: string]: any;
};

type FormEvent = React.FormEvent<HTMLFormElement>;

type NextApiResponseCustom = NextApiResponse & {
  socket: {
    server: Obj;
  };
};

type BtnType = "button" | "submit" | "reset" | undefined;

interface Event<T = EventTarget> {
  target: T;
  // ...
}

type Btn = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
  text?: string;
  icon?: IconProp;
  type?: BtnType;
  iconClassName?: string;
  datacy?: string;
  toolTipText?: string;
  toolTipPosition?: string;
  iconclassname?: string;
};

class Data {
  key: number;
  data: number;
}
