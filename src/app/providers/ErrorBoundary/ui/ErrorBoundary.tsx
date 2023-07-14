import React, {ErrorInfo, ReactElement, ReactNode} from "react";
// useTranslation in class component
//import {withTranslation} from "react-i18next";

interface ErrorBoundaryProps {
    children: ReactNode
    fallback: ReactElement
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // Example "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
        console.log(error, info.componentStack);
    }

    render() {
        const {hasError} = this.state
        const {fallback, children} = this.props

        if (hasError) {
            // You can render any custom fallback UI
            return fallback;
        }

        return children;
    }
}
// useTranslation in class component
//export default withTranslation()(ErrorBoundary)
