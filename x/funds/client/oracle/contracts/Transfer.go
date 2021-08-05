// Code generated - DO NOT EDIT.
// This file is a generated binding and any manual changes will be lost.

package transfer

import (
	"math/big"
	"strings"

	ethereum "github.com/ethereum/go-ethereum"
	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/event"
)

// Reference imports to suppress errors if they are not otherwise used.
var (
	_ = big.NewInt
	_ = strings.NewReader
	_ = ethereum.NotFound
	_ = abi.U256
	_ = bind.Bind
	_ = common.Big1
	_ = types.BloomLookup
	_ = event.NewSubscription
)

// TransferABI is the input ABI used to generate the binding from.
const TransferABI = "[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"cosmosWallet\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"token\",\"type\":\"string\"}],\"name\":\"transferERC20Event\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"cosmosWallet\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"transferETHEvent\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"__TransferInit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"a\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"b\",\"type\":\"string\"}],\"name\":\"compareStrings\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"}],\"name\":\"getTokenAddr\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_cosmosWallet\",\"type\":\"string\"}],\"name\":\"transferERC20\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_cosmosWallet\",\"type\":\"string\"}],\"name\":\"transferETH\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"}]"

// TransferBin is the compiled bytecode used for deploying new contracts.
var TransferBin = "0x608060405234801561001057600080fd5b50610f64806100206000396000f3fe6080604052600436106100555760003560e01c80636ff4206f1461005a5780638da5cb5b146100985780639b8badbf146100c3578063a539e0bc146100da578063bed34bba146100f6578063c8cef4bc14610133575b600080fd5b34801561006657600080fd5b50610081600480360381019061007c91906107f3565b61014f565b60405161008f929190610b20565b60405180910390f35b3480156100a457600080fd5b506100ad610228565b6040516100ba9190610aa5565b60405180910390f35b3480156100cf57600080fd5b506100d861024e565b005b6100f460048036038101906100ef91906107f3565b610368565b005b34801561010257600080fd5b5061011d60048036038101906101189190610834565b610452565b60405161012a9190610b49565b60405180910390f35b61014d600480360381019061014891906108c9565b6104ab565b005b600080610191836040518060400160405280600481526020017f5553445400000000000000000000000000000000000000000000000000000000815250610452565b156101b65773fcf9f99d135d8a78ab60cc59cccf3108e813ba35600091509150610223565b6101f5836040518060400160405280600381526020017f4254590000000000000000000000000000000000000000000000000000000000815250610452565b1561021a57735e7186ac0c12da2c4caf58147e2f68798f3099c0600091509150610223565b60006001915091505b915091565b600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060019054906101000a900460ff1680610274575060008054906101000a900460ff16155b6102b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102aa90610c55565b60405180910390fd5b60008060019054906101000a900460ff161590508015610303576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b33600060026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080156103655760008060016101000a81548160ff0219169083151502179055505b50565b600034116103ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a290610c75565b60405180910390fd5b600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610413573d6000803e3d6000fd5b507f9f1a7d40e1a9a56b3e4186cea9a3bce0373ef4ee4d6a00d2268809453e0e78b281343360405161044793929190610b64565b60405180910390a150565b6000816040516020016104659190610a8e565b604051602081830303815290604052805190602001208360405160200161048c9190610a8e565b6040516020818303038152906040528051906020012014905092915050565b6000806104b78461014f565b91509150806104fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f290610bf5565b60405180910390fd5b6000829050858173ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518363ffffffff1660e01b815260040161055e929190610ac0565b60206040518083038186803b15801561057657600080fd5b505afa15801561058a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ae91906108a0565b146105ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e590610c15565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166323b872dd33600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff16896040518463ffffffff1660e01b815260040161064d93929190610ae9565b602060405180830381600087803b15801561066757600080fd5b505af115801561067b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069f91906107ca565b6106de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d590610c35565b60405180910390fd5b7f5a2cea108e12802329bee171c7dbb8daea79dd8d7e0954d684cf575026ea544b843433886040516107139493929190610ba2565b60405180910390a1505050505050565b600061073661073184610cba565b610c95565b90508281526020810184848401111561074e57600080fd5b610759848285610d5a565b509392505050565b60008151905061077081610f00565b92915050565b600082601f83011261078757600080fd5b8135610797848260208601610723565b91505092915050565b6000813590506107af81610f17565b92915050565b6000815190506107c481610f17565b92915050565b6000602082840312156107dc57600080fd5b60006107ea84828501610761565b91505092915050565b60006020828403121561080557600080fd5b600082013567ffffffffffffffff81111561081f57600080fd5b61082b84828501610776565b91505092915050565b6000806040838503121561084757600080fd5b600083013567ffffffffffffffff81111561086157600080fd5b61086d85828601610776565b925050602083013567ffffffffffffffff81111561088a57600080fd5b61089685828601610776565b9150509250929050565b6000602082840312156108b257600080fd5b60006108c0848285016107b5565b91505092915050565b6000806000606084860312156108de57600080fd5b60006108ec868287016107a0565b935050602084013567ffffffffffffffff81111561090957600080fd5b61091586828701610776565b925050604084013567ffffffffffffffff81111561093257600080fd5b61093e86828701610776565b9150509250925092565b61095181610d12565b82525050565b61096081610d24565b82525050565b600061097182610ceb565b61097b8185610cf6565b935061098b818560208601610d69565b61099481610dfc565b840191505092915050565b60006109aa82610ceb565b6109b48185610d07565b93506109c4818560208601610d69565b80840191505092915050565b60006109dd601383610cf6565b91506109e882610e0d565b602082019050919050565b6000610a00600f83610cf6565b9150610a0b82610e36565b602082019050919050565b6000610a23601483610cf6565b9150610a2e82610e5f565b602082019050919050565b6000610a46602e83610cf6565b9150610a5182610e88565b604082019050919050565b6000610a69601883610cf6565b9150610a7482610ed7565b602082019050919050565b610a8881610d50565b82525050565b6000610a9a828461099f565b915081905092915050565b6000602082019050610aba6000830184610948565b92915050565b6000604082019050610ad56000830185610948565b610ae26020830184610948565b9392505050565b6000606082019050610afe6000830186610948565b610b0b6020830185610948565b610b186040830184610a7f565b949350505050565b6000604082019050610b356000830185610948565b610b426020830184610957565b9392505050565b6000602082019050610b5e6000830184610957565b92915050565b60006060820190508181036000830152610b7e8186610966565b9050610b8d6020830185610a7f565b610b9a6040830184610948565b949350505050565b60006080820190508181036000830152610bbc8187610966565b9050610bcb6020830186610a7f565b610bd86040830185610948565b8181036060830152610bea8184610966565b905095945050505050565b60006020820190508181036000830152610c0e816109d0565b9050919050565b60006020820190508181036000830152610c2e816109f3565b9050919050565b60006020820190508181036000830152610c4e81610a16565b9050919050565b60006020820190508181036000830152610c6e81610a39565b9050919050565b60006020820190508181036000830152610c8e81610a5c565b9050919050565b6000610c9f610cb0565b9050610cab8282610d9c565b919050565b6000604051905090565b600067ffffffffffffffff821115610cd557610cd4610dcd565b5b610cde82610dfc565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b6000610d1d82610d30565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610d87578082015181840152602081019050610d6c565b83811115610d96576000848401525b50505050565b610da582610dfc565b810181811067ffffffffffffffff82111715610dc457610dc3610dcd565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f73796d626f6c206973206e6f742076616c696400000000000000000000000000600082015250565b7f416c6c6f77616e6365206572726f720000000000000000000000000000000000600082015250565b7f5472616e7366657220746f6b656e206572726f72000000000000000000000000600082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f416d6f756e74206d757374206265206d6f726520617420300000000000000000600082015250565b610f0981610d24565b8114610f1457600080fd5b50565b610f2081610d50565b8114610f2b57600080fd5b5056fea2646970667358221220390941e26d038b08bb8077c6757b5738fb36d027482a7ee8f97f9fb93a29c91a64736f6c63430008030033"

