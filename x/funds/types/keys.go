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
	CompanyAccount = "cosmos1n4rk6xjanrkuxc9xz22pcevxd3rnc9v4gkwhxj"
	CompanyMemo    = "bleak donor lounge close mail street flush quote design agree offer antenna gloom turkey they habit often topic clap curious seed pupil matrix wish"
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
