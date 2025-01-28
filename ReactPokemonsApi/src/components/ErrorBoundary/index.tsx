// import React, { Component } from 'react'

// interface ErrorBoundaryState {
//     hasError: boolean
//     errorMessage: string | null
// }

// class ErrorBoundary extends Component<{}, ErrorBoundaryState> {
//     constructor(props: {}) {
//         super(props)
//         this.state = { hasError: false, errorMessage: null }
//     }

//     static getDerivedStateFromError(error: Error) {
//         // Обновляем состояние, чтобы следующий рендер показал запасной интерфейс
//         return { hasError: true, errorMessage: error.message }
//     }

//     componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
//         // Вы можете также отправить информацию об ошибке в службу логирования
//         console.error('Error caught by Error Boundary:', error, errorInfo)
//     }

//     render() {
//         if (this.state.hasError) {
//             // Вы можете отобразить запасной интерфейс
//             return (
//                 <div>{this.state.errorMessage || 'Что-то пошло не так.'}</div>
//             )
//         }

//         return this.props.children
//     }
// }

// export default ErrorBoundary
