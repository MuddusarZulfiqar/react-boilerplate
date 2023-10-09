import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error here or perform other actions
    console.error(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Render an error message or a fallback UI
      return <h1>Something went wrong.</h1>;
    }

    // Render the child components as usual
    return this.props.children;
  }
}

export default ErrorBoundary;
