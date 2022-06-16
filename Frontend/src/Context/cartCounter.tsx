import React, { createContext, useState } from "react";

const CartCount_Context = createContext({
  isChanged: true,
  setIsChanged: (value: boolean) => {},
});

const CartCount_Provider = ({ children }: React.PropsWithChildren<{}>) => {
  const [isChanged, setIsChanged] = useState<boolean>(false);

  return (
    <CartCount_Context.Provider value={{ isChanged, setIsChanged }}>
      {children}
    </CartCount_Context.Provider>
  );
};

export { CartCount_Context, CartCount_Provider };
