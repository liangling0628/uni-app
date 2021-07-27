import { UniNodeJSON } from '@dcloudio/uni-shared'
import Map from '../../../components/map'

import { UniComponent } from './UniComponent'

export class UniMap extends UniComponent {
  constructor(
    id: number,
    parentNodeId: number,
    refNodeId: number,
    nodeJson: Partial<UniNodeJSON>
  ) {
    super(id, 'uni-map', Map, parentNodeId, refNodeId, nodeJson)
  }
}