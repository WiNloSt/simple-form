import React from 'react'

/**
 * @type {React.Context<{
 *   dispatch: (action: {}) => void,
 *   getState: () => Object,
 * }>}
 */
// @ts-ignore
const simpleFormContext = React.createContext({})

export default simpleFormContext
