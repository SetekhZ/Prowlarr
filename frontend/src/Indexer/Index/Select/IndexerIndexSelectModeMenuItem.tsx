import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import React, { useCallback } from 'react';
import { SelectActionType, useSelect } from 'App/SelectContext';
import PageToolbarOverflowMenuItem from 'Components/Page/Toolbar/PageToolbarOverflowMenuItem';

interface IndexerIndexSelectModeMenuItemProps {
  label: string;
  iconName: IconDefinition;
  isSelectMode: boolean;
  onPress: () => void;
}

function IndexerIndexSelectModeMenuItem(
  props: IndexerIndexSelectModeMenuItemProps
) {
  const { label, iconName, isSelectMode, onPress } = props;
  const [, selectDispatch] = useSelect();

  const onPressWrapper = useCallback(() => {
    if (isSelectMode) {
      selectDispatch({
        type: SelectActionType.Reset,
      });
    }

    onPress();
  }, [isSelectMode, onPress, selectDispatch]);

  return (
    <PageToolbarOverflowMenuItem
      label={label}
      iconName={iconName}
      onPress={onPressWrapper}
    />
  );
}

export default IndexerIndexSelectModeMenuItem;
