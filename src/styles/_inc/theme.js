import {StyleSheet} from 'react-native';

import {variables} from './variables';

export const theme = StyleSheet.create({
  darkBg: {
    backgroundColor: variables.colors.dark,
    color: variables.colors.white,
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  mainTitle: {
    fontFamily: variables.fontPrimaryRegular,
    fontSize: 22,
    lineHeight: 25,
    color: variables.colors.dark,
    textAlign: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 15,
    lineHeight: 19,
    textAlign: 'center',
  },
  headerOnLight: {
    color: variables.colors.darkGrey,
  },

  gutter: {
    paddingHorizontal: variables.gutterWidth,
  },
  gutterScreen: {
    paddingHorizontal: variables.gutterScreen,
  },

  topSpace: {
    marginTop: variables.verticalSpace,
  },

  tabText: {
    textTransform: 'uppercase',
    fontFamily: variables.fontPrimaryRegular,
    fontSize: 9,
    marginTop: -10,
  },
});
