/* eslint-disable */
import React, { useState } from 'react'

import './styles.css'

import { useAxios, useAxiosRetry, useAxiosInterval } from 'use-axios-hooks'

const url = "https://api.github.com/users/NorbertPointu"
const Demo = () => {
  const [state, cancel] = useAxios(
    url
  )

  const [stateR, cancelR] = useAxiosRetry(
    {
      method: 'GET',
      url: url
    },
    {
      retryCount: 3,
      retryInterval: 2000
    }
  )

  const [stateI, cancelI] = useAxiosInterval(
    {
      method: 'GET',
      url:url
    },
    1000
  )

  const items = [
    { title: 'useAxios', state, cancel },
    { title: 'useAxiosRetry', state: stateR, cancel: cancelR },
    { title: 'useAxiosInterval', state: stateI, cancel: cancelI }
  ].map((item) => <DemoSections key={item.title} {...item} />)

  return (
    <div>
      <h1>useAxios lib Demo</h1>
      {items}
    </div>
  )
};

const DemoSections = (props) => {
  const { title, state, cancel } = props
  return (
    <section>
      <div className="content">
        <h3>{title}</h3>
        {/* eslint-disable-next-line react/prop-types */}
        {state.isLoading && 'Loading...'}
        {state.data && !state.isLoading && JSON.stringify(state.data.data)}
        {state.error && !state.isLoading && JSON.stringify(state.error.message)}
        <br />
      </div>
      Cancelled:
      {' '}
      {JSON.stringify(state.isCanceled)}
      <button type="button" onClick={() => cancel()}>
        Cancel
      </button>
    </section>
  )
};

const Exemple3 = (props) => {
  const [show, setShow] = useState(true)

  return (
    <div>
      App
      <button onClick={() => setShow((s) => !s)}>Tog gle Component</button>
      {show ? <Demo /> : null}
    </div>
  )
};

export default Exemple3
