import {
  createContext,
  VFC,
  ReactNode,
  useState,
  useEffect,
  useCallback,
} from "react";

type AppProviderType = {
  children: ReactNode;
};

type UserType = { phone: string; name: string };

export type ConfirmationLogType = {
  users: UserType[];
  wasSave: boolean;
};

type AppContextType = {
  confirmationLog?: ConfirmationLogType;
  setConfirmationLog: (users: UserType) => void;
};

export const CONFIRMATION_LOG_KEY = "confirmation";

export const AppContext = createContext({} as AppContextType);

const hasWindow = typeof window !== "undefined";
export const AppProvider: VFC<AppProviderType> = ({ children }) => {
  const [confirmationLog, setConfirmationLog] = useState<ConfirmationLogType>();

  const handleConfirmation = useCallback(
    (user: UserType) => {
      if (!hasWindow) {
        return null;
      }

      let params: ConfirmationLogType = {
        users: [user],
        wasSave: false,
      };
      if (
        confirmationLog?.users &&
        confirmationLog.users.length > 0 &&
        !confirmationLog?.wasSave
      ) {
        params = {
          ...params,
          users: [...confirmationLog.users, user],
        };
      }

      window.localStorage.setItem(CONFIRMATION_LOG_KEY, JSON.stringify(params));
    },
    [confirmationLog]
  );

  useEffect(() => {
    if (!hasWindow) return;

    const confirmation = JSON.parse(
      window.localStorage.getItem(CONFIRMATION_LOG_KEY) as string
    ) as unknown;

    setConfirmationLog(confirmation as ConfirmationLogType);
  }, [hasWindow]);

  return (
    <AppContext.Provider
      value={{
        confirmationLog,
        setConfirmationLog: handleConfirmation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
