// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: funds/swipe_bet.proto

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

type SwipeBet struct {
	Creator string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Amount  string `protobuf:"bytes,2,opt,name=amount,proto3" json:"amount,omitempty"`
	UserId  int64  `protobuf:"varint,3,opt,name=userId,proto3" json:"userId,omitempty"`
}

func (m *SwipeBet) Reset()         { *m = SwipeBet{} }
func (m *SwipeBet) String() string { return proto.CompactTextString(m) }
func (*SwipeBet) ProtoMessage()    {}
func (*SwipeBet) Descriptor() ([]byte, []int) {
	return fileDescriptor_8e2f5655ae0fa339, []int{0}
}
func (m *SwipeBet) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *SwipeBet) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_SwipeBet.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *SwipeBet) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SwipeBet.Merge(m, src)
}
func (m *SwipeBet) XXX_Size() int {
	return m.Size()
}
func (m *SwipeBet) XXX_DiscardUnknown() {
	xxx_messageInfo_SwipeBet.DiscardUnknown(m)
}

var xxx_messageInfo_SwipeBet proto.InternalMessageInfo

func (m *SwipeBet) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *SwipeBet) GetAmount() string {
	if m != nil {
		return m.Amount
	}
	return ""
}

func (m *SwipeBet) GetUserId() int64 {
	if m != nil {
		return m.UserId
	}
	return 0
}

func init() {
	proto.RegisterType((*SwipeBet)(nil), "VoroshilovMax.bettery.funds.SwipeBet")
}

func init() { proto.RegisterFile("funds/swipe_bet.proto", fileDescriptor_8e2f5655ae0fa339) }

var fileDescriptor_8e2f5655ae0fa339 = []byte{
	// 210 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x4d, 0x2b, 0xcd, 0x4b,
	0x29, 0xd6, 0x2f, 0x2e, 0xcf, 0x2c, 0x48, 0x8d, 0x4f, 0x4a, 0x2d, 0xd1, 0x2b, 0x28, 0xca, 0x2f,
	0xc9, 0x17, 0x92, 0x0e, 0xcb, 0x2f, 0xca, 0x2f, 0xce, 0xc8, 0xcc, 0xc9, 0x2f, 0xf3, 0x4d, 0xac,
	0xd0, 0x4b, 0x4a, 0x2d, 0x29, 0x49, 0x2d, 0xaa, 0xd4, 0x03, 0x2b, 0x96, 0x12, 0x49, 0xcf, 0x4f,
	0xcf, 0x07, 0xab, 0xd3, 0x07, 0xb1, 0x20, 0x5a, 0x94, 0x42, 0xb8, 0x38, 0x82, 0x41, 0xa6, 0x38,
	0xa5, 0x96, 0x08, 0x49, 0x70, 0xb1, 0x27, 0x17, 0xa5, 0x26, 0x96, 0xe4, 0x17, 0x49, 0x30, 0x2a,
	0x30, 0x6a, 0x70, 0x06, 0xc1, 0xb8, 0x42, 0x62, 0x5c, 0x6c, 0x89, 0xb9, 0xf9, 0xa5, 0x79, 0x25,
	0x12, 0x4c, 0x60, 0x09, 0x28, 0x0f, 0x24, 0x5e, 0x5a, 0x9c, 0x5a, 0xe4, 0x99, 0x22, 0xc1, 0xac,
	0xc0, 0xa8, 0xc1, 0x1c, 0x04, 0xe5, 0x39, 0x79, 0x9c, 0x78, 0x24, 0xc7, 0x78, 0xe1, 0x91, 0x1c,
	0xe3, 0x83, 0x47, 0x72, 0x8c, 0x13, 0x1e, 0xcb, 0x31, 0x5c, 0x78, 0x2c, 0xc7, 0x70, 0xe3, 0xb1,
	0x1c, 0x43, 0x94, 0x5e, 0x7a, 0x66, 0x49, 0x46, 0x69, 0x92, 0x5e, 0x72, 0x7e, 0xae, 0x3e, 0x8a,
	0x6b, 0xf5, 0xa1, 0xae, 0xd5, 0xaf, 0xd0, 0x87, 0x78, 0xae, 0xa4, 0xb2, 0x20, 0xb5, 0x38, 0x89,
	0x0d, 0xec, 0x4c, 0x63, 0x40, 0x00, 0x00, 0x00, 0xff, 0xff, 0xf4, 0x1a, 0x90, 0x58, 0xf2, 0x00,
	0x00, 0x00,
}

func (m *SwipeBet) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *SwipeBet) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *SwipeBet) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.UserId != 0 {
		i = encodeVarintSwipeBet(dAtA, i, uint64(m.UserId))
		i--
		dAtA[i] = 0x18
	}
	if len(m.Amount) > 0 {
		i -= len(m.Amount)
		copy(dAtA[i:], m.Amount)
		i = encodeVarintSwipeBet(dAtA, i, uint64(len(m.Amount)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintSwipeBet(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintSwipeBet(dAtA []byte, offset int, v uint64) int {
	offset -= sovSwipeBet(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *SwipeBet) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovSwipeBet(uint64(l))
	}
	l = len(m.Amount)
	if l > 0 {
		n += 1 + l + sovSwipeBet(uint64(l))
	}
	if m.UserId != 0 {
		n += 1 + sovSwipeBet(uint64(m.UserId))
	}
	return n
}

func sovSwipeBet(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozSwipeBet(x uint64) (n int) {
	return sovSwipeBet(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *SwipeBet) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowSwipeBet
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
			return fmt.Errorf("proto: SwipeBet: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: SwipeBet: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSwipeBet
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
				return ErrInvalidLengthSwipeBet
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthSwipeBet
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
					return ErrIntOverflowSwipeBet
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
				return ErrInvalidLengthSwipeBet
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthSwipeBet
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
					return ErrIntOverflowSwipeBet
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
			skippy, err := skipSwipeBet(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthSwipeBet
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
func skipSwipeBet(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowSwipeBet
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
					return 0, ErrIntOverflowSwipeBet
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
					return 0, ErrIntOverflowSwipeBet
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
				return 0, ErrInvalidLengthSwipeBet
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupSwipeBet
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthSwipeBet
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthSwipeBet        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowSwipeBet          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupSwipeBet = fmt.Errorf("proto: unexpected end of group")
)
