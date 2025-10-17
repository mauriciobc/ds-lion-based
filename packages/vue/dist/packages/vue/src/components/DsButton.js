// Wrapper simples para o componente ds-button
export const DsButton = {
    name: 'DsButton',
    props: {
        variant: {
            type: String,
            default: 'primary'
        },
        size: {
            type: String,
            default: 'md'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'button'
        }
    },
    emits: ['click'],
    template: `
    <ds-button
      :variant="variant"
      :size="size"
      :disabled="disabled"
      :type="type"
      @click="$emit('click', $event)"
    >
      <slot />
    </ds-button>
  `
};
//# sourceMappingURL=DsButton.js.map