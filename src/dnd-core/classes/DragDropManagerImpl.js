


class DragDropManagerImpl {
  store
  backend
  constructor(store) {
    this.store = store
  }
  receiveBackend(backend) {
    this.backend = backend
  }
  getBackend() {
    return this.backend
  }
}

export default DragDropManagerImpl