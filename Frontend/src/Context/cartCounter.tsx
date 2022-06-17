import React, { createContext, useState } from "react";

const CartCount_Context = createContext({
  isChanged: true,
  setIsChanged: (value: boolean) => {},
  isLogged: "",
  setIsLogged: (value: string) => {},
  total: 0,
  setTotalContext: (value: number) => {},
});

const CartCount_Provider = ({ children }: React.PropsWithChildren<{}>) => {
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const [isLogged, setIsLogged] = useState("");
  const [total, setTotalContext] = useState(0);

  return (
    <CartCount_Context.Provider
      value={{
        isChanged,
        setIsChanged,
        isLogged,
        setIsLogged,
        total,
        setTotalContext,
      }}
    >
      {children}
    </CartCount_Context.Provider>
  );
};

export { CartCount_Context, CartCount_Provider };
