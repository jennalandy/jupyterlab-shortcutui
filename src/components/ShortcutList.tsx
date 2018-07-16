import {
  ShortcutItem
} from './ShortcutItem'

import * as React from 'react';

import {
  ShortcutListStyle,
  ShortcutListContainerStyle
} from './ShortcutListStyle'

/** Props for ShortcutList component */
export interface IShortcutListProps {
  shortcuts: Object,
  handleUpdate: Function,
  resetShortcut: Function,
  deleteShortcut: Function,
  showSelectors: boolean,
  keyBindingsUsed: Object,
  sortConflict: Function,
  clearConflicts: Function
}

/** React component for list of shortcuts */
export class ShortcutList extends React.Component<IShortcutListProps, {}> {
  render() {
    return (
      <div className = {ShortcutListContainerStyle}>
        <div className={ShortcutListStyle}>
          {Object(this.props.shortcuts).map(shortcut => 
            <ShortcutItem key={shortcut.commandName + "_" + shortcut.selector} 
              resetShortcut={this.props.resetShortcut} 
              shortcut={shortcut} 
              handleUpdate={this.props.handleUpdate}
              deleteShortcut={this.props.deleteShortcut}
              showSelectors={this.props.showSelectors}
              keyBindingsUsed={this.props.keyBindingsUsed}
              sortConflict={this.props.sortConflict}
              clearConflicts={this.props.clearConflicts}
            />
          )}
        </div>
      </div>
    )
  }
}