<div align="center">
  <h1>vue-instance-manager</h1>
  
  <p>
    Manage VueJs instances in your projects.
  </p>
  
   
<h4>
    <a href="https://github.com/Louis3797/awesome-readme-template/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/Louis3797/awesome-readme-template">Documentation</a>
  <span> · </span>
    <a href="https://github.com/Louis3797/awesome-readme-template/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/Louis3797/awesome-readme-template/issues/">Request Feature</a>
  </h4>
</div>

<br />

<!-- About the Project -->
## :star2: About the Project

This project was created to provide an easy instance of a Vue.js component anywhere in another component.
It is possible to display a registration screen or a modal with a message for example.

Something that is widely used in Vue applications to display components is to use the v-if directive. With VIM(vue-instance-manager), it is possible to replace this method in an easier and more readable way

<!-- Getting Started -->
## 	:toolbox: Getting Started

<!-- Installation -->
### :gear: Installation

Install vue-instance-manager with npm

```bash
  npm install vue-instance-manager
```

<!-- Usage -->
## :eyes: Usage

Example use:

First import a component you want to instantiate.

Then import from vue-instance-manager

Create a function that will call the component instance, which can be called by the click event, for example.
There are open and close methods that can be used.

```javascript
<script>
import Vim from 'vue-instance-manager'
import Form from '@/components/Formulario.vue' //Component to be displayed
// @ is an alias to /src
'
export default {
  name: 'HomeView',
  methods:{
    OpenForm(){
      const Instance = Vim.instance(Form)

      Vim.open(Instance, 'body')
    }
  }
}
</script>
```

Once the instance is defined, it is possible to use the open and close functions

## Function Instance

Receives by parameter the component that will be instantiated.

## Function Open

Wait for a parameter to receive the defined instance and the html selector where it will be added (tag, class and id), this method can also listen to the close event that the component emits to the parent.

## Function Close
Receives by parameter the instance of the component that will be removed, it can be called directly with Vim.Close or directly in the instantiated component by issuing to the parent with ```$emit('close')```

<!-- Screenshots -->
### :camera: Screenshots

<div align="center"> 
  <img src="/assets/print1.png" alt="screenshot1" />
  <hr>
  <img src="/assets/print2.png" alt="screenshot2" />
</div>


<!-- TechStack -->
### :space_invader: Tech Stack

  <ul>
    <li><a href="https://www.javascript.com/">JavaScript</a></li>
    <li><a href="https://vuejs.org/">Vue.JS</a></li>
  </ul>
