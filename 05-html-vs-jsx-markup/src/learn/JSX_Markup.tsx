
import ConditionalRendering from './ConditionalRendering'
import DataBinding from './DataBinding'
import { imageType, statusMessage } from '@/data/learn'


function JSX_Markup() {
  return (
    <dl className="descriptionList">
      <DataBinding statusMessage={statusMessage}/>
      <ConditionalRendering imageType={imageType} />
    </dl>
  )
}

export default JSX_Markup