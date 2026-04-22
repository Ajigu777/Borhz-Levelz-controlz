/**
 * Example Component Tests
 * Tests for Navbar component accessibility and functionality
 */

import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '../setup'
import Navbar from '../../components/Navbar'

describe('Navbar Component', () => {
  it('should render navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /gallery/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument()
  })

  it('should have accessible logo link', () => {
    render(<Navbar />)
    const logoLink = screen.getByRole('link', { name: /borhz level controlz home/i })
    expect(logoLink).toBeInTheDocument()
  })

  it('should have accessible mobile menu button', () => {
    render(<Navbar />)
    const menuButton = screen.getByRole('button', { name: /open navigation menu/i })
    expect(menuButton).toBeInTheDocument()
  })

  it('should have proper ARIA labels on buttons', () => {
    render(<Navbar />)
    const bookButton = screen.getByRole('link', { name: /book now/i })
    expect(bookButton).toHaveAttribute('aria-label')
  })

  it('should support keyboard navigation', () => {
    render(<Navbar />)
    const homeLink = screen.getByRole('link', { name: /home/i })
    homeLink.focus()
    expect(homeLink).toHaveFocus()
  })
})
