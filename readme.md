# Spike 3

* finding the mu api ideal

## Previous Spikes

# Spike 2.1

* addresses styling
* components use material design polymer components, with neutral styling
* component styles use the [css-apply-rule](https://tabatkins.github.io/specs/css-apply-rule/) to declare expected mixin names, e.g. `.action { @apply(--service2-btn); }`
* the new theme service supplies a component that defines relevant mixins
* theme component can then by imported as a [shared style](https://www.polymer-project.org/1.0/docs/devguide/styling#style-modules) to both the app and other components
  * currently just imported into app
* this approach gives us modular, composable CSS that can be broken down to an app, page, component or element basis
* the only tricky part is knowing the css mixin namespaces of each service, we can handle this by exposing a service action that returns relevant mixin names for a service component, and setting up namespace mixin aggregation service, which allows us to do things like, quickly create a style theme template, check available mixin namespaces against current defined mixing, etc.


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

