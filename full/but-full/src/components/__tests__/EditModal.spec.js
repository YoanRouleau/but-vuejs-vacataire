import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import EditModal from '../EditModal.vue'

describe('OpeningEditModal', () => {
  it('testing if modal pops up correctly', () => {
    const wrapper = mount(
      EditModal, { 
        props: { 
          passedMemeId: 198834788
        } 
      }
    )
    expect(wrapper.text()).toContain('Edit Meme')
  })
})
