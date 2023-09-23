/**
 * Faz o controle de quais menus/telas devem ser mostradas.
 *
 * @param enabledScreen - As telas que devem ser ativadas.
 * @param disabledScreen - As telas que devem ser desativadas
 */
export const handlerMenus = (
  enabled: React.Dispatch<React.SetStateAction<boolean>>[],
  disabled: React.Dispatch<React.SetStateAction<boolean>>[]
) => {
  enabled.forEach((e) => e(true));
  disabled.forEach((d) => d(false));
};
