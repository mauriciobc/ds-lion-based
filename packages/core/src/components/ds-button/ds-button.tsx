import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-button',
  styleUrl: 'ds-button.css',
  shadow: true,
})
export class DsButton {
  @Prop() variant: 'primary' | 'secondary' | 'outline' = 'primary';
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';
  @Prop() disabled: boolean = false;
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  render() {
    return (
      <Host>
        <button
          class={`btn btn--${this.variant} btn--${this.size}`}
          disabled={this.disabled}
          type={this.type}
        >
          <slot />
        </button>
      </Host>
    );
  }
}
