import React, { useCallback } from 'react';
import { SelectActionType, useSelect } from 'App/SelectContext';
import PageToolbarButton from 'Components/Page/Toolbar/PageToolbarButton';
import { icons } from 'Helpers/Props';
import translate from 'Utilities/String/translate';

interface IndexerIndexSelectAllButtonProps {
  label: string;
  isSelectMode: boolean;
  overflowComponent: React.FunctionComponent;
}

function IndexerIndexSelectAllButton(props: IndexerIndexSelectAllButtonProps) {
  const { isSelectMode } = props;
  const [selectState, selectDispatch] = useSelect();
  const { allSelected, allUnselected } = selectState;

  let icon = icons.SQUARE_MINUS;

  if (allSelected) {
    icon = icons.CHECK_SQUARE;
  } else if (allUnselected) {
    icon = icons.SQUARE;
  }

  const onPress = useCallback(() => {
    selectDispatch({
      type: allSelected
        ? SelectActionType.UnselectAll
        : SelectActionType.SelectAll,
    });
  }, [allSelected, selectDispatch]);

  return isSelectMode ? (
    <PageToolbarButton
      label={allSelected ? translate('UnselectAll') : translate('SelectAll')}
      iconName={icon}
      onPress={onPress}
    />
  ) : null;
}

export default IndexerIndexSelectAllButton;
