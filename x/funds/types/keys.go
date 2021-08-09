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
	MemStoreKey    = "mem_funds"
	BetToken       = "bet"
	BtyToken       = "bty"
	CompanyMemonic = "tell arrest diagram hockey earth either work helmet motor avocado ketchup into page tuition oyster forget snap congress space turn festival desk tooth caution"
	CompanyAccount = "cosmos142hss5xryhpm9me420ygg7855n4rtn5yyqh5rt"

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
