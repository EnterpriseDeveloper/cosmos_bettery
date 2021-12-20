// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import VoroshilovMaxBetteryVoroshilovMaxBetteryFunds from './VoroshilovMax/bettery/VoroshilovMax.bettery.funds'
import VoroshilovMaxBetteryVoroshilovMaxBetteryPrivateevents from './VoroshilovMax/bettery/VoroshilovMax.bettery.privateevents'
import VoroshilovMaxBetteryVoroshilovMaxBetteryPublicevents from './VoroshilovMax/bettery/VoroshilovMax.bettery.publicevents'


export default { 
  VoroshilovMaxBetteryVoroshilovMaxBetteryFunds: load(VoroshilovMaxBetteryVoroshilovMaxBetteryFunds, 'VoroshilovMax.bettery.funds'),
  VoroshilovMaxBetteryVoroshilovMaxBetteryPrivateevents: load(VoroshilovMaxBetteryVoroshilovMaxBetteryPrivateevents, 'VoroshilovMax.bettery.privateevents'),
  VoroshilovMaxBetteryVoroshilovMaxBetteryPublicevents: load(VoroshilovMaxBetteryVoroshilovMaxBetteryPublicevents, 'VoroshilovMax.bettery.publicevents'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}
