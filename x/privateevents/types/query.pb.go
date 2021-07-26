// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: privateevents/query.proto

package types

import (
	context "context"
	fmt "fmt"
	query "github.com/cosmos/cosmos-sdk/types/query"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	_ "google.golang.org/genproto/googleapis/api/annotations"
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

// this line is used by starport scaffolding # 3
type QueryGetCreatePrivEventsRequest struct {
	Id uint64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (m *QueryGetCreatePrivEventsRequest) Reset()         { *m = QueryGetCreatePrivEventsRequest{} }
func (m *QueryGetCreatePrivEventsRequest) String() string { return proto.CompactTextString(m) }
func (*QueryGetCreatePrivEventsRequest) ProtoMessage()    {}
func (*QueryGetCreatePrivEventsRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_22507769cae3c14c, []int{0}
}
func (m *QueryGetCreatePrivEventsRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryGetCreatePrivEventsRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryGetCreatePrivEventsRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryGetCreatePrivEventsRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryGetCreatePrivEventsRequest.Merge(m, src)
}
func (m *QueryGetCreatePrivEventsRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryGetCreatePrivEventsRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryGetCreatePrivEventsRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryGetCreatePrivEventsRequest proto.InternalMessageInfo

func (m *QueryGetCreatePrivEventsRequest) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

type QueryGetCreatePrivEventsResponse struct {
	CreatePrivEvents *CreatePrivEvents `protobuf:"bytes,1,opt,name=CreatePrivEvents,proto3" json:"CreatePrivEvents,omitempty"`
}

func (m *QueryGetCreatePrivEventsResponse) Reset()         { *m = QueryGetCreatePrivEventsResponse{} }
func (m *QueryGetCreatePrivEventsResponse) String() string { return proto.CompactTextString(m) }
func (*QueryGetCreatePrivEventsResponse) ProtoMessage()    {}
func (*QueryGetCreatePrivEventsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_22507769cae3c14c, []int{1}
}
func (m *QueryGetCreatePrivEventsResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryGetCreatePrivEventsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryGetCreatePrivEventsResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryGetCreatePrivEventsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryGetCreatePrivEventsResponse.Merge(m, src)
}
func (m *QueryGetCreatePrivEventsResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryGetCreatePrivEventsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryGetCreatePrivEventsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryGetCreatePrivEventsResponse proto.InternalMessageInfo

func (m *QueryGetCreatePrivEventsResponse) GetCreatePrivEvents() *CreatePrivEvents {
	if m != nil {
		return m.CreatePrivEvents
	}
	return nil
}

type QueryAllCreatePrivEventsRequest struct {
	Pagination *query.PageRequest `protobuf:"bytes,1,opt,name=pagination,proto3" json:"pagination,omitempty"`
}

func (m *QueryAllCreatePrivEventsRequest) Reset()         { *m = QueryAllCreatePrivEventsRequest{} }
func (m *QueryAllCreatePrivEventsRequest) String() string { return proto.CompactTextString(m) }
func (*QueryAllCreatePrivEventsRequest) ProtoMessage()    {}
func (*QueryAllCreatePrivEventsRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_22507769cae3c14c, []int{2}
}
func (m *QueryAllCreatePrivEventsRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryAllCreatePrivEventsRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryAllCreatePrivEventsRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryAllCreatePrivEventsRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryAllCreatePrivEventsRequest.Merge(m, src)
}
func (m *QueryAllCreatePrivEventsRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryAllCreatePrivEventsRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryAllCreatePrivEventsRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryAllCreatePrivEventsRequest proto.InternalMessageInfo

func (m *QueryAllCreatePrivEventsRequest) GetPagination() *query.PageRequest {
	if m != nil {
		return m.Pagination
	}
	return nil
}

type QueryAllCreatePrivEventsResponse struct {
	CreatePrivEvents []*CreatePrivEvents `protobuf:"bytes,1,rep,name=CreatePrivEvents,proto3" json:"CreatePrivEvents,omitempty"`
	Pagination       *query.PageResponse `protobuf:"bytes,2,opt,name=pagination,proto3" json:"pagination,omitempty"`
}

func (m *QueryAllCreatePrivEventsResponse) Reset()         { *m = QueryAllCreatePrivEventsResponse{} }
func (m *QueryAllCreatePrivEventsResponse) String() string { return proto.CompactTextString(m) }
func (*QueryAllCreatePrivEventsResponse) ProtoMessage()    {}
func (*QueryAllCreatePrivEventsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_22507769cae3c14c, []int{3}
}
func (m *QueryAllCreatePrivEventsResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryAllCreatePrivEventsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryAllCreatePrivEventsResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryAllCreatePrivEventsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryAllCreatePrivEventsResponse.Merge(m, src)
}
func (m *QueryAllCreatePrivEventsResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryAllCreatePrivEventsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryAllCreatePrivEventsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryAllCreatePrivEventsResponse proto.InternalMessageInfo

func (m *QueryAllCreatePrivEventsResponse) GetCreatePrivEvents() []*CreatePrivEvents {
	if m != nil {
		return m.CreatePrivEvents
	}
	return nil
}

func (m *QueryAllCreatePrivEventsResponse) GetPagination() *query.PageResponse {
	if m != nil {
		return m.Pagination
	}
	return nil
}

func init() {
	proto.RegisterType((*QueryGetCreatePrivEventsRequest)(nil), "VoroshilovMax.bettery.privateevents.QueryGetCreatePrivEventsRequest")
	proto.RegisterType((*QueryGetCreatePrivEventsResponse)(nil), "VoroshilovMax.bettery.privateevents.QueryGetCreatePrivEventsResponse")
	proto.RegisterType((*QueryAllCreatePrivEventsRequest)(nil), "VoroshilovMax.bettery.privateevents.QueryAllCreatePrivEventsRequest")
	proto.RegisterType((*QueryAllCreatePrivEventsResponse)(nil), "VoroshilovMax.bettery.privateevents.QueryAllCreatePrivEventsResponse")
}

func init() { proto.RegisterFile("privateevents/query.proto", fileDescriptor_22507769cae3c14c) }

var fileDescriptor_22507769cae3c14c = []byte{
	// 433 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xac, 0x94, 0x4d, 0xab, 0xd3, 0x40,
	0x14, 0x86, 0x3b, 0xb9, 0xea, 0x62, 0x04, 0x91, 0x71, 0xa3, 0x45, 0xe2, 0x25, 0xc2, 0x55, 0x5c,
	0xcc, 0xd0, 0x2b, 0x55, 0x10, 0x5d, 0xb4, 0x5a, 0xbb, 0x12, 0x6a, 0x17, 0x2e, 0xdc, 0x94, 0x49,
	0x7b, 0x48, 0x07, 0xd2, 0x4c, 0x9a, 0x99, 0x86, 0x16, 0x71, 0x23, 0xb8, 0x17, 0xfc, 0x53, 0xae,
	0xa4, 0xe2, 0xc6, 0xa5, 0x36, 0xfe, 0x10, 0xe9, 0x4c, 0xa4, 0x9f, 0xe9, 0x87, 0xde, 0xed, 0xcc,
	0x39, 0xcf, 0xbc, 0xcf, 0xc9, 0x21, 0xf8, 0x56, 0x9c, 0x88, 0x94, 0x6b, 0x80, 0x14, 0x22, 0xad,
	0xd8, 0x70, 0x04, 0xc9, 0x84, 0xc6, 0x89, 0xd4, 0x92, 0xdc, 0x7d, 0x23, 0x13, 0xa9, 0xfa, 0x22,
	0x94, 0xe9, 0x2b, 0x3e, 0xa6, 0x3e, 0x68, 0x6d, 0x2f, 0x97, 0x1a, 0xca, 0xb7, 0x03, 0x29, 0x83,
	0x10, 0x18, 0x8f, 0x05, 0xe3, 0x51, 0x24, 0x35, 0xd7, 0x42, 0x46, 0xca, 0x22, 0xca, 0x0f, 0xba,
	0x52, 0x0d, 0xa4, 0x62, 0x3e, 0x57, 0x60, 0xd9, 0x2c, 0xad, 0xf8, 0xa0, 0x79, 0x85, 0xc5, 0x3c,
	0x10, 0x91, 0x29, 0xce, 0x6b, 0xcf, 0x56, 0x93, 0x74, 0x13, 0xe0, 0x1a, 0x3a, 0xf3, 0xc3, 0x8e,
	0x3d, 0xb2, 0x75, 0x5e, 0x05, 0xdf, 0x79, 0x3d, 0x27, 0x35, 0x41, 0x3f, 0x37, 0x35, 0xad, 0x44,
	0xa4, 0x0d, 0x53, 0xd1, 0x86, 0xe1, 0x08, 0x94, 0x26, 0xd7, 0xb0, 0x23, 0x7a, 0x37, 0xd1, 0x29,
	0xba, 0x7f, 0xa9, 0xed, 0x88, 0x9e, 0xf7, 0x11, 0xe1, 0xd3, 0xe2, 0x1e, 0x15, 0xcb, 0x48, 0x01,
	0xe1, 0xf8, 0xfa, 0xfa, 0x9d, 0x41, 0x5c, 0x3d, 0xaf, 0xd2, 0x03, 0x26, 0x41, 0x37, 0xc0, 0x1b,
	0x38, 0x4f, 0xe4, 0xd1, 0x6b, 0x61, 0x58, 0x14, 0xfd, 0x25, 0xc6, 0x8b, 0xc9, 0xe4, 0xef, 0x9f,
	0x51, 0x3b, 0x46, 0x3a, 0x1f, 0x23, 0xb5, 0x9f, 0x28, 0x1f, 0x23, 0x6d, 0xf1, 0x00, 0xf2, 0xde,
	0xf6, 0x52, 0xa7, 0xf7, 0xf5, 0xaf, 0xf2, 0xd6, 0xb7, 0x76, 0x2a, 0x9f, 0x5c, 0xa0, 0x32, 0x69,
	0xae, 0xf8, 0x38, 0xc6, 0xe7, 0xde, 0x5e, 0x1f, 0x9b, 0x6f, 0x59, 0xe8, 0xfc, 0xdb, 0x09, 0xbe,
	0x6c, 0x84, 0x48, 0x86, 0x36, 0x63, 0x93, 0x17, 0x07, 0x05, 0xde, 0xb3, 0x38, 0xe5, 0xc6, 0x7f,
	0x52, 0x6c, 0x6e, 0xaf, 0xfe, 0xe1, 0xfb, 0xef, 0xcf, 0xce, 0x53, 0xf2, 0x84, 0xad, 0xe0, 0x58,
	0x8e, 0x63, 0xdb, 0x36, 0x7d, 0x81, 0x61, 0xef, 0x44, 0xef, 0x3d, 0xf9, 0x85, 0xf0, 0x8d, 0xf5,
	0x07, 0x6a, 0x61, 0x78, 0x8c, 0x68, 0xf1, 0x9a, 0x1d, 0x23, 0xba, 0x63, 0x81, 0xbc, 0x67, 0x46,
	0xf4, 0x31, 0xa9, 0xfe, 0x93, 0x68, 0xbd, 0xf5, 0x65, 0xe6, 0xa2, 0xe9, 0xcc, 0x45, 0x3f, 0x67,
	0x2e, 0xfa, 0x94, 0xb9, 0xa5, 0x69, 0xe6, 0x96, 0x7e, 0x64, 0x6e, 0xe9, 0xed, 0xa3, 0x40, 0xe8,
	0xfe, 0xc8, 0xa7, 0x5d, 0x39, 0x28, 0x40, 0x8f, 0xd7, 0xe0, 0x7a, 0x12, 0x83, 0xf2, 0xaf, 0x98,
	0x7f, 0xc4, 0xc3, 0x3f, 0x01, 0x00, 0x00, 0xff, 0xff, 0x41, 0x73, 0x18, 0xf1, 0xd7, 0x04, 0x00,
	0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// QueryClient is the client API for Query service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type QueryClient interface {
	// Queries a createPrivEvents by id.
	CreatePrivEvents(ctx context.Context, in *QueryGetCreatePrivEventsRequest, opts ...grpc.CallOption) (*QueryGetCreatePrivEventsResponse, error)
	// Queries a list of createPrivEvents items.
	CreatePrivEventsAll(ctx context.Context, in *QueryAllCreatePrivEventsRequest, opts ...grpc.CallOption) (*QueryAllCreatePrivEventsResponse, error)
}

type queryClient struct {
	cc grpc1.ClientConn
}

func NewQueryClient(cc grpc1.ClientConn) QueryClient {
	return &queryClient{cc}
}

func (c *queryClient) CreatePrivEvents(ctx context.Context, in *QueryGetCreatePrivEventsRequest, opts ...grpc.CallOption) (*QueryGetCreatePrivEventsResponse, error) {
	out := new(QueryGetCreatePrivEventsResponse)
	err := c.cc.Invoke(ctx, "/VoroshilovMax.bettery.privateevents.Query/CreatePrivEvents", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) CreatePrivEventsAll(ctx context.Context, in *QueryAllCreatePrivEventsRequest, opts ...grpc.CallOption) (*QueryAllCreatePrivEventsResponse, error) {
	out := new(QueryAllCreatePrivEventsResponse)
	err := c.cc.Invoke(ctx, "/VoroshilovMax.bettery.privateevents.Query/CreatePrivEventsAll", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// QueryServer is the server API for Query service.
type QueryServer interface {
	// Queries a createPrivEvents by id.
	CreatePrivEvents(context.Context, *QueryGetCreatePrivEventsRequest) (*QueryGetCreatePrivEventsResponse, error)
	// Queries a list of createPrivEvents items.
	CreatePrivEventsAll(context.Context, *QueryAllCreatePrivEventsRequest) (*QueryAllCreatePrivEventsResponse, error)
}

// UnimplementedQueryServer can be embedded to have forward compatible implementations.
type UnimplementedQueryServer struct {
}

func (*UnimplementedQueryServer) CreatePrivEvents(ctx context.Context, req *QueryGetCreatePrivEventsRequest) (*QueryGetCreatePrivEventsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreatePrivEvents not implemented")
}
func (*UnimplementedQueryServer) CreatePrivEventsAll(ctx context.Context, req *QueryAllCreatePrivEventsRequest) (*QueryAllCreatePrivEventsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreatePrivEventsAll not implemented")
}

func RegisterQueryServer(s grpc1.Server, srv QueryServer) {
	s.RegisterService(&_Query_serviceDesc, srv)
}

func _Query_CreatePrivEvents_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryGetCreatePrivEventsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).CreatePrivEvents(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/VoroshilovMax.bettery.privateevents.Query/CreatePrivEvents",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).CreatePrivEvents(ctx, req.(*QueryGetCreatePrivEventsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_CreatePrivEventsAll_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryAllCreatePrivEventsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).CreatePrivEventsAll(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/VoroshilovMax.bettery.privateevents.Query/CreatePrivEventsAll",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).CreatePrivEventsAll(ctx, req.(*QueryAllCreatePrivEventsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Query_serviceDesc = grpc.ServiceDesc{
	ServiceName: "VoroshilovMax.bettery.privateevents.Query",
	HandlerType: (*QueryServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreatePrivEvents",
			Handler:    _Query_CreatePrivEvents_Handler,
		},
		{
			MethodName: "CreatePrivEventsAll",
			Handler:    _Query_CreatePrivEventsAll_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "privateevents/query.proto",
}

func (m *QueryGetCreatePrivEventsRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryGetCreatePrivEventsRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryGetCreatePrivEventsRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Id != 0 {
		i = encodeVarintQuery(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func (m *QueryGetCreatePrivEventsResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryGetCreatePrivEventsResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryGetCreatePrivEventsResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.CreatePrivEvents != nil {
		{
			size, err := m.CreatePrivEvents.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryAllCreatePrivEventsRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryAllCreatePrivEventsRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryAllCreatePrivEventsRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Pagination != nil {
		{
			size, err := m.Pagination.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryAllCreatePrivEventsResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryAllCreatePrivEventsResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryAllCreatePrivEventsResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Pagination != nil {
		{
			size, err := m.Pagination.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	if len(m.CreatePrivEvents) > 0 {
		for iNdEx := len(m.CreatePrivEvents) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.CreatePrivEvents[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintQuery(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func encodeVarintQuery(dAtA []byte, offset int, v uint64) int {
	offset -= sovQuery(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *QueryGetCreatePrivEventsRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovQuery(uint64(m.Id))
	}
	return n
}

func (m *QueryGetCreatePrivEventsResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.CreatePrivEvents != nil {
		l = m.CreatePrivEvents.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryAllCreatePrivEventsRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Pagination != nil {
		l = m.Pagination.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryAllCreatePrivEventsResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.CreatePrivEvents) > 0 {
		for _, e := range m.CreatePrivEvents {
			l = e.Size()
			n += 1 + l + sovQuery(uint64(l))
		}
	}
	if m.Pagination != nil {
		l = m.Pagination.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func sovQuery(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozQuery(x uint64) (n int) {
	return sovQuery(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *QueryGetCreatePrivEventsRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryGetCreatePrivEventsRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryGetCreatePrivEventsRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *QueryGetCreatePrivEventsResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryGetCreatePrivEventsResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryGetCreatePrivEventsResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CreatePrivEvents", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.CreatePrivEvents == nil {
				m.CreatePrivEvents = &CreatePrivEvents{}
			}
			if err := m.CreatePrivEvents.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *QueryAllCreatePrivEventsRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryAllCreatePrivEventsRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryAllCreatePrivEventsRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pagination", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Pagination == nil {
				m.Pagination = &query.PageRequest{}
			}
			if err := m.Pagination.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *QueryAllCreatePrivEventsResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryAllCreatePrivEventsResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryAllCreatePrivEventsResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CreatePrivEvents", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.CreatePrivEvents = append(m.CreatePrivEvents, &CreatePrivEvents{})
			if err := m.CreatePrivEvents[len(m.CreatePrivEvents)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pagination", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Pagination == nil {
				m.Pagination = &query.PageResponse{}
			}
			if err := m.Pagination.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func skipQuery(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowQuery
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
					return 0, ErrIntOverflowQuery
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
					return 0, ErrIntOverflowQuery
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
				return 0, ErrInvalidLengthQuery
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupQuery
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthQuery
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthQuery        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowQuery          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupQuery = fmt.Errorf("proto: unexpected end of group")
)
