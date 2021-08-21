// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: funds/tx.proto

package types

import (
	context "context"
	fmt "fmt"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// this line is used by starport scaffolding # proto/tx/message
type MsgCreateSwipeBet struct {
	Creator string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Amount  string `protobuf:"bytes,2,opt,name=amount,proto3" json:"amount,omitempty"`
	UserId  int64  `protobuf:"varint,3,opt,name=userId,proto3" json:"userId,omitempty"`
}

func (m *MsgCreateSwipeBet) Reset()         { *m = MsgCreateSwipeBet{} }
func (m *MsgCreateSwipeBet) String() string { return proto.CompactTextString(m) }
func (*MsgCreateSwipeBet) ProtoMessage()    {}
func (*MsgCreateSwipeBet) Descriptor() ([]byte, []int) {
	return fileDescriptor_fb52ceeb6acd4c41, []int{0}
}
func (m *MsgCreateSwipeBet) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgCreateSwipeBet) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgCreateSwipeBet.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgCreateSwipeBet) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgCreateSwipeBet.Merge(m, src)
}
func (m *MsgCreateSwipeBet) XXX_Size() int {
	return m.Size()
}
func (m *MsgCreateSwipeBet) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgCreateSwipeBet.DiscardUnknown(m)
}

var xxx_messageInfo_MsgCreateSwipeBet proto.InternalMessageInfo

func (m *MsgCreateSwipeBet) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *MsgCreateSwipeBet) GetAmount() string {
	if m != nil {
		return m.Amount
	}
	return ""
}

func (m *MsgCreateSwipeBet) GetUserId() int64 {
	if m != nil {
		return m.UserId
	}
	return 0
}

type MsgCreateSwipeBetResponse struct {
	Id uint64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (m *MsgCreateSwipeBetResponse) Reset()         { *m = MsgCreateSwipeBetResponse{} }
func (m *MsgCreateSwipeBetResponse) String() string { return proto.CompactTextString(m) }
func (*MsgCreateSwipeBetResponse) ProtoMessage()    {}
func (*MsgCreateSwipeBetResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_fb52ceeb6acd4c41, []int{1}
}
func (m *MsgCreateSwipeBetResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgCreateSwipeBetResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgCreateSwipeBetResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgCreateSwipeBetResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgCreateSwipeBetResponse.Merge(m, src)
}
func (m *MsgCreateSwipeBetResponse) XXX_Size() int {
	return m.Size()
}
func (m *MsgCreateSwipeBetResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgCreateSwipeBetResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MsgCreateSwipeBetResponse proto.InternalMessageInfo

func (m *MsgCreateSwipeBetResponse) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

type MsgCreateMintBet struct {
	Creator  string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Reciever string `protobuf:"bytes,2,opt,name=reciever,proto3" json:"reciever,omitempty"`
	Amount   string `protobuf:"bytes,3,opt,name=amount,proto3" json:"amount,omitempty"`
	UserId   int64  `protobuf:"varint,4,opt,name=userId,proto3" json:"userId,omitempty"`
}

func (m *MsgCreateMintBet) Reset()         { *m = MsgCreateMintBet{} }
func (m *MsgCreateMintBet) String() string { return proto.CompactTextString(m) }
func (*MsgCreateMintBet) ProtoMessage()    {}
func (*MsgCreateMintBet) Descriptor() ([]byte, []int) {
	return fileDescriptor_fb52ceeb6acd4c41, []int{2}
}
func (m *MsgCreateMintBet) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgCreateMintBet) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgCreateMintBet.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgCreateMintBet) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgCreateMintBet.Merge(m, src)
}
func (m *MsgCreateMintBet) XXX_Size() int {
	return m.Size()
}
func (m *MsgCreateMintBet) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgCreateMintBet.DiscardUnknown(m)
}

var xxx_messageInfo_MsgCreateMintBet proto.InternalMessageInfo

func (m *MsgCreateMintBet) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *MsgCreateMintBet) GetReciever() string {
	if m != nil {
		return m.Reciever
	}
	return ""
}

func (m *MsgCreateMintBet) GetAmount() string {
	if m != nil {
		return m.Amount
	}
	return ""
}