// DeployTransfer deploys a new Ethereum contract, binding an instance of Transfer to it.
func DeployTransfer(auth *bind.TransactOpts, backend bind.ContractBackend) (common.Address, *types.Transaction, *Transfer, error) {
	parsed, err := abi.JSON(strings.NewReader(TransferABI))
	if err != nil {
		return common.Address{}, nil, nil, err
	}

	address, tx, contract, err := bind.DeployContract(auth, parsed, common.FromHex(TransferBin), backend)
	if err != nil {
		return common.Address{}, nil, nil, err
	}
	return address, tx, &Transfer{TransferCaller: TransferCaller{contract: contract}, TransferTransactor: TransferTransactor{contract: contract}, TransferFilterer: TransferFilterer{contract: contract}}, nil
}

// Transfer is an auto generated Go binding around an Ethereum contract.
type Transfer struct {
	TransferCaller     // Read-only binding to the contract
	TransferTransactor // Write-only binding to the contract
	TransferFilterer   // Log filterer for contract events
}

// TransferCaller is an auto generated read-only Go binding around an Ethereum contract.
type TransferCaller struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// TransferTransactor is an auto generated write-only Go binding around an Ethereum contract.
type TransferTransactor struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// TransferFilterer is an auto generated log filtering Go binding around an Ethereum contract events.
type TransferFilterer struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// TransferSession is an auto generated Go binding around an Ethereum contract,
// with pre-set call and transact options.
type TransferSession struct {
	Contract     *Transfer         // Generic contract binding to set the session for
	CallOpts     bind.CallOpts     // Call options to use throughout this session
	TransactOpts bind.TransactOpts // Transaction auth options to use throughout this session
}

