import React from 'react'

/**
 * @type {React.Context<{
 *   dispatch: (action: {}) => void,
 *   getFieldValue: (path: Array) => Object,
 * }>}
 */
// @ts-ignore
const simpleFormContext = React.createContext({})

export default simpleFormContext
