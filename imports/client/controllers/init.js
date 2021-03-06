import angular from 'angular'
import angularMeteor from 'angular-meteor'
import { init, SetModule } from 'angular2-now'
import angularUiBootstrap from 'angular-ui-bootstrap'
import ngAnimate from 'angular-animate'
import ngTouch from 'angular-touch'
import ngSanitize from 'angular-sanitize'
import uiRouter from 'angular-ui-router'
import uiSelect from 'ui-select'

init()
const dependencies = [
  angularMeteor,
  angularUiBootstrap,
  ngAnimate,
  ngTouch,
  ngSanitize,
  uiRouter,
  uiSelect,
]

SetModule('app', dependencies)
