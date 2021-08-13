package types

const (
	// ModuleName defines the module name
	ModuleName = "publicevents"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_publicevents"
	BetToken    = "bet"
	BtyToken    = "bty"

	// this line is used by starport scaffolding # ibc/keys/name
)

// this line is used by starport scaffolding # ibc/keys/port

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	CreatePubEventsKey      = "CreatePubEvents-value-"
	CreatePubEventsCountKey = "CreatePubEvents-count-"
)

const (
	PartPubEventsKey      = "PartPubEvents-value-"
	PartPubEventsCountKey = "PartPubEvents-count-"
)

const (
	ValidPubEventsKey      = "ValidPubEvents-value-"
	ValidPubEventsCountKey = "ValidPubEvents-count-"
)
