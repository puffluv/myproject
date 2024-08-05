import { createContext, useState, useMemo } from 'react'
import { createTheme } from '@mui/material'

export const tokens = (mode: string) => ({
    ...(mode === 'dark'
        ? {
              primary: {
                  DEFAULT: '#000000',
                  100: '#000000',
                  200: '#000000',
                  300: '#000000',
                  400: '#000000',
                  500: '#0F0E0E',
                  600: '#232323',
                  700: '#3D3D3D',
                  800: '#525252',
                  900: '#5C5C5C',
              },
              secondary: {
                  DEFAULT: '#7C7C7C',
              },
              black: {
                  DEFAULT: '#000000',
                  100: '#000000',
                  200: '#000000',
                  300: '#000000',
                  400: '#000000',
                  500: '#0F0E0E',
                  600: '#292929',
                  700: '#3D3D3D',
                  800: '#525252',
                  900: '#5C5C5C',
              },
              white: {
                  DEFAULT: '#FFFFFF',
                  100: '#F7F7F7',
              },
              gray: {
                  DEFAULT: '#3C3C3C',
              },
              accentMain: '#0F0E0E',
              borderColor: '#3C3C3C',
              blue: '#1900D5',
          }
        : {
              white: {
                  DEFAULT: '#FFFFFF',
                  100: '#F7F7F7',
                  200: '#D1D1D1',
              },
              primary: {
                  DEFAULT: '#FFFFFF',
                  500: '#F7F7F7',
              },
              secondary: {
                  DEFAULT: '#7C7C7C',
              },
              black: {
                  DEFAULT: '#000000',
                  100: '#525252',
                  200: '#3D3D3D',
                  300: '#292929',
                  400: '#141414',
                  500: '#000000',
                  600: '#000000',
                  700: '#000000',
                  800: '#000000',
                  900: '#000000',
              },
              gray: {
                  DEFAULT: '#3C3C3C',
              },
              accentMain: '#F7F7F7',
              borderColor: '#D1D1D1',
              blue: '#1900D5',
          }),
})

export const themeSettings: any = (mode: string) => {
    const colors = tokens(mode);
    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
                ? {
                      primary: {
                          main: colors.primary.DEFAULT,
                      },
                      secondary: {
                          main: colors.secondary.DEFAULT,
                      },
                      background: {
                          default: colors.primary[500],
                          paper: colors.primary[600],
                      },
                      text: {
                          primary: colors.white[100],
                          secondary: colors.gray.DEFAULT,
                      },
                  }
                : {
                      primary: {
                          main: colors.primary.DEFAULT,
                      },
                      secondary: {
                          main: colors.secondary.DEFAULT,
                      },
                      background: {
                          default: colors.white.DEFAULT,
                          paper: colors.white[100],
                      },
                      text: {
                          primary: colors.black[500],
                          secondary: colors.gray.DEFAULT,
                      },
                  }),
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        backgroundColor: mode === 'dark' ? '#333' : '#fff', // Цвет фона
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: mode === 'dark' ? '#555' : '#ccc', // Цвет рамки
                            },
                            '&:hover fieldset': {
                                borderColor: mode === 'dark' ? '#777' : '#888',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: mode === 'dark' ? '#fff' : '#000',
                            },
                            '& input': {
                                color: mode === 'dark' ? '#fff' : '#000', // Цвет текста внутри поля
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: mode === 'dark' ? '#aaa' : '#555', // Цвет метки
                        },
                    },
                },
            },
        },
        typography: {
            fontFamily: ['Ysabeau SC', 'sans-serif'].join(','),
            fontSize: 14,
            h1: {
                fontFamily: ['Ysabeau SC', 'sans-serif'].join(','),
                fontSize: 40,
                fontWeight: 600,
            },
            h2: {
                fontFamily: ['Ysabeau SC', 'sans-serif'].join(','),
                fontSize: 35,
                fontWeight: 600,
            },
            h3: {
                fontFamily: ['Ysabeau SC', 'sans-serif'].join(','),
                fontSize: 30,
                fontWeight: 500,
            },
            h4: {
                fontFamily: ['Ysabeau SC', 'sans-serif'].join(','),
                fontSize: 25,
                fontWeight: 500,
            },
            p: {
                fontFamily: ['Ysabeau SC', 'sans-serif'].join(','),
                fontSize: 20,
            },
        },
    }
}

export const ColorModeContext = createContext<{ toggleColorMode: () => void }>({
    toggleColorMode: () => {},
})

export const useMode = () => {
    const [mode, setMode] = useState('dark')

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
        }),
        [],
    )

    const theme: any = useMemo(() => createTheme(themeSettings(mode)), [mode])

    return [theme, colorMode]
}