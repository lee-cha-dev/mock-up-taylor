import { extendTheme } from '@chakra-ui/react';
import {
  forest_colors,
  lavender_colors,
  ocean_colors,
  default_colors,
  sunset_colors,
  earthy_colors
} from './colors';

const createTheme = (colors) => extendTheme({
  styles: {
    global: {
      body: {
        bg: colors.bodyBg,
      },
    },
  },
  colors: {
    brand: {
      100: colors.primary,
      500: colors.secondary,
      900: colors.tertiary,
    },
  },
});

export const defaultTheme = createTheme(default_colors);
export const forestTheme = createTheme(forest_colors);
export const lavenderTheme = createTheme(lavender_colors);
export const oceanTheme = createTheme(ocean_colors);
export const sunsetTheme = createTheme(sunset_colors);
export const earthyTheme = createTheme(earthy_colors);

// Export all themes in an object for easy access
export const themes = {
  default: defaultTheme,
  forest: forestTheme,
  lavender: lavenderTheme,
  ocean: oceanTheme,
  sunset: sunsetTheme,
  earthy: earthyTheme,
};

// Export a function to get a theme by name
export const getThemeByName = (name) => themes[name] || defaultTheme;