// TransferCallerSession is an auto generated read-only Go binding around an Ethereum contract,
// with pre-set call options.
type TransferCallerSession struct {
	Contract *TransferCaller // Generic contract caller binding to set the session for
	CallOpts bind.CallOpts   // Call options to use throughout this session
}

// TransferTransactorSession is an auto generated write-only Go binding around an Ethereum contract,
// with pre-set transact options.
type TransferTransactorSession struct {
	Contract     *TransferTransactor // Generic contract transactor binding to set the session for
	TransactOpts bind.TransactOpts   // Transaction auth options to use throughout this session
}

// TransferRaw is an auto generated low-level Go binding around an Ethereum contract.
type TransferRaw struct {
	Contract *Transfer // Generic contract binding to access the raw methods on
}

// TransferCallerRaw is an auto generated low-level read-only Go binding around an Ethereum contract.
type TransferCallerRaw struct {
	Contract *TransferCaller // Generic read-only contract binding to access the raw methods on
}

// TransferTransactorRaw is an auto generated low-level write-only Go binding around an Ethereum contract.
type TransferTransactorRaw struct {
	Contract *TransferTransactor // Generic write-only contract binding to access the raw methods on
}

// NewTransfer creates a new instance of Transfer, bound to a specific deployed contract.
func NewTransfer(address common.Address, backend bind.ContractBackend) (*Transfer, error) {
	contract, err := bindTransfer(address, backend, backend, backend)
	if err != nil {
		return nil, err
	}
	return &Transfer{TransferCaller: TransferCaller{contract: contract}, TransferTransactor: TransferTransactor{contract: contract}, TransferFilterer: TransferFilterer{contract: contract}}, nil
}

// NewTransferCaller creates a new read-only instance of Transfer, bound to a specific deployed contract.
func NewTransferCaller(address common.Address, caller bind.ContractCaller) (*TransferCaller, error) {
	contract, err := bindTransfer(address, caller, nil, nil)
	if err != nil {
		return nil, err
	}
	return &TransferCaller{contract: contract}, nil
}

// NewTransferTransactor creates a new write-only instance of Transfer, bound to a specific deployed contract.
func NewTransferTransactor(address common.Address, transactor bind.ContractTransactor) (*TransferTransactor, error) {
	contract, err := bindTransfer(address, nil, transactor, nil)
	if err != nil {
		return nil, err
	}
	return &TransferTransactor{contract: contract}, nil
}

// NewTransferFilterer creates a new log filterer instance of Transfer, bound to a specific deployed contract.
func NewTransferFilterer(address common.Address, filterer bind.ContractFilterer) (*TransferFilterer, error) {
	contract, err := bindTransfer(address, nil, nil, filterer)
	if err != nil {
		return nil, err
	}
	return &TransferFilterer{contract: contract}, nil
}

// bindTransfer binds a generic wrapper to an already deployed contract.
func bindTransfer(address common.Address, caller bind.ContractCaller, transactor bind.ContractTransactor, filterer bind.ContractFilterer) (*bind.BoundContract, error) {
	parsed, err := abi.JSON(strings.NewReader(TransferABI))
	if err != nil {
		return nil, err
	}
	return bind.NewBoundContract(address, parsed, caller, transactor, filterer), nil
}

// Call invokes the (constant) contract method with params as input values and
// sets the output to result. The result type might be a single field for simple
// returns, a slice of interfaces for anonymous returns and a struct for named
// returns.
func (_Transfer *TransferRaw) Call(opts *bind.CallOpts, result interface{}, method string, params ...interface{}) error {
	return _Transfer.Contract.TransferCaller.contract.Call(opts, result, method, params...)
}

// Transfer initiates a plain transaction to move funds to the contract, calling
// its default method if one is available.
func (_Transfer *TransferRaw) Transfer(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _Transfer.Contract.TransferTransactor.contract.Transfer(opts)
}

// Transact invokes the (paid) contract method with params as input values.
func (_Transfer *TransferRaw) Transact(opts *bind.TransactOpts, method string, params ...interface{}) (*types.Transaction, error) {
	return _Transfer.Contract.TransferTransactor.contract.Transact(opts, method, params...)
}

// Call invokes the (constant) contract method with params as input values and
// sets the output to result. The result type might be a single field for simple
// returns, a slice of interfaces for anonymous returns and a struct for named
// returns.
func (_Transfer *TransferCallerRaw) Call(opts *bind.CallOpts, result interface{}, method string, params ...interface{}) error {
	return _Transfer.Contract.contract.Call(opts, result, method, params...)
}

// Transfer initiates a plain transaction to move funds to the contract, calling
// its default method if one is available.
func (_Transfer *TransferTransactorRaw) Transfer(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _Transfer.Contract.contract.Transfer(opts)
}

// Transact invokes the (paid) contract method with params as input values.
func (_Transfer *TransferTransactorRaw) Transact(opts *bind.TransactOpts, method string, params ...interface{}) (*types.Transaction, error) {
	return _Transfer.Contract.contract.Transact(opts, method, params...)
}

// CompareStrings is a free data retrieval call binding the contract method 0xbed34bba.
//
// Solidity: function compareStrings(string a, string b) constant returns(bool)
func (_Transfer *TransferCaller) CompareStrings(opts *bind.CallOpts, a string, b string) (bool, error) {
	var (
		ret0 = new(bool)
	)
	out := ret0
	err := _Transfer.contract.Call(opts, out, "compareStrings", a, b)
	return *ret0, err
}

// CompareStrings is a free data retrieval call binding the contract method 0xbed34bba.
//
// Solidity: function compareStrings(string a, string b) constant returns(bool)
func (_Transfer *TransferSession) CompareStrings(a string, b string) (bool, error) {
	return _Transfer.Contract.CompareStrings(&_Transfer.CallOpts, a, b)
}

// CompareStrings is a free data retrieval call binding the contract method 0xbed34bba.
//
// Solidity: function compareStrings(string a, string b) constant returns(bool)
func (_Transfer *TransferCallerSession) CompareStrings(a string, b string) (bool, error) {
	return _Transfer.Contract.CompareStrings(&_Transfer.CallOpts, a, b)
}

// GetTokenAddr is a free data retrieval call binding the contract method 0x6ff4206f.
//
// Solidity: function getTokenAddr(string symbol) constant returns(address, bool)
func (_Transfer *TransferCaller) GetTokenAddr(opts *bind.CallOpts, symbol string) (common.Address, bool, error) {
	var (
		ret0 = new(common.Address)
		ret1 = new(bool)
	)
	out := &[]interface{}{
		ret0,
		ret1,
	}
	err := _Transfer.contract.Call(opts, out, "getTokenAddr", symbol)
	return *ret0, *ret1, err
}

// GetTokenAddr is a free data retrieval call binding the contract method 0x6ff4206f.
//
// Solidity: function getTokenAddr(string symbol) constant returns(address, bool)
func (_Transfer *TransferSession) GetTokenAddr(symbol string) (common.Address, bool, error) {
	return _Transfer.Contract.GetTokenAddr(&_Transfer.CallOpts, symbol)
}

// GetTokenAddr is a free data retrieval call binding the contract method 0x6ff4206f.
//
// Solidity: function getTokenAddr(string symbol) constant returns(address, bool)
func (_Transfer *TransferCallerSession) GetTokenAddr(symbol string) (common.Address, bool, error) {
	return _Transfer.Contract.GetTokenAddr(&_Transfer.CallOpts, symbol)
}

// Owner is a free data retrieval call binding the contract method 0x8da5cb5b.
//
// Solidity: function owner() constant returns(address)
func (_Transfer *TransferCaller) Owner(opts *bind.CallOpts) (common.Address, error) {
	var (
		ret0 = new(common.Address)
	)
	out := ret0
	err := _Transfer.contract.Call(opts, out, "owner")
	return *ret0, err
}

// Owner is a free data retrieval call binding the contract method 0x8da5cb5b.
//
// Solidity: function owner() constant returns(address)
func (_Transfer *TransferSession) Owner() (common.Address, error) {
	return _Transfer.Contract.Owner(&_Transfer.CallOpts)
}

// Owner is a free data retrieval call binding the contract method 0x8da5cb5b.
//
// Solidity: function owner() constant returns(address)
func (_Transfer *TransferCallerSession) Owner() (common.Address, error) {
	return _Transfer.Contract.Owner(&_Transfer.CallOpts)
}

// TransferInit is a paid mutator transaction binding the contract method 0x9b8badbf.
//
// Solidity: function __TransferInit() returns()
func (_Transfer *TransferTransactor) TransferInit(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _Transfer.contract.Transact(opts, "__TransferInit")
}

// TransferInit is a paid mutator transaction binding the contract method 0x9b8badbf.
//
// Solidity: function __TransferInit() returns()
func (_Transfer *TransferSession) TransferInit() (*types.Transaction, error) {
	return _Transfer.Contract.TransferInit(&_Transfer.TransactOpts)
}

// TransferInit is a paid mutator transaction binding the contract method 0x9b8badbf.
//
// Solidity: function __TransferInit() returns()
func (_Transfer *TransferTransactorSession) TransferInit() (*types.Transaction, error) {
	return _Transfer.Contract.TransferInit(&_Transfer.TransactOpts)
}

// TransferERC20 is a paid mutator transaction binding the contract method 0xc8cef4bc.
//
// Solidity: function transferERC20(uint256 _amount, string _symbol, string _cosmosWallet) returns()
func (_Transfer *TransferTransactor) TransferERC20(opts *bind.TransactOpts, _amount *big.Int, _symbol string, _cosmosWallet string) (*types.Transaction, error) {
	return _Transfer.contract.Transact(opts, "transferERC20", _amount, _symbol, _cosmosWallet)
}

