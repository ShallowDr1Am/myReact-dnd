import { legacy_createStore } from 'redux'
import reducer from './reducers'
import DragDropManagerImpl from './classes/DragDropManagerImpl'
/**
 * 创建拖拽管理器的工具
 * 整个dnd应用
 */
function createDragDropManager(backendFactory) {
  // 创建一个仓库存放Dnd项目的状态
  const store = legacy_createStore(reducer)
  const manager = new DragDropManagerImpl(store)
  const backend = backendFactory(manager)
  manager.receiveBackend(backend)
  return manager
}

export default createDragDropManager