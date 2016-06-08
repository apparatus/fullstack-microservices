# Spike 1.2

* normalize error handling
  * i.e. all errors come through callback first param, instead of potentially in response objects
* simplify services.js 

# Spike 1.1

* introduces [lucius](http://npm.im/lucius) - browser-side seneca microservices
* removes the need to export script from component (pattern matching etc. replaces this approach)
* enforces idea of microservice pattern matching across browser and server


## Previous Spikes

# Spike 1

* Simplest most common libs possible
* jQuery
* bootstrap
* ignores the styling issue




## Planned Spikes

### Spike 2

* polymer
* this time encapsulate styles
* separate structure from skin
* use polymer app toolbox components
* may need a component manager (`npm`? `component`?)

### Spike 3

* react
* react-bootstrap with css modules...
* etc.
* possibly include a Spike 3.5 with a react-native example for mobile

### Spike 4

* minimalism with vanilla JS and vdom