// TransferERC20 is a paid mutator transaction binding the contract method 0xc8cef4bc.
//
// Solidity: function transferERC20(uint256 _amount, string _symbol, string _cosmosWallet) returns()
func (_Transfer *TransferSession) TransferERC20(_amount *big.Int, _symbol string, _cosmosWallet string) (*types.Transaction, error) {
	return _Transfer.Contract.TransferERC20(&_Transfer.TransactOpts, _amount, _symbol, _cosmosWallet)
}

// TransferERC20 is a paid mutator transaction binding the contract method 0xc8cef4bc.
//
// Solidity: function transferERC20(uint256 _amount, string _symbol, string _cosmosWallet) returns()
func (_Transfer *TransferTransactorSession) TransferERC20(_amount *big.Int, _symbol string, _cosmosWallet string) (*types.Transaction, error) {
	return _Transfer.Contract.TransferERC20(&_Transfer.TransactOpts, _amount, _symbol, _cosmosWallet)
}

// TransferETH is a paid mutator transaction binding the contract method 0xa539e0bc.
//
// Solidity: function transferETH(string _cosmosWallet) returns()
func (_Transfer *TransferTransactor) TransferETH(opts *bind.TransactOpts, _cosmosWallet string) (*types.Transaction, error) {
	return _Transfer.contract.Transact(opts, "transferETH", _cosmosWallet)
}

// TransferETH is a paid mutator transaction binding the contract method 0xa539e0bc.
//
// Solidity: function transferETH(string _cosmosWallet) returns()
func (_Transfer *TransferSession) TransferETH(_cosmosWallet string) (*types.Transaction, error) {
	return _Transfer.Contract.TransferETH(&_Transfer.TransactOpts, _cosmosWallet)
}

// TransferETH is a paid mutator transaction binding the contract method 0xa539e0bc.
//
// Solidity: function transferETH(string _cosmosWallet) returns()
func (_Transfer *TransferTransactorSession) TransferETH(_cosmosWallet string) (*types.Transaction, error) {
	return _Transfer.Contract.TransferETH(&_Transfer.TransactOpts, _cosmosWallet)
}

// TransferTransferERC20EventIterator is returned from FilterTransferERC20Event and is used to iterate over the raw logs and unpacked data for TransferERC20Event events raised by the Transfer contract.
type TransferTransferERC20EventIterator struct {
	Event *TransferTransferERC20Event // Event containing the contract specifics and raw log

	contract *bind.BoundContract // Generic contract to use for unpacking event data
	event    string              // Event name to use for unpacking event data

	logs chan types.Log        // Log channel receiving the found contract events
	sub  ethereum.Subscription // Subscription for errors, completion and termination
	done bool                  // Whether the subscription completed delivering logs
	fail error                 // Occurred error to stop iteration
}

// Next advances the iterator to the subsequent event, returning whether there
// are any more events found. In case of a retrieval or parsing error, false is
// returned and Error() can be queried for the exact failure.
func (it *TransferTransferERC20EventIterator) Next() bool {
	// If the iterator failed, stop iterating
	if it.fail != nil {
		return false
	}
	// If the iterator completed, deliver directly whatever's available
	if it.done {
		select {
		case log := <-it.logs:
			it.Event = new(TransferTransferERC20Event)
			if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
				it.fail = err
				return false
			}
			it.Event.Raw = log
			return true

		default:
			return false
		}
	}
	// Iterator still in progress, wait for either a data or an error event
	select {
	case log := <-it.logs:
		it.Event = new(TransferTransferERC20Event)
		if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
			it.fail = err
			return false
		}
		it.Event.Raw = log
		return true

	case err := <-it.sub.Err():
		it.done = true
		it.fail = err
		return it.Next()
	}
}

// Error returns any retrieval or parsing error occurred during filtering.
func (it *TransferTransferERC20EventIterator) Error() error {
	return it.fail
}

