import { createTheme } from '@mui/material';
import { PaletteOptions, Components } from '@mui/material/styles';
const palette: PaletteOptions ={
    primary:{
        main: '#2D5AF0',
    dark: '#163EC0',
    light: '#6A8DFF',
    contrastText: '#fff',
    },
    secondary:{
        main: '#FFB515',
        dark: '#E5A417',
        light: '#FFDF99',
        contrastText: '#8F94B6',
    },
    background: {
        default: '#FEFEFC',
        paper: '#fff',
      },
}
const typography = {
    fontFamily: 'Roboto'
}
const breakpointValues = {
    xs: 0,
    sm: 600,
    md: 768,
    lg: 1280,
    xl: 1920,
  };
  const components: Components = {
    MuiCssBaseline: {
        styleOverrides: {
          ':root': {
            /* hopefully the MUI colors */
            '--pageBackgroundColor': '#f8f9fc',
            '--primaryColor': '#2d5af0',
            '--secondaryColor': '#8f94b6',
            '--primaryTextColor': '#464c71',
    
            '--activeBgr': '#c60f2f',
            '--darkGreyBgr': '#565656',
            '--pageHeaderBgr': '#2a3031',
            '--blackRGBABgr': 'rgba(0, 0, 0, 0.5)',
            '--blackRGBABgrModalVideo': 'rgba(0, 0, 0, 0.9)',
            '--contentBackgroundColor': '#f0f3f8',
            '--sidebarBgr': '#181f47',
            '--sidebarActiveBgr': '#101634',
            '--sidebarIconColor': '#8f94b6',
            '--sidebarActiveIconColor': '#f59f1e',
            '--sidebarSubIconColor': '#b4dffa',
            '--sidebarActiveSubIconColor': '#b7ddac',
    
            /* Hover */
            '--itemHover': '#d5e2ff',
    
            /* Shape */
            '--commonBorderRadius': '14px',
            '--selectMenuBorderRadius': '4px',
            '--sectionPadding': '56px',
            '--mobileSectionPadding': '20px',
    
            /* Error */
            '--error': '#c60f2f',
    
            /* Common */
            '--formColor': '#010101',
            '--white': '#fff',
            '--black': '#111',
            '--activeSidebarTab': '#c60f2f',
            '--activeColor': '#c60f2f',
            '--darkGreyColor': '#565656',
            '--grey': '#9a9a9a',
            '--lightGrey': '#ededed',
            '--sectionStripeGrey': '#f6f6f6',
            '--titleGrey': '#616161',
            '--textGrey': '#b6b9bc',
            '--lightBlue': '#007aff',
            '--tableBorder': '#dee2e6',
            '--brightGreen': '#06d22f',
            '--tableTextColor': '#050505',
            '--spinnerColor': '#2548e6',
            '--grey300': '#c7c7d9',
            '--darkBlue': '#163ec0',
            '--thinBlue': '#6a8dff',
            '--successDark': '#3b876b',
            '--successLight': '#e3fcf3',
    
            /* Preview */
            '--iphoneXHeight': '450px',
            '--iphoneXWidth': '200px',
            '--iphoneXborderRadius': '20px',
            '--iponeXMargin': '20px auto',
            '--PreviewSubTitle': '#848484',
            '--BrandDefault': '#4F96FF',
            '--TopgolfBlue': '#0B4C8C',
          },
    
          html: {
            scrollBehavior: 'smooth',
          },
    
          body: {
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            overflowY: 'hidden',
            color: 'var(--black)',
            fontWeight: 600,
          },
        },
      },
  } 
export const theme = createTheme({
    palette,
    typography,
    breakpoints: {values: breakpointValues}
})