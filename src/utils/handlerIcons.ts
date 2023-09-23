import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faMobileScreen,
  faLaptop,
  faMicrochip,
} from '@fortawesome/free-solid-svg-icons';

export const chooseIcons = (iconName: string): IconProp => {
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
