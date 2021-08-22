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
	BetToken    = "bet"
	BtyToken    = "bty"

	// this line is used by starport scaffolding # ibc/keys/name
)

var (
	CompanyAccount = "cosmos19j73cu94j483saet9l4ugausr4vq9ax03dg4lf"
	CompanyMemo    = "cash absent explain electric mask mule illness hamster rough leaf umbrella transfer page quarter alert setup thing estate you crawl start elbow boil rely"
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
