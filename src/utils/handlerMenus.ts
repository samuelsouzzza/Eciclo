export const handlerMenus = (
  enabled: React.Dispatch<React.SetStateAction<boolean>>,
  disabled: React.Dispatch<React.SetStateAction<boolean>>[]
) => {
  if (enabled) enabled(true);
  disabled.forEach((d) => d(false));
};
