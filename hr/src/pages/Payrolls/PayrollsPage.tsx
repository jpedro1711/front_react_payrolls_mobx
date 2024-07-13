import { observer } from 'mobx-react-lite'
import PayrollList from './PayrollList'
import RegisterNewPayroll from './RegisterNewPayroll'

const PayrollsPage = () => {
  return (
    <div>
        <RegisterNewPayroll />
        <PayrollList />
    </div>
  )
}

export default observer(PayrollsPage)