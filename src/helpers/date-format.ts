import { format, isThisYear } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const formatShortDate = (date: string) => {
  const _date = new Date(date);

  return format(_date, 'dd/MM/yyyy', { locale: ptBR });
};