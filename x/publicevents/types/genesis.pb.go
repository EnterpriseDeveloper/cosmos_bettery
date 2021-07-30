// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: publicevents/genesis.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
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

// GenesisState defines the publicevents module's genesis state.
type GenesisState struct {
	// this line is used by starport scaffolding # genesis/proto/state
	CreatePubEventsList  []*CreatePubEvents `protobuf:"bytes,1,rep,name=createPubEventsList,proto3" json:"createPubEventsList,omitempty"`
	CreatePubEventsCount uint64             `protobuf:"varint,2,opt,name=createPubEventsCount,proto3" json:"createPubEventsCount,omitempty"`
}

func (m *GenesisState) Reset()         { *m = GenesisState{} }
func (m *GenesisState) String() string { return proto.CompactTextString(m) }
func (*GenesisState) ProtoMessage()    {}
func (*GenesisState) Descriptor() ([]byte, []int) {
	return fileDescriptor_1b3443eab1b36a78, []int{0}
}
func (m *GenesisState) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *GenesisState) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_GenesisState.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *GenesisState) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GenesisState.Merge(m, src)
}
func (m *GenesisState) XXX_Size() int {
	return m.Size()
}
func (m *GenesisState) XXX_DiscardUnknown() {
	xxx_messageInfo_GenesisState.DiscardUnknown(m)
}

var xxx_messageInfo_GenesisState proto.InternalMessageInfo

func (m *GenesisState) GetCreatePubEventsList() []*CreatePubEvents {
	if m != nil {
		return m.CreatePubEventsList
	}
	return nil
}

func (m *GenesisState) GetCreatePubEventsCount() uint64 {
	if m != nil {
		return m.CreatePubEventsCount
	}
	return 0
}

func init() {
	proto.RegisterType((*GenesisState)(nil), "VoroshilovMax.bettery.publicevents.GenesisState")
}

func init() { proto.RegisterFile("publicevents/genesis.proto", fileDescriptor_1b3443eab1b36a78) }

var fileDescriptor_1b3443eab1b36a78 = []byte{
	// 228 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x2a, 0x28, 0x4d, 0xca,
	0xc9, 0x4c, 0x4e, 0x2d, 0x4b, 0xcd, 0x2b, 0x29, 0xd6, 0x4f, 0x4f, 0xcd, 0x4b, 0x2d, 0xce, 0x2c,
	0xd6, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x52, 0x0a, 0xcb, 0x2f, 0xca, 0x2f, 0xce, 0xc8, 0xcc,
	0xc9, 0x2f, 0xf3, 0x4d, 0xac, 0xd0, 0x4b, 0x4a, 0x2d, 0x29, 0x49, 0x2d, 0xaa, 0xd4, 0x43, 0xd6,
	0x21, 0xa5, 0x82, 0xa2, 0x3f, 0xb9, 0x28, 0x35, 0xb1, 0x24, 0x35, 0xbe, 0xa0, 0x34, 0x29, 0x1e,
	0x22, 0x02, 0x31, 0x49, 0x69, 0x25, 0x23, 0x17, 0x8f, 0x3b, 0xc4, 0xec, 0xe0, 0x92, 0xc4, 0x92,
	0x54, 0xa1, 0x54, 0x2e, 0x61, 0x88, 0xda, 0x80, 0xd2, 0x24, 0x57, 0xb0, 0x4a, 0x9f, 0xcc, 0xe2,
	0x12, 0x09, 0x46, 0x05, 0x66, 0x0d, 0x6e, 0x23, 0x63, 0x3d, 0xc2, 0x16, 0xeb, 0x39, 0xa3, 0x6a,
	0x0f, 0xc2, 0x66, 0x9e, 0x90, 0x11, 0x97, 0x08, 0x9a, 0xb0, 0x73, 0x7e, 0x69, 0x5e, 0x89, 0x04,
	0x93, 0x02, 0xa3, 0x06, 0x4b, 0x10, 0x56, 0x39, 0x27, 0xff, 0x13, 0x8f, 0xe4, 0x18, 0x2f, 0x3c,
	0x92, 0x63, 0x7c, 0xf0, 0x48, 0x8e, 0x71, 0xc2, 0x63, 0x39, 0x86, 0x0b, 0x8f, 0xe5, 0x18, 0x6e,
	0x3c, 0x96, 0x63, 0x88, 0x32, 0x4d, 0xcf, 0x2c, 0xc9, 0x28, 0x4d, 0xd2, 0x4b, 0xce, 0xcf, 0xd5,
	0x47, 0x71, 0xa1, 0x3e, 0xd4, 0x85, 0xfa, 0x15, 0xfa, 0x28, 0xc1, 0x51, 0x52, 0x59, 0x90, 0x5a,
	0x9c, 0xc4, 0x06, 0x0e, 0x03, 0x63, 0x40, 0x00, 0x00, 0x00, 0xff, 0xff, 0xf5, 0xe7, 0x89, 0x91,
	0x6b, 0x01, 0x00, 0x00,
}

func (m *GenesisState) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *GenesisState) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *GenesisState) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.CreatePubEventsCount != 0 {
		i = encodeVarintGenesis(dAtA, i, uint64(m.CreatePubEventsCount))
		i--
		dAtA[i] = 0x10
	}
	if len(m.CreatePubEventsList) > 0 {
		for iNdEx := len(m.CreatePubEventsList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.CreatePubEventsList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func encodeVarintGenesis(dAtA []byte, offset int, v uint64) int {
	offset -= sovGenesis(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *GenesisState) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.CreatePubEventsList) > 0 {
		for _, e := range m.CreatePubEventsList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if m.CreatePubEventsCount != 0 {
		n += 1 + sovGenesis(uint64(m.CreatePubEventsCount))
	}
	return n
}

func sovGenesis(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozGenesis(x uint64) (n int) {
	return sovGenesis(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *GenesisState) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowGenesis
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
			return fmt.Errorf("proto: GenesisState: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: GenesisState: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CreatePubEventsList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
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
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.CreatePubEventsList = append(m.CreatePubEventsList, &CreatePubEvents{})
			if err := m.CreatePubEventsList[len(m.CreatePubEventsList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field CreatePubEventsCount", wireType)
			}
			m.CreatePubEventsCount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.CreatePubEventsCount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipGenesis(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthGenesis
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
func skipGenesis(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowGenesis
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
					return 0, ErrIntOverflowGenesis
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
					return 0, ErrIntOverflowGenesis
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
				return 0, ErrInvalidLengthGenesis
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupGenesis
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthGenesis
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthGenesis        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowGenesis          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupGenesis = fmt.Errorf("proto: unexpected end of group")
)
