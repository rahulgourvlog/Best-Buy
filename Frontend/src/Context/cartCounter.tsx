import React, { createContext, useEffect, useState } from "react";

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
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("userid") || ""
  );
  const [total, setTotalContext] = useState(
    Number(localStorage.getItem("userid")) || 0
  );

  // useEffect(() => {
  //   console.log(isLogged);
  // }, [isLogged]);

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