// Close terminates the iteration process, releasing any pending underlying
// resources.
func (it *TransferTransferERC20EventIterator) Close() error {
	it.sub.Unsubscribe()
	return nil
}

// TransferTransferERC20Event represents a TransferERC20Event event raised by the Transfer contract.
type TransferTransferERC20Event struct {
	CosmosWallet string
	Amount       *big.Int
	Sender       common.Address
	Token        string
	Raw          types.Log // Blockchain specific contextual infos
}

// FilterTransferERC20Event is a free log retrieval operation binding the contract event 0x5a2cea108e12802329bee171c7dbb8daea79dd8d7e0954d684cf575026ea544b.
//
// Solidity: event transferERC20Event(string cosmosWallet, uint256 amount, address sender, string token)
func (_Transfer *TransferFilterer) FilterTransferERC20Event(opts *bind.FilterOpts) (*TransferTransferERC20EventIterator, error) {

	logs, sub, err := _Transfer.contract.FilterLogs(opts, "transferERC20Event")
	if err != nil {
		return nil, err
	}
	return &TransferTransferERC20EventIterator{contract: _Transfer.contract, event: "transferERC20Event", logs: logs, sub: sub}, nil
}

// WatchTransferERC20Event is a free log subscription operation binding the contract event 0x5a2cea108e12802329bee171c7dbb8daea79dd8d7e0954d684cf575026ea544b.
//
// Solidity: event transferERC20Event(string cosmosWallet, uint256 amount, address sender, string token)
func (_Transfer *TransferFilterer) WatchTransferERC20Event(opts *bind.WatchOpts, sink chan<- *TransferTransferERC20Event) (event.Subscription, error) {

	logs, sub, err := _Transfer.contract.WatchLogs(opts, "transferERC20Event")
	if err != nil {
		return nil, err
	}
	return event.NewSubscription(func(quit <-chan struct{}) error {
		defer sub.Unsubscribe()
		for {
			select {
			case log := <-logs:
				// New log arrived, parse the event and forward to the user
				event := new(TransferTransferERC20Event)
				if err := _Transfer.contract.UnpackLog(event, "transferERC20Event", log); err != nil {
					return err
				}
				event.Raw = log

				select {
				case sink <- event:
				case err := <-sub.Err():
					return err
				case <-quit:
					return nil
				}
			case err := <-sub.Err():
				return err
			case <-quit:
				return nil
			}
		}
	}), nil
}

// ParseTransferERC20Event is a log parse operation binding the contract event 0x5a2cea108e12802329bee171c7dbb8daea79dd8d7e0954d684cf575026ea544b.
//
// Solidity: event transferERC20Event(string cosmosWallet, uint256 amount, address sender, string token)
func (_Transfer *TransferFilterer) ParseTransferERC20Event(log types.Log) (*TransferTransferERC20Event, error) {
	event := new(TransferTransferERC20Event)
	if err := _Transfer.contract.UnpackLog(event, "transferERC20Event", log); err != nil {
		return nil, err
	}
	return event, nil
}

// TransferTransferETHEventIterator is returned from FilterTransferETHEvent and is used to iterate over the raw logs and unpacked data for TransferETHEvent events raised by the Transfer contract.
type TransferTransferETHEventIterator struct {
	Event *TransferTransferETHEvent // Event containing the contract specifics and raw log

	contract *bind.BoundContract // Generic contract to use for unpacking event data
	event    string              // Event name to use for unpacking event data

	logs chan types.Log        // Log channel receiving the found contract events
	sub  ethereum.Subscription // Subscription for errors, completion and termination
	done bool                  // Whether the subscription completed delivering logs
	fail error                 // Occurred error to stop iteration
}

