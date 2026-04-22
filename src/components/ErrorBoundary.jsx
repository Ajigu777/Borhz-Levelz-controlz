import { Component } from 'react'
import { AlertCircle, RefreshCw } from 'lucide-react'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    })
    console.error('Error caught by boundary:', error, errorInfo)
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    })
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-blc-black text-blc-text px-4">
          <div className="max-w-md w-full">
            <div className="text-center">
              <AlertCircle className="w-16 h-16 text-blc-pink mx-auto mb-4" />
              <h1 className="text-2xl font-orbitron font-bold mb-2">Oops! Something went wrong</h1>
              <p className="text-blc-muted mb-6">
                We encountered an unexpected error. Our team has been notified.
              </p>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="mb-6 p-4 bg-blc-slate/50 rounded border border-blc-pink/50 text-left">
                  <p className="text-xs font-mono text-blc-pink break-words">
                    {this.state.error.toString()}
                  </p>
                </div>
              )}

              <button
                onClick={this.handleReset}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blc-pink hover:bg-blc-pink/90 text-white font-bold rounded transition duration-300"
                aria-label="Return to home page"
              >
                <RefreshCw size={18} />
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
