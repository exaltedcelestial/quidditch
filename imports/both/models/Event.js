import Model from './Model'
import Goal from './Goal'
import Seeker from './Seeker'
import Snitch from './Snitch'

import SetupCollection from '../decorators/SetupCollection'

@SetupCollection('Events')
class Event extends Model {

  get goal() {
    return Goal.findOne(this.goalId)
  }

  get seeker() {
    return Seeker.findOne(this.seekerId)
  }

  get snitch() {
    return Snitch.findOne(this.snitchId)
  }

}

export default Event
