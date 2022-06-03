import { IData } from './../interfaces/DataInterface';

export const handleData = (
  data: IData[],
  termToFilter: string
): IData[] => {
  switch (termToFilter) {
    case 'all':
      return data;

    case 'feature':
      return data.filter((suggestion) => suggestion.category === 'feature');

    case 'UI':
      return data.filter((suggestion) => suggestion.category === 'UI');

    case 'UX':
      return data.filter((suggestion) => suggestion.category === 'UX');

    case 'enhancement':
      return data.filter((suggestion) => suggestion.category === 'enhancement');

    case 'bug':
      return data.filter((suggestion) => suggestion.category === 'enhancement');

    default:
      return data
  }
};
