import defautText from '../translations/translation.json';

//@TODO manage translation from Webservice
export const __ = (translationKey) => {
  //fallback
  if (defautText[translationKey]) {
    return defautText[translationKey];
  }

  return translationKey;
};

export const translateMedium = (translationKey, medium) => {
  const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();
  const formattedKey = translationKey + capitalize(medium.codeMedium)

  if (defautText[formattedKey]) {
    return defautText[formattedKey];
  }

  return formattedKey;
};
