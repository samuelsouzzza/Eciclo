import React from 'react';
import { IFeedback, IPublication } from '../@types/types';

type IScreens = {
  showFeed: boolean;
  setShowFeed: React.Dispatch<React.SetStateAction<boolean>>;
  showMenuNewPublication: boolean;
  setShowMenuNewPublication: React.Dispatch<React.SetStateAction<boolean>>;
  showMenuMyPublications: boolean;
  setShowMenuMyPublications: React.Dispatch<React.SetStateAction<boolean>>;
  showDetails: IPublication | null;
  setShowDetails: React.Dispatch<React.SetStateAction<IPublication | null>>;
  showFeedback: IFeedback | null;
  setShowFeedback: React.Dispatch<React.SetStateAction<IFeedback | null>>;
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
  const [showDetails, setShowDetails] = React.useState<IPublication | null>(
    null
  );
  const [showFeedback, setShowFeedback] = React.useState<IFeedback | null>(
    null
  );

  return (
    <ScreensContext.Provider
      value={{
        showFeed,
        setShowFeed,
        showMenuNewPublication,
        setShowMenuNewPublication,
        showMenuMyPublications,
        setShowMenuMyPublications,
        showDetails,
        setShowDetails,
        showFeedback,
        setShowFeedback,
      }}
    >
      {children}
    </ScreensContext.Provider>
  );
};
