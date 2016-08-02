// build is for production pipeline
// assemble components from services, create one bundle
// idea: wrap the bundle in a local mu transport, i.e.
// register each of the components with the local transport
// add a ns: '*', cmd: 'component' route to point at local
// but in dev point it at remote (http or whatever)
//
//
// note:   transformFile(file, {minified: true...