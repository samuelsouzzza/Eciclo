import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faMobileScreen,
  faLaptop,
  faMicrochip,
} from '@fortawesome/free-solid-svg-icons';

/**
 * Retorna o devido ícone de acordo com a categoria da publicação.
 *
 * @param iconName - A categoria do ícone
 * @returns Um ícone do componente <FontAwesomeIcon/>
 */
export const handlerIcons = (iconName: string): IconProp => {
  switch (iconName.toLowerCase()) {
    case 'celular':
      return faMobileScreen;
    case 'notebook':
      return faLaptop;
    case 'hardware':
      return faMicrochip;
    default:
      throw new Error(`Ícone não encontrado para a opção: ${iconName}`);
  }
};
