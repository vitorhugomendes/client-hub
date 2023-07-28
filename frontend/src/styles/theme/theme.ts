export type ThemeType = typeof light;

export const light = {
  fonts: {
    primary: 'Inter',
  },
  colors: {
    primary: '#0d47a1',
    secondary: '#1565c0',
    tertiary: '#1976d2',
    gray1: '#212121',
    gray2: '#424242',
    gray3: '#616161',
    text: '#000',
    background: '#fff',
    feedback: {
      negative: '#E60000',
      warning: '#FFCD07',
      sucess: '#168821',
      information: '#155BCB',
    },
  },
};

export const dark: ThemeType = {
  fonts: {
    primary: 'Inter',
  },
  colors: {
    primary: '#90caf9',
    secondary: '#64b5f6',
    tertiary: '#42a5f5',
    gray1: '#bdbdbd',
    gray2: '#9e9e9e',
    gray3: '#757575',
    text: '#fff',
    background: '#000',
    feedback: {
      negative: '#E60000',
      warning: '#FFCD07',
      sucess: '#168821',
      information: '#155BCB',
    },
  },
};

export const theme = light;
