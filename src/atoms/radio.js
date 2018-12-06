import { html } from '@polymer/lit-element'
import ui from '@foxford/ui/es/components/Radio/Radio.sass'

import { cn } from '../utils'
import css from '../atoms/radio.css'
import { radio as radiosvg, radioChecked as chkradiosvg } from '../images'

export const radio = ({
  checked,
  classname,
  children,
  label = '',
  name = '',
  value = '',
}) => (html`
  <label class$='${cn(ui.root, ui['size-medium'], css.root)}' for$='${label}'>
    <input
      checked$='${checked}'
      class$='${cn(ui.input, css.input, classname)}'
      id$='${label}'
      name$='${name}'
      type='radio'
      value='${value}'
    />
    ${radiosvg}
    ${chkradiosvg}
    ${(label || children) && html`<span class$='${cn(ui.label, css.label)}'>${label || children}</span>`}
  </label>
`)