export const generatedShadcnCssStyles = `.globalMantineInput {
  &:focus-within {
    outline: rem(1px) solid var(--mantine-primary-color-filled) ;
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
  background-color: var(--mantine-color-dark-filled);
  border-color: var(--mantine-color-default-border);
  border-radius: var(--mantine-radius-default);
}

.mantine-Modal-content{
  overflow-y: hidden;
}`;