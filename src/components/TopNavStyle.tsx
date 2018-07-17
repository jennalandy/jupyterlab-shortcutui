import {
  style
} from 'typestyle'

export const TopStyle = style (
  {
    display: 'block',
    height: 178, 
    position: 'relative'
  }
)

export const TopNavStyle = style (
  {
    display: 'flex',
    fontSize: 'var(--jp-ui-font-size2)',
    backgroundColor: 'var(--jp-layout-color0)',
    zIndex: 1,
    paddingTop: '30px',
  }
)

export const TopNavStyleSmall = style (
  {
    // paddingBottom: '42px'
  }
)

export const SymbolsStyle = style(
  {
    width: '20%'
  }
)

export const SymbolsRowStyle = style (
  {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '20%',

    $nest: {
      '& div': {
        margin: '0px 10px',
        fontSize: 'var(--jp-ui-font-size1)'
      }
    }
  }
)

export const SearchContainerStyle = style (
  {
    width:' 50%',
    textAlign: 'center'
  }
)

export const SearchStyle = style (
  {
    borderWidth: 'var(--jp-border-width)',
    borderStyle: 'solid',
    borderColor: 'var(--jp-layout-color3)',
    /* border-radius: var(--jp-border-radius);   this is 2px */
    borderRadius: '3px',
    height: '20px',
    width: '65%',
    fontSize: 'var(--jp-ui-font-size1)',
    color: 'var(--jp-ui-font-color0)',
    padding: '3px',
    paddingLeft: '6px',
    textIndent: '4px',
    backgroundColor: 'var(--jp-layout-color1)',
    backgroundImage: 'var(--jp-icon-search)',
    backgroundSize: '18px',
    backgroundPositionY: '4px',
    backgroundPositionX: '98%',
    backgroundRepeat: 'no-repeat',
    marginTop: '8px',

    $nest: {
      '&:focus': {
        outline:'none'
      },
      '&::placeholder': {
        color: 'var(--jp-ui-font-color2)'
      }
    }
  }
)

export const AdvancedOptionsContainerStyle = style (
  {
    display: 'contents'
  }
)

export const AdvancedOptionsStyle = style (
  {
    display: 'block',
    width: '15%'
  }
)

export const AdvancedOptionsRightStyle = style (
  {
    marginTop: '8px'
  }
)

export const AdvancedOptionsLinkStyle = style (
  {
    color: 'var(--jp-brand-color2)',
    textDecoration: 'none',
    display: 'block',
    textAlign: 'center',

    $nest: {
      '&:hover': {
        textDecoration: 'underline'
      },
      '&:active': {
        color: 'var(--jp-brand-color0)'
      }
    }
  }
)

export const AdvancedOptionsLinkRightStyle = style (
  {
    textAlign: 'left'
  }
)

export const TitleCellStyle = style (
  {
    padding: '6px 12px',
    display: 'table-cell',
    width: '20%',
    verticalAlign: 'middle'
  }
)

export const HeaderRowStyle = style(
  {
    fontWeight: 'bold', //'var(--jp-content-heading-font-weight)',
    fontSize: 'var(--jp-ui-font-size2)',
    backgroundColor: 'var(--jp-layout-color0)',
    zIndex: 1,
    display: 'table',
    position: 'absolute',
    top:128,
    boxSizing:'border-box',
    padding: '10px 15px 10px 0'
  }
)