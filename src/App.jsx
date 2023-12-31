import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {Route, Switch} from 'wouter'
import HotelList from "./Components/HotelList"
import HotelDetails from './Components/HotalDetails'
import { Toaster } from 'react-hot-toast'

const client = new QueryClient()

function App() {
  return (
    <>
    <Toaster position='top-center' reverseOrder={false}/>
      <QueryClientProvider client={client}>
        <Switch>
          <Route path="/" component={HotelList}/>
          <Route path="/hotel/:id" component={HotelDetails}/>
        </Switch>
      </QueryClientProvider>
    </>
  )
}

export default App
