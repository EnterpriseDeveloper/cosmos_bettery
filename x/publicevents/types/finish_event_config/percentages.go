package types

// Players
const (
	PlayersPersMint    = 50 // mint token percent for players
	PlayersPers        = 90 // pay token percent for players
	PlayersPersPremiun = 75 // pay token percent for players in Premium events
	FirstRefer         = 4  // first level of referrers;
	SecontRefer        = 4  // second level of referrers;
	ThirdRefer         = 2  // third level of referrers;
)

// Comapny
const (
	DevelopFundPerc       = 10 // mint token percent for Development Fund
	DevelopFundPercPremim = 10 // pay token percent for Developement Fund in Premium events
	ComMarketFundPerc     = 5  // 5 if advisor exist or comMarketFundPerc + advisorPercMint + extraHostPercMint = 8 if advisor not exist
	ModeratorsFundPerc    = 2  // Moderators Fund percent to pay token
)

// HOST
const (
	HostPercMint      = 10 // mint token percent for host
	HostPerc          = 4  // pay token percent for host
	ExtraHostPerc     = 1  // if advisor exist we add extra coins to host
	ExtraHostPercMint = 1  // if advisor exist we add extra coins to host in mint token
)

// EXPERT
const (
	ExpertPercMint    = 10 // mint token percent for expert
	ExpertPerc        = 4  // pay token percent for expert
	ExpertExtraPerc   = 2  // extra pay token parcent for expert if advisor not exist
	ExpertPremiumPerc = 15 // bty percent in premium events for experts
)

// ADVISORS
const (
	AdvisorPercMint = 2 // mint token parcent for advisor
	AdvisorPepc     = 1 // pay token parcent for advisor
)
