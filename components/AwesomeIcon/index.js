// TODO: The idea behind this component is allow to import only one component and load
// dynamically the icon:
// <AwesomeIcon iconName="faCoffe" />

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import dynamic from 'next/dynamic'

function AwesomeIcon({ iconName }) {
  console.log(iconName)
  const DynamicIcon = dynamic(() =>
    import('@fortawesome/free-solid-svg-icons').then(mod => {
      console.log('****', mod)
      return mod[iconName]
    })
  )

  return <FontAwesomeIcon icon={DynamicIcon} />
}

export default AwesomeIcon
