// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: publicevents/ref_pub_events.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
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

type RefPubEvents struct {
	Creator  string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	PubId    uint64 `protobuf:"varint,2,opt,name=pubId,proto3" json:"pubId,omitempty"`
	RefOne   string `protobuf:"bytes,3,opt,name=refOne,proto3" json:"refOne,omitempty"`
	RefTwo   string `protobuf:"bytes,4,opt,name=refTwo,proto3" json:"refTwo,omitempty"`
	RefThree string `protobuf:"bytes,5,opt,name=refThree,proto3" json:"refThree,omitempty"`
}

func (m *RefPubEvents) Reset()         { *m = RefPubEvents{} }
func (m *RefPubEvents) String() string { return proto.CompactTextString(m) }
func (*RefPubEvents) ProtoMessage()    {}
func (*RefPubEvents) Descriptor() ([]byte, []int) {
	return fileDescriptor_dde59465f8f89dcb, []int{0}
}
func (m *RefPubEvents) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *RefPubEvents) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_RefPubEvents.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *RefPubEvents) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RefPubEvents.Merge(m, src)
}
func (m *RefPubEvents) XXX_Size() int {
	return m.Size()
}
func (m *RefPubEvents) XXX_DiscardUnknown() {
	xxx_messageInfo_RefPubEvents.DiscardUnknown(m)
}

var xxx_messageInfo_RefPubEvents proto.InternalMessageInfo

func (m *RefPubEvents) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *RefPubEvents) GetPubId() uint64 {
	if m != nil {
		return m.PubId
	}
	return 0
}

func (m *RefPubEvents) GetRefOne() string {
	if m != nil {
		return m.RefOne
	}
	return ""
}

func (m *RefPubEvents) GetRefTwo() string {
	if m != nil {
		return m.RefTwo
	}
	return ""
}

func (m *RefPubEvents) GetRefThree() string {
	if m != nil {
		return m.RefThree
	}
	return ""
}

func init() {
	proto.RegisterType((*RefPubEvents)(nil), "VoroshilovMax.bettery.publicevents.RefPubEvents")
}

func init() { proto.RegisterFile("publicevents/ref_pub_events.proto", fileDescriptor_dde59465f8f89dcb) }

var fileDescriptor_dde59465f8f89dcb = []byte{
	// 250 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x52, 0x2c, 0x28, 0x4d, 0xca,
	0xc9, 0x4c, 0x4e, 0x2d, 0x4b, 0xcd, 0x2b, 0x29, 0xd6, 0x2f, 0x4a, 0x4d, 0x8b, 0x2f, 0x28, 0x4d,
	0x8a, 0x87, 0x70, 0xf5, 0x0a, 0x8a, 0xf2, 0x4b, 0xf2, 0x85, 0x94, 0xc2, 0xf2, 0x8b, 0xf2, 0x8b,
	0x33, 0x32, 0x73, 0xf2, 0xcb, 0x7c, 0x13, 0x2b, 0xf4, 0x92, 0x52, 0x4b, 0x4a, 0x52, 0x8b, 0x2a,
	0xf5, 0x90, 0x35, 0x4a, 0x89, 0xa4, 0xe7, 0xa7, 0xe7, 0x83, 0x95, 0xeb, 0x83, 0x58, 0x10, 0x9d,
	0x4a, 0x5d, 0x8c, 0x5c, 0x3c, 0x41, 0xa9, 0x69, 0x01, 0xa5, 0x49, 0xae, 0x60, 0x65, 0x42, 0x12,
	0x5c, 0xec, 0xc9, 0x45, 0xa9, 0x89, 0x25, 0xf9, 0x45, 0x12, 0x8c, 0x0a, 0x8c, 0x1a, 0x9c, 0x41,
	0x30, 0xae, 0x90, 0x08, 0x17, 0x6b, 0x41, 0x69, 0x92, 0x67, 0x8a, 0x04, 0x93, 0x02, 0xa3, 0x06,
	0x4b, 0x10, 0x84, 0x23, 0x24, 0xc6, 0xc5, 0x56, 0x94, 0x9a, 0xe6, 0x9f, 0x97, 0x2a, 0xc1, 0x0c,
	0x56, 0x0e, 0xe5, 0x41, 0xc5, 0x43, 0xca, 0xf3, 0x25, 0x58, 0xe0, 0xe2, 0x21, 0xe5, 0xf9, 0x42,
	0x52, 0x5c, 0x1c, 0x20, 0x56, 0x46, 0x51, 0x6a, 0xaa, 0x04, 0x2b, 0x58, 0x06, 0xce, 0x77, 0xf2,
	0x3f, 0xf1, 0x48, 0x8e, 0xf1, 0xc2, 0x23, 0x39, 0xc6, 0x07, 0x8f, 0xe4, 0x18, 0x27, 0x3c, 0x96,
	0x63, 0xb8, 0xf0, 0x58, 0x8e, 0xe1, 0xc6, 0x63, 0x39, 0x86, 0x28, 0xd3, 0xf4, 0xcc, 0x92, 0x8c,
	0xd2, 0x24, 0xbd, 0xe4, 0xfc, 0x5c, 0x7d, 0x14, 0xbf, 0xea, 0x43, 0xfd, 0xaa, 0x5f, 0xa1, 0x8f,
	0x12, 0x4c, 0x25, 0x95, 0x05, 0xa9, 0xc5, 0x49, 0x6c, 0x60, 0x4f, 0x1a, 0x03, 0x02, 0x00, 0x00,
	0xff, 0xff, 0xda, 0x7e, 0x5b, 0x7c, 0x43, 0x01, 0x00, 0x00,
}

func (m *RefPubEvents) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *RefPubEvents) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *RefPubEvents) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.RefThree) > 0 {
		i -= len(m.RefThree)
		copy(dAtA[i:], m.RefThree)
		i = encodeVarintRefPubEvents(dAtA, i, uint64(len(m.RefThree)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.RefTwo) > 0 {
		i -= len(m.RefTwo)
		copy(dAtA[i:], m.RefTwo)
		i = encodeVarintRefPubEvents(dAtA, i, uint64(len(m.RefTwo)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.RefOne) > 0 {
		i -= len(m.RefOne)
		copy(dAtA[i:], m.RefOne)
		i = encodeVarintRefPubEvents(dAtA, i, uint64(len(m.RefOne)))
		i--
		dAtA[i] = 0x1a
	}
	if m.PubId != 0 {
		i = encodeVarintRefPubEvents(dAtA, i, uint64(m.PubId))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintRefPubEvents(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintRefPubEvents(dAtA []byte, offset int, v uint64) int {
	offset -= sovRefPubEvents(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *RefPubEvents) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovRefPubEvents(uint64(l))
	}
	if m.PubId != 0 {
		n += 1 + sovRefPubEvents(uint64(m.PubId))
	}
	l = len(m.RefOne)
	if l > 0 {
		n += 1 + l + sovRefPubEvents(uint64(l))
	}
	l = len(m.RefTwo)
	if l > 0 {
		n += 1 + l + sovRefPubEvents(uint64(l))
	}
	l = len(m.RefThree)
	if l > 0 {
		n += 1 + l + sovRefPubEvents(uint64(l))
	}
	return n
}

func sovRefPubEvents(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozRefPubEvents(x uint64) (n int) {
	return sovRefPubEvents(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *RefPubEvents) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowRefPubEvents
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
			return fmt.Errorf("proto: RefPubEvents: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: RefPubEvents: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowRefPubEvents
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
				return ErrInvalidLengthRefPubEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthRefPubEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field PubId", wireType)
			}
			m.PubId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowRefPubEvents
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.PubId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field RefOne", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowRefPubEvents
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
				return ErrInvalidLengthRefPubEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthRefPubEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.RefOne = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field RefTwo", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowRefPubEvents
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
				return ErrInvalidLengthRefPubEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthRefPubEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.RefTwo = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field RefThree", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowRefPubEvents
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
				return ErrInvalidLengthRefPubEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthRefPubEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.RefThree = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipRefPubEvents(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthRefPubEvents
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
func skipRefPubEvents(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowRefPubEvents
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
					return 0, ErrIntOverflowRefPubEvents
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
					return 0, ErrIntOverflowRefPubEvents
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
				return 0, ErrInvalidLengthRefPubEvents
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupRefPubEvents
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthRefPubEvents
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthRefPubEvents        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowRefPubEvents          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupRefPubEvents = fmt.Errorf("proto: unexpected end of group")
)