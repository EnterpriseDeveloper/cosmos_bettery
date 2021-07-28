package types

import (
	"fmt"
	// this line is used by starport scaffolding # ibc/genesistype/import
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		// this line is used by starport scaffolding # ibc/genesistype/default
		// this line is used by starport scaffolding # genesis/types/default
		SwipeBetList: []*SwipeBet{},
		MintBetList:  []*MintBet{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// this line is used by starport scaffolding # ibc/genesistype/validate

	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated ID in swipeBet
	swipeBetIdMap := make(map[uint64]bool)

	for _, elem := range gs.SwipeBetList {
		if _, ok := swipeBetIdMap[uint64(elem.UserId)]; ok {
			return fmt.Errorf("duplicated id for swipeBet")
		}
		swipeBetIdMap[uint64(elem.UserId)] = true
	}
	// Check for duplicated ID in mintBet
	mintBetIdMap := make(map[uint64]bool)

	for _, elem := range gs.MintBetList {
		if _, ok := mintBetIdMap[uint64(elem.UserId)]; ok {
			return fmt.Errorf("duplicated id for mintBet")
		}
		mintBetIdMap[uint64(elem.UserId)] = true
	}

	return nil
}
