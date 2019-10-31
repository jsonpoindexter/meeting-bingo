import { ActionContext, Store } from 'vuex'
import { State as RootState } from '../state'
import { BingoBox, GameSheetState } from './gameSheetState'
import { getStoreAccessors } from 'vuex-typescript'

// Needed for actions
type GameSheetContext = ActionContext<GameSheetState, RootState>

export const gameSheet = {
  namespaced: true,

  state: {
    bingoBoxes: [
      { label: "'Action Item'", selected: false },
      { label: "'Can you see my screen?'", selected: false },
      { label: "'Grooming Session'", selected: false },
      { label: "'Hypercare'", selected: false },
      { label: "'Callout'", selected: false },
      { label: "'Killing it'", selected: false },
      { label: "'---- can you go on mute'", selected: false },
      { label: "'Sorry, I was on mute'", selected: false },
      { label: "'--- here!' in the middle of a conversation", selected: false },
      { label: 'scrum is longer than 15min (free space)', selected: false },
      { label: "'Launch Readiness'", selected: false },
      { label: "'What is the LOE on that?'", selected: false },
      { label: "'oh yeah, I forgot about that!'", selected: false },
      { label: "'Let's take that offline'", selected: false },
      { label: "'Let's bring it up in war room'", selected: false },
      { label: 'loud typing w/ mic on', selected: false },
      { label: "'I'm thinking...'", selected: false },
      { label: "'Sorry, I missed that..'", selected: false },
      { label: 'screen sharing a DM', selected: false },
      { label: "screen sharer's Download bar in the browser is open", selected: false },
      { label: 'screen sharer has low laptop battery', selected: false },
      { label: "'Responsive'", selected: false },
      { label: 'eating over the microphone', selected: false },
    ],
  },

  getters: {
    getBingoBoxes(state: GameSheetState): BingoBox[] {
      return state.bingoBoxes
    },
  },

  mutations: {
    reset(state: GameSheetState) {
      state.bingoBoxes = []
    },
  },

  actions: {},
}

const { commit, read, dispatch } = getStoreAccessors<GameSheetState, RootState>('gameSheet')

const getters = gameSheet.getters
const actions = gameSheet.actions
const mutations = gameSheet.mutations

export const commitReset = commit(mutations.reset)
export const readBingoBoxes = read(getters.getBingoBoxes)
