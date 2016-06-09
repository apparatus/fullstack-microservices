# Spike 2

* polymer
* still uses bootstrap classes
* no need for main.js at all! 
* each service has a component folder, containing
  * template.html - the template for the component
  * styles.css - style for the component, obviously supports scoped styling via `:host` - no styles in this spike, will be in next
  * definition.js - defines the component, click handlers etc.
  * index.js - function that returns object with html property (as component.js before), assembles custom element from templates, styles and definition.
* import custom elements from service components
* components add their own actions on instantiation (see activity/component)
* components trigger actions based on user interaction (see service1/component)
* the component itself has `add`, `act` (uses lucius-polymer to do this, may break that into it's own module)

## Previous Spikes

# Spike 1.2

* normalize error handling
  * i.e. all errors come through callback first param, instead of potentially in response objects
* simplify services.js 

# Spike 1.1

* introduces [lucius](http://npm.im/lucius) - browser-side seneca microservices
* removes the need to export script from component (pattern matching etc. replaces this approach)
* enforces idea of microservice pattern matching across browser and server



# Spike 1

* Simplest most common libs possible
* jQuery
* bootstrap
* ignores the styling issue


## Planned Spikes

# Spike 2.2

* this time encapsulate styles
* separate structure from skin

# Spike 2.3

* use public polymer components / material design


### Spike 3

* react
* react-bootstrap with css modules...
* etc.
* possibly include a Spike 3.5 with a react-native example for mobile

### Spike 4

* minimalism with vanilla JS and vdom
