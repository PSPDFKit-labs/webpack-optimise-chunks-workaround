import * as React from 'react'
import { log } from './utils'

export async function* generateElement() {
    const element = React.createElement('h1')
    yield element
}

export function run() {
    const gen = generateElement()
    const value = gen.next()

    value.then(result => {
        log(result.value)
    })
}

export function load() {
    alert('Loaded!')
}