/**
 * Test Setup & Utilities
 * Configure Jest and provide common test utilities
 */

import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

/**
 * Custom render function that wraps components with necessary providers
 */
export function renderWithProviders(
  component,
  {
    initialState = {},
    store = undefined,
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <BrowserRouter>{children}</BrowserRouter>
  }

  return render(component, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
export { renderWithProviders as render }
