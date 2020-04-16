import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import FilterInput from './PokeFilter/FilterInput/FilterInput'

test('render FilterInput', () => {
  const { queryByPlaceholderText } = render(<FilterInput />)
  expect(queryByPlaceholderText('Search for your favourite Poke')).toBeTruthy()
})

test('input some value FilterInput', () => {
  const { queryByPlaceholderText } = render(<FilterInput />)
  const searchInput = queryByPlaceholderText('Search for your favourite Poke')
  fireEvent.change(searchInput, {target: {value: 'poke'}})
  expect(searchInput.value).toBe('poke')
})
