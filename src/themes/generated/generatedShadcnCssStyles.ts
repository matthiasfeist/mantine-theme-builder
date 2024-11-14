export const generatedShadcnCssStyles = `.globalMantineInput {
  &:focus-within {
    outline: rem(1px) solid var(--mantine-primary-color-filled);
  }
}

.globalMantineTableRow {
  &:hover {
    background-color: rgb(from var(--mantine-color-default-hover) r g b / 0.5);
  }
}

.globalMantineButton {
  &:disabled {
    cursor: default;
    background-color: var(--mantine-color-default);
    opacity: 0.5;
  }
}

.globalMantineCheckbox {
  /* background-color: var(--mantine-color-default); */
  background-color: transparent;
  border-color: var(--mantine-primary-color-filled);

  &:checked {
    border-color: var(--mantine-primary-color-filled);
  }
}

.globalMantineCardRoot {
  background-color: var(--mantine-color-default);
  border-color: var(--mantine-color-default-border);
  border-radius: var(--mantine-radius-default);
}

.globalMantineCardRoot__roseGreen {
  background-color: var(--mantine-color-secondary-filled);
  border-color: var(--mantine-color-default-border);
  border-radius: var(--mantine-radius-default);
}

.mantine-Modal-content {
  overflow-y: hidden;
}

.globalMantineHoverCard {
  background-color: var(--mantine-color-default);
  border-color: var(--mantine-color-default-border);
  border-radius: var(--mantine-radius-default);
}

/* Date Picker */
.mantine-DatePicker-levelsGroup {
  .mantine-DatePicker-calendarHeader {
    --dch-control-size-xs: calc(1.25rem* var(--mantine-scale));
    --dch-control-size-sm: calc(1.75rem* var(--mantine-scale));
    --dch-control-size-md: calc(2.25rem* var(--mantine-scale));
    --dch-control-size-lg: calc(2.5rem* var(--mantine-scale));
    --dch-control-size-xl: calc(2.75rem* var(--mantine-scale));
  
    max-width: none;
    gap: var(--mantine-spacing-xs);
  
    .mantine-DatePicker-calendarHeaderControl {
      border: 1px solid var(--mantine-color-default-border);
      border-radius: var(--mantine-radius-default);
    
      &:hover {
        background-color: var(--mantine-color-default-hover) !important;
      }
    }
  
    .mantine-DatePicker-calendarHeaderLevel {
      &:hover {
        background-color: var(--mantine-color-default-hover) !important;
      }
    
      font-size: var(--mantine-font-size-sm);
    }
  }
  
  .mantine-DatePicker-month {
    border-collapse: separate;
    border-spacing: 0 5px;
  
    .mantine-DatePicker-weekdaysRow{
      .mantine-DatePicker-weekday {
        font-size: var(--mantine-font-size-xs);
      }
    }
  
    .mantine-DatePicker-monthRow {
      margin-top: var(--mantine-spacing-xs);
      margin-bottom: var(--mantine-spacing-xs);
  
      .mantine-DatePicker-day {
        
        --day-size-xs: calc(1.5rem* var(--mantine-scale));
        --day-size-sm: calc(2rem* var(--mantine-scale));
        --day-size-md: calc(2.5rem* var(--mantine-scale));
        --day-size-lg: calc(3rem* var(--mantine-scale));
        --day-size-xl: calc(3.5rem* var(--mantine-scale));
        
        font-size: calc(var(--day-size)/2.28);
        &:hover:where(:not([data-static], [data-disabled], [data-selected], [data-in-range])) {
          background-color: var(--mantine-color-default-hover) !important;
          border-radius: var(--mantine-radius-default);
      
          &[data-in-range] {
            border-radius: 0;
          }
        }
      
        &:where([data-selected]):hover:where(:not([data-disabled], [data-static])){
          background-color: var(--mantine-primary-color-filled-hover);
          border-radius: var(--mantine-radius-default);
        }
      
        &[data-weekend] {
          color: var(--mantine-color-text);
        }
      
        &[data-last-in-range],
        &[data-first-in-range] {
          border-radius: var(--mantine-radius-default);
        }
      
      }
    }
  }
  
  .mantine-DatePicker-monthsList{
    .mantine-DatePicker-monthsListControl{
      --dpc-size-xs: calc(1.5rem* var(--mantine-scale));
      --dpc-size-sm: calc(1.96rem* var(--mantine-scale));
      --dpc-size-md: calc(2.5rem* var(--mantine-scale));
      --dpc-size-lg: calc(3rem* var(--mantine-scale));
      --dpc-size-xl: calc(3.5rem* var(--mantine-scale));
  
      &:hover:where(:not([data-disabled], :disabled)){
        background-color: var(--mantine-color-default-hover) !important;
      }
    }
  }
  
  .mantine-DatePicker-yearsList{
    .mantine-DatePicker-yearsListControl{
      --dpc-size-xs: calc(1.5rem* var(--mantine-scale));
      --dpc-size-sm: calc(1.96rem* var(--mantine-scale));
      --dpc-size-md: calc(2.5rem* var(--mantine-scale));
      --dpc-size-lg: calc(3rem* var(--mantine-scale));
      --dpc-size-xl: calc(3.5rem* var(--mantine-scale));
      &:hover:where(:not([data-disabled], :disabled)){
        background-color: var(--mantine-color-default-hover) !important;
      }
    }
  }
}

/* Menu Dropdown */
.mantine-Menu-dropdown {
  background-color: var(--mantine-color-default);
  border-color: var(--mantine-color-default-border);

  .mantine-Menu-item {
    background-color: transparent;
    &:hover {
      background-color: var(--mantine-color-default-hover);
    }
  }
}

/* Segmented Control */
.mantine-SegmentedControl-root {
  background-color: var(--mantine-color-secondary-outline-hover);

  .mantine-SegmentedControl-indicator {
    background-color: var(--mantine-color-default);
  }
}

/* Title */
.mantine-Title-root {
  letter-spacing: -0.025em;
}











`;