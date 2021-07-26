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
		ValidPrivEventsList:  []*ValidPrivEvents{},
		PartPrivEventsList:   []*PartPrivEvents{},
		CreatePrivEventsList: []*CreatePrivEvents{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// this line is used by starport scaffolding # ibc/genesistype/validate

	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated ID in validPrivEvents
	validPrivEventsIdMap := make(map[uint64]bool)

	for _, elem := range gs.ValidPrivEventsList {
		if _, ok := validPrivEventsIdMap[elem.PrivId]; ok {
			return fmt.Errorf("duplicated id for validPrivEvents")
		}
		validPrivEventsIdMap[elem.PrivId] = true
	}
	// Check for duplicated ID in partPrivEvents
	partPrivEventsIdMap := make(map[uint64]bool)

	for _, elem := range gs.PartPrivEventsList {
		if _, ok := partPrivEventsIdMap[elem.PrivId]; ok {
			return fmt.Errorf("duplicated id for partPrivEvents")
		}
		partPrivEventsIdMap[elem.PrivId] = true
	}
	// Check for duplicated ID in createPrivEvents
	createPrivEventsIdMap := make(map[uint64]bool)

	for _, elem := range gs.CreatePrivEventsList {
		if _, ok := createPrivEventsIdMap[elem.PrivId]; ok {
			return fmt.Errorf("duplicated id for createPrivEvents")
		}
		createPrivEventsIdMap[elem.PrivId] = true
	}

	return nil
}
