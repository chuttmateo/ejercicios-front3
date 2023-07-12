import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, resetCondition: props.resetCondition };
  }
  //si encuentra un error retornará que hay un error
  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(error, errorInfo) {
    //console.log(error);
    return { hasError: true };
  }

  //este método nos permitirá registrar información de los errores.
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  static getDerivedStateFromProps(props, state){
    if (props.resetCondition !== state.resetCondition) {
      return { hasError: false, resetCondition: props.resetCondition };
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
export default ErrorBoundary
