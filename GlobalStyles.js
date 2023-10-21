import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

export const ButtonStyles = theme =>
  StyleSheet.create({
    'App Btns': {
      backgroundColor: theme.colors['Divider'],
      borderBottomWidth: 1,
      borderColor: theme.colors['Light'],
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      color: theme.colors['Strong'],
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      textAlign: 'center',
      width: '45%',
    },
  });

export const CheckboxRowStyles = theme =>
  StyleSheet.create({ 'Checkbox Row': { minHeight: 50 } });
