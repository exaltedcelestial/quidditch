/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */

import Game from '/imports/both/models/Game'
import { Component, State, Inject } from 'angular2-now'
import { Meteor } from 'meteor/meteor'
import '../views/game-view.html'

@State({
  name: 'app.games.view',
  url: '/games/view/:gameId',
})
@Component({
  selector: 'game-view',
  templateUrl: 'imports/client/views/game-view.html',
})
@Inject('$scope', '$reactive', '$state', '$stateParams')
class GameViewComponent {

  constructor($scope, $reactive, $state, $stateParams) {
    $reactive(this).attach($scope)
    const { gameId } = $stateParams
    this.helpers({
      game() {
        return Game.findOne(gameId)
      },
    })
  }

  get hasCommentator() {
    return !!Meteor.user()
  }

}

export default GameViewComponent