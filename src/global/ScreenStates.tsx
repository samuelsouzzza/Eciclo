import React from 'react';

type IScreens = {
  showFeed: boolean;
  setShowFeed: React.Dispatch<React.SetStateAction<boolean>>;
  showMenuNewPublication: boolean;
  setShowMenuNewPublication: React.Dispatch<React.SetStateAction<boolean>>;
  showMenuMyPublications: boolean;
  setShowMenuMyPublications: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScreensContext = React.createContext<IScreens | null>(null);

export const UseContextScreens = () => {
  const context = React.useContext(ScreensContext);
  if (!context) throw new Error('useContext deve estar dentro do Provider');
  return context;
};

export const ScreensContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [showFeed, setShowFeed] = React.useState(true);
  const [showMenuNewPublication, setShowMenuNewPublication] =
    React.useState(false);
  const [showMenuMyPublications, setShowMenuMyPublications] =
    React.useState(false);

  return (
    <ScreensContext.Provider
      value={{
        showFeed,
        setShowFeed,
        showMenuNewPublication,
        setShowMenuNewPublication,
        showMenuMyPublications,
        setShowMenuMyPublications,
      }}
    >
      {children}
    </ScreensContext.Provider>
  );
};
