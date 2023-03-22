import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HomePage from '../HomePage.vue'

import { data } from '../../store.js'

describe('CheckDataFormat', () => {
  it('json data has correct structure', () => {
    expect(data.memes[0]).toHaveProperty('name')
  })
})