// Next advances the iterator to the subsequent event, returning whether there
// are any more events found. In case of a retrieval or parsing error, false is
// returned and Error() can be queried for the exact failure.
func (it *TransferTransferETHEventIterator) Next() bool {
	// If the iterator failed, stop iterating
	if it.fail != nil {
		return false
	}
	// If the iterator completed, deliver directly whatever's available
	if it.done {
		select {
		case log := <-it.logs:
			it.Event = new(TransferTransferETHEvent)
			if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
				it.fail = err
				return false
			}
			it.Event.Raw = log
			return true

		default:
			return false
		}
	}
	// Iterator still in progress, wait for either a data or an error event
	select {
	case log := <-it.logs:
		it.Event = new(TransferTransferETHEvent)
		if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
			it.fail = err
			return false
		}
		it.Event.Raw = log
		return true

	case err := <-it.sub.Err():
		it.done = true
		it.fail = err
		return it.Next()
	}
}

// Error returns any retrieval or parsing error occurred during filtering.
func (it *TransferTransferETHEventIterator) Error() error {
	return it.fail
}

// Close terminates the iteration process, releasing any pending underlying
// resources.
func (it *TransferTransferETHEventIterator) Close() error {
	it.sub.Unsubscribe()
	return nil
}

// TransferTransferETHEvent represents a TransferETHEvent event raised by the Transfer contract.
type TransferTransferETHEvent struct {
	CosmosWallet string
	Amount       *big.Int
	Sender       common.Address
	Raw          types.Log // Blockchain specific contextual infos
}

// FilterTransferETHEvent is a free log retrieval operation binding the contract event 0x9f1a7d40e1a9a56b3e4186cea9a3bce0373ef4ee4d6a00d2268809453e0e78b2.
//
// Solidity: event transferETHEvent(string cosmosWallet, uint256 amount, address sender)
func (_Transfer *TransferFilterer) FilterTransferETHEvent(opts *bind.FilterOpts) (*TransferTransferETHEventIterator, error) {

	logs, sub, err := _Transfer.contract.FilterLogs(opts, "transferETHEvent")
	if err != nil {
		return nil, err
	}
	return &TransferTransferETHEventIterator{contract: _Transfer.contract, event: "transferETHEvent", logs: logs, sub: sub}, nil
}

// WatchTransferETHEvent is a free log subscription operation binding the contract event 0x9f1a7d40e1a9a56b3e4186cea9a3bce0373ef4ee4d6a00d2268809453e0e78b2.
//
// Solidity: event transferETHEvent(string cosmosWallet, uint256 amount, address sender)
func (_Transfer *TransferFilterer) WatchTransferETHEvent(opts *bind.WatchOpts, sink chan<- *TransferTransferETHEvent) (event.Subscription, error) {

	logs, sub, err := _Transfer.contract.WatchLogs(opts, "transferETHEvent")
	if err != nil {
		return nil, err
	}
	return event.NewSubscription(func(quit <-chan struct{}) error {
		defer sub.Unsubscribe()
		for {
			select {
			case log := <-logs:
				// New log arrived, parse the event and forward to the user
				event := new(TransferTransferETHEvent)
				if err := _Transfer.contract.UnpackLog(event, "transferETHEvent", log); err != nil {
					return err
				}
				event.Raw = log

				select {
				case sink <- event:
				case err := <-sub.Err():
					return err
				case <-quit:
					return nil
				}
			case err := <-sub.Err():
				return err
			case <-quit:
				return nil
			}
		}
	}), nil
}

// ParseTransferETHEvent is a log parse operation binding the contract event 0x9f1a7d40e1a9a56b3e4186cea9a3bce0373ef4ee4d6a00d2268809453e0e78b2.
//
// Solidity: event transferETHEvent(string cosmosWallet, uint256 amount, address sender)
func (_Transfer *TransferFilterer) ParseTransferETHEvent(log types.Log) (*TransferTransferETHEvent, error) {
	event := new(TransferTransferETHEvent)
	if err := _Transfer.contract.UnpackLog(event, "transferETHEvent", log); err != nil {
		return nil, err
	}
	return event, nil
}
