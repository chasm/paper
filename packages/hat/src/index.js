import * as React from 'react'
import * as serviceWorker from './serviceWorker'

import Paperhat from './components/Paperhat'
import { render } from 'react-dom'

render(<Paperhat />, document.getElementById('root'))

serviceWorker.unregister()
