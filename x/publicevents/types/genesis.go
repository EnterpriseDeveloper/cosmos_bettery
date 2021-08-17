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
		FihishPubEventList:  []*FihishPubEvent{},
		ValidPubEventsList:  []*ValidPubEvents{},
		PartPubEventsList:   []*PartPubEvents{},
		CreatePubEventsList: []*CreatePubEvents{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// this line is used by starport scaffolding # ibc/genesistype/validate

	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated ID in fihishPubEvent
	fihishPubEventIdMap := make(map[uint64]bool)

	for _, elem := range gs.FihishPubEventList {
		if _, ok := fihishPubEventIdMap[elem.PubId]; ok {
			return fmt.Errorf("duplicated id for fihishPubEvent")
		}
		fihishPubEventIdMap[elem.PubId] = true
	}
	// Check for duplicated ID in validPubEvents
	validPubEventsIdMap := make(map[uint64]bool)

	for _, elem := range gs.ValidPubEventsList {
		if _, ok := validPubEventsIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for validPubEvents")
		}
		validPubEventsIdMap[elem.Id] = true
	}
	// Check for duplicated ID in partPubEvents
	partPubEventsIdMap := make(map[uint64]bool)

	for _, elem := range gs.PartPubEventsList {
		if _, ok := partPubEventsIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for partPubEvents")
		}
		partPubEventsIdMap[elem.Id] = true
	}
	// Check for duplicated ID in createPubEvents
	createPubEventsIdMap := make(map[uint64]bool)

	for _, elem := range gs.CreatePubEventsList {
		if _, ok := createPubEventsIdMap[elem.PubId]; ok {
			return fmt.Errorf("duplicated id for createPubEvents")
		}
		createPubEventsIdMap[elem.PubId] = true
	}

	return nil
}