func (m *MsgCreateMintBet) GetUserId() int64 {
	if m != nil {
		return m.UserId
	}
	return 0
}

type MsgCreateMintBetResponse struct {
	Id uint64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (m *MsgCreateMintBetResponse) Reset()         { *m = MsgCreateMintBetResponse{} }
func (m *MsgCreateMintBetResponse) String() string { return proto.CompactTextString(m) }
func (*MsgCreateMintBetResponse) ProtoMessage()    {}
func (*MsgCreateMintBetResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_fb52ceeb6acd4c41, []int{3}
}
func (m *MsgCreateMintBetResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgCreateMintBetResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgCreateMintBetResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgCreateMintBetResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgCreateMintBetResponse.Merge(m, src)
}
func (m *MsgCreateMintBetResponse) XXX_Size() int {
	return m.Size()
}
func (m *MsgCreateMintBetResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgCreateMintBetResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MsgCreateMintBetResponse proto.InternalMessageInfo

func (m *MsgCreateMintBetResponse) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func init() {
	proto.RegisterType((*MsgCreateSwipeBet)(nil), "VoroshilovMax.bettery.funds.MsgCreateSwipeBet")
	proto.RegisterType((*MsgCreateSwipeBetResponse)(nil), "VoroshilovMax.bettery.funds.MsgCreateSwipeBetResponse")
	proto.RegisterType((*MsgCreateMintBet)(nil), "VoroshilovMax.bettery.funds.MsgCreateMintBet")
	proto.RegisterType((*MsgCreateMintBetResponse)(nil), "VoroshilovMax.bettery.funds.MsgCreateMintBetResponse")
}

func init() { proto.RegisterFile("funds/tx.proto", fileDescriptor_fb52ceeb6acd4c41) }

var fileDescriptor_fb52ceeb6acd4c41 = []byte{
	// 337 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x92, 0xc1, 0x4e, 0xc2, 0x40,
	0x10, 0x86, 0x59, 0x4a, 0x50, 0x27, 0x91, 0x68, 0xa3, 0xa6, 0xd6, 0x64, 0x43, 0x38, 0x11, 0x8d,
	0xdb, 0x44, 0xa3, 0x0f, 0x80, 0x17, 0x3d, 0xf4, 0x52, 0x13, 0x0f, 0x26, 0xc6, 0x50, 0x3a, 0xc2,
	0x26, 0xd2, 0x6d, 0x76, 0xb7, 0x58, 0xde, 0xc2, 0xc7, 0xf2, 0xc8, 0xd1, 0xa3, 0x81, 0x77, 0xf0,
	0x6c, 0x28, 0x0b, 0x0a, 0x04, 0x22, 0xc7, 0xff, 0xef, 0xbf, 0xff, 0x7c, 0x99, 0x0e, 0x54, 0x5e,
	0xd2, 0x38, 0x52, 0x9e, 0xce, 0x58, 0x22, 0x85, 0x16, 0xf6, 0xc9, 0x83, 0x90, 0x42, 0x75, 0xf8,
	0xab, 0xe8, 0xf9, 0xcd, 0x8c, 0x85, 0xa8, 0x35, 0xca, 0x3e, 0xcb, 0x53, 0xee, 0xe1, 0x24, 0xac,
	0xde, 0x78, 0x82, 0xcf, 0x21, 0xea, 0xc9, 0x1b, 0xf7, 0x60, 0x62, 0x77, 0x79, 0xac, 0x7f, 0xdd,
	0xda, 0x13, 0xec, 0xfb, 0xaa, 0x7d, 0x23, 0xb1, 0xa9, 0xf1, 0x7e, 0xfc, 0xa2, 0x81, 0xda, 0x76,
	0x60, 0xab, 0x35, 0x76, 0x84, 0x74, 0x48, 0x95, 0xd4, 0x77, 0x82, 0xa9, 0xb4, 0x8f, 0xa0, 0xdc,
	0xec, 0x8a, 0x34, 0xd6, 0x4e, 0x31, 0xff, 0x60, 0xd4, 0xd8, 0x4f, 0x15, 0xca, 0xbb, 0xc8, 0xb1,
	0xaa, 0xa4, 0x6e, 0x05, 0x46, 0xd5, 0xce, 0xe0, 0x78, 0xa9, 0x3e, 0x40, 0x95, 0x88, 0x58, 0xa1,
	0x5d, 0x81, 0x22, 0x8f, 0xf2, 0x09, 0xa5, 0xa0, 0xc8, 0xa3, 0x5a, 0x06, 0x7b, 0xb3, 0xb0, 0xcf,
	0x63, 0xbd, 0x1e, 0xc5, 0x85, 0x6d, 0x89, 0x2d, 0x8e, 0x3d, 0x94, 0x06, 0x66, 0xa6, 0xff, 0x60,
	0x5a, 0x2b, 0x30, 0x4b, 0x73, 0x98, 0xa7, 0xe0, 0x2c, 0x4e, 0x5e, 0x45, 0x79, 0xf1, 0x4d, 0xc0,
	0xf2, 0x55, 0xdb, 0xce, 0xa0, 0xb2, 0xb0, 0x36, 0xc6, 0xd6, 0xfc, 0x16, 0xb6, 0xb4, 0x07, 0xf7,
	0x7a, 0xb3, 0xfc, 0x8c, 0x28, 0x85, 0xdd, 0xf9, 0x25, 0x9d, 0xff, 0xaf, 0xc8, 0xc4, 0xdd, 0xab,
	0x8d, 0xe2, 0xd3, 0xb1, 0x8d, 0xdb, 0x8f, 0x21, 0x25, 0x83, 0x21, 0x25, 0x5f, 0x43, 0x4a, 0xde,
	0x47, 0xb4, 0x30, 0x18, 0xd1, 0xc2, 0xe7, 0x88, 0x16, 0x1e, 0x59, 0x9b, 0xeb, 0x4e, 0x1a, 0xb2,
	0x96, 0xe8, 0x7a, 0x73, 0xd5, 0x9e, 0xa9, 0xf6, 0x32, 0xcf, 0x5c, 0x70, 0x3f, 0x41, 0x15, 0x96,
	0xf3, 0xdb, 0xbb, 0xfc, 0x09, 0x00, 0x00, 0xff, 0xff, 0x36, 0x65, 0xee, 0x2f, 0xd7, 0x02, 0x00,
	0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// MsgClient is the client API for Msg service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type MsgClient interface {
	// this line is used by starport scaffolding # proto/tx/rpc
	CreateSwipeBet(ctx context.Context, in *MsgCreateSwipeBet, opts ...grpc.CallOption) (*MsgCreateSwipeBetResponse, error)
	CreateMintBet(ctx context.Context, in *MsgCreateMintBet, opts ...grpc.CallOption) (*MsgCreateMintBetResponse, error)
}

type msgClient struct {
	cc grpc1.ClientConn
}

func NewMsgClient(cc grpc1.ClientConn) MsgClient {
	return &msgClient{cc}
}

func (c *msgClient) CreateSwipeBet(ctx context.Context, in *MsgCreateSwipeBet, opts ...grpc.CallOption) (*MsgCreateSwipeBetResponse, error) {
	out := new(MsgCreateSwipeBetResponse)
	err := c.cc.Invoke(ctx, "/VoroshilovMax.bettery.funds.Msg/CreateSwipeBet", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) CreateMintBet(ctx context.Context, in *MsgCreateMintBet, opts ...grpc.CallOption) (*MsgCreateMintBetResponse, error) {
	out := new(MsgCreateMintBetResponse)
	err := c.cc.Invoke(ctx, "/VoroshilovMax.bettery.funds.Msg/CreateMintBet", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MsgServer is the server API for Msg service.
type MsgServer interface {
	// this line is used by starport scaffolding # proto/tx/rpc
	CreateSwipeBet(context.Context, *MsgCreateSwipeBet) (*MsgCreateSwipeBetResponse, error)
	CreateMintBet(context.Context, *MsgCreateMintBet) (*MsgCreateMintBetResponse, error)
}

// UnimplementedMsgServer can be embedded to have forward compatible implementations.
type UnimplementedMsgServer struct {
}

func (*UnimplementedMsgServer) CreateSwipeBet(ctx context.Context, req *MsgCreateSwipeBet) (*MsgCreateSwipeBetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateSwipeBet not implemented")
}
func (*UnimplementedMsgServer) CreateMintBet(ctx context.Context, req *MsgCreateMintBet) (*MsgCreateMintBetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateMintBet not implemented")
}

func RegisterMsgServer(s grpc1.Server, srv MsgServer) {
	s.RegisterService(&_Msg_serviceDesc, srv)
}

func _Msg_CreateSwipeBet_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgCreateSwipeBet)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).CreateSwipeBet(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/VoroshilovMax.bettery.funds.Msg/CreateSwipeBet",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).CreateSwipeBet(ctx, req.(*MsgCreateSwipeBet))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_CreateMintBet_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgCreateMintBet)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).CreateMintBet(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/VoroshilovMax.bettery.funds.Msg/CreateMintBet",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).CreateMintBet(ctx, req.(*MsgCreateMintBet))
	}
	return interceptor(ctx, in, info, handler)
}

var _Msg_serviceDesc = grpc.ServiceDesc{
	ServiceName: "VoroshilovMax.bettery.funds.Msg",
	HandlerType: (*MsgServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateSwipeBet",
			Handler:    _Msg_CreateSwipeBet_Handler,
		},
		{
			MethodName: "CreateMintBet",
			Handler:    _Msg_CreateMintBet_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "funds/tx.proto",
}

func (m *MsgCreateSwipeBet) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgCreateSwipeBet) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgCreateSwipeBet) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.UserId != 0 {
		i = encodeVarintTx(dAtA, i, uint64(m.UserId))
		i--
		dAtA[i] = 0x18
	}
	if len(m.Amount) > 0 {
		i -= len(m.Amount)
		copy(dAtA[i:], m.Amount)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Amount)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *MsgCreateSwipeBetResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgCreateSwipeBetResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgCreateSwipeBetResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Id != 0 {
		i = encodeVarintTx(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func (m *MsgCreateMintBet) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgCreateMintBet) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgCreateMintBet) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.UserId != 0 {
		i = encodeVarintTx(dAtA, i, uint64(m.UserId))
		i--
		dAtA[i] = 0x20
	}
	if len(m.Amount) > 0 {
		i -= len(m.Amount)
		copy(dAtA[i:], m.Amount)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Amount)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Reciever) > 0 {
		i -= len(m.Reciever)
		copy(dAtA[i:], m.Reciever)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Reciever)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *MsgCreateMintBetResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgCreateMintBetResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgCreateMintBetResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Id != 0 {
		i = encodeVarintTx(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintTx(dAtA []byte, offset int, v uint64) int {
	offset -= sovTx(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *MsgCreateSwipeBet) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.Amount)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	if m.UserId != 0 {
		n += 1 + sovTx(uint64(m.UserId))
	}
	return n
}

func (m *MsgCreateSwipeBetResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovTx(uint64(m.Id))
	}
	return n
}

func (m *MsgCreateMintBet) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.Reciever)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.Amount)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	if m.UserId != 0 {
		n += 1 + sovTx(uint64(m.UserId))
	}
	return n
}

func (m *MsgCreateMintBetResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovTx(uint64(m.Id))
	}
	return n
}

func sovTx(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozTx(x uint64) (n int) {
	return sovTx(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *MsgCreateSwipeBet) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgCreateSwipeBet: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgCreateSwipeBet: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Amount", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Amount = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field UserId", wireType)
			}
			m.UserId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.UserId |= int64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *MsgCreateSwipeBetResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgCreateSwipeBetResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgCreateSwipeBetResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *MsgCreateMintBet) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgCreateMintBet: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgCreateMintBet: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Reciever", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Reciever = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Amount", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Amount = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field UserId", wireType)
			}
			m.UserId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.UserId |= int64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *MsgCreateMintBetResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgCreateMintBetResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgCreateMintBetResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipTx(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowTx
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTx
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTx
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthTx
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupTx
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthTx
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthTx        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowTx          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupTx = fmt.Errorf("proto: unexpected end of group")
)
