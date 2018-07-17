import {
  style
} from 'typestyle'

export const ShortcutListStyle = style (
  {
    width: '100%',
    display: 'table',
    borderCollapse: 'collapse',
  }
)

export function MakeShortcutListContainerStyle(height)
{
  let ShortcutListContainerStyle =  style (
    {
      //178 is the overall height of top nav
      height: height - 178,
      overflowY: 'scroll'
    }
  )
  return ShortcutListContainerStyle
}