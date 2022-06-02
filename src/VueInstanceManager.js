import Vue from 'vue'

export default class VueInstanceManager {
  static instance (importedClass, dependencies = {}) {
    const ImportedClass = Vue.extend(importedClass)

    return new ImportedClass(dependencies)
  }

  static open (instance, selector = 'body') {
    const container = this.getContainerBySelector(selector)

    this.insertContainerIntoInstance(instance, container)

    const target = document.createElement('DIV')

    this.add(instance, target)
  }

  static close (instance) {
    this.remove(instance)
  }

  static add (instance, target) {
    this.getContainerByInstance(instance).appendChild(target)

    instance.$mount(target)
  }

  static remove (instance) {
    this.getContainerByInstance(instance).removeChild(instance.$el)

    instance.$destroy()
  }

  static insertContainerIntoInstance(instance, container) {
    instance['__VIM__CONTAINER'] = container
  }

  static getContainerByInstance(instance) {
    return instance['__VIM__CONTAINER']
  }

  static getContainerBySelector(selector) {
    const container = document.querySelector(selector)

    if (!container) {
      throw (`No container found using the context "${selector}"`)
    }

    return container
  }
}