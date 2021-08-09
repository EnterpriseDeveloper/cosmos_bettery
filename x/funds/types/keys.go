package types

const (
	// ModuleName defines the module name
	ModuleName = "funds"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_funds"

	BetToken = "bet"

	BtyToken = "bty"

	Memonic = "skill occur truly admit december romance orphan orphan second ritual welcome bomb annual loop garden spawn lucky cart cross minimum gap shift answer original"

	// this line is used by starport scaffolding # ibc/keys/name
)

// this line is used by starport scaffolding # ibc/keys/port

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	MintBetKey      = "MintBet-value-"
	MintBetCountKey = "MintBet-count-"
)

const (
	SwipeBetKey      = "SwipeBet-value-"
	SwipeBetCountKey = "SwipeBet-count-"
)
