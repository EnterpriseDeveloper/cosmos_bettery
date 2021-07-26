// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: privateevents/part_priv_events.proto

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

type PartPrivEvents struct {
	Creator string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	PrivId  uint64 `protobuf:"varint,2,opt,name=privId,proto3" json:"privId,omitempty"`
	Answer  string `protobuf:"bytes,3,opt,name=answer,proto3" json:"answer,omitempty"`
}

func (m *PartPrivEvents) Reset()         { *m = PartPrivEvents{} }
func (m *PartPrivEvents) String() string { return proto.CompactTextString(m) }
func (*PartPrivEvents) ProtoMessage()    {}
func (*PartPrivEvents) Descriptor() ([]byte, []int) {
	return fileDescriptor_64bf93b8693510c3, []int{0}
}
func (m *PartPrivEvents) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *PartPrivEvents) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_PartPrivEvents.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *PartPrivEvents) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PartPrivEvents.Merge(m, src)
}
func (m *PartPrivEvents) XXX_Size() int {
	return m.Size()
}
func (m *PartPrivEvents) XXX_DiscardUnknown() {
	xxx_messageInfo_PartPrivEvents.DiscardUnknown(m)
}

var xxx_messageInfo_PartPrivEvents proto.InternalMessageInfo

func (m *PartPrivEvents) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *PartPrivEvents) GetPrivId() uint64 {
	if m != nil {
		return m.PrivId
	}
	return 0
}

func (m *PartPrivEvents) GetAnswer() string {
	if m != nil {
		return m.Answer
	}
	return ""
}

func init() {
	proto.RegisterType((*PartPrivEvents)(nil), "VoroshilovMax.bettery.privateevents.PartPrivEvents")
}

func init() {
	proto.RegisterFile("privateevents/part_priv_events.proto", fileDescriptor_64bf93b8693510c3)
}

var fileDescriptor_64bf93b8693510c3 = []byte{
	// 222 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x52, 0x29, 0x28, 0xca, 0x2c,
	0x4b, 0x2c, 0x49, 0x4d, 0x2d, 0x4b, 0xcd, 0x2b, 0x29, 0xd6, 0x2f, 0x48, 0x2c, 0x2a, 0x89, 0x07,
	0x09, 0xc5, 0x43, 0x04, 0xf4, 0x0a, 0x8a, 0xf2, 0x4b, 0xf2, 0x85, 0x94, 0xc3, 0xf2, 0x8b, 0xf2,
	0x8b, 0x33, 0x32, 0x73, 0xf2, 0xcb, 0x7c, 0x13, 0x2b, 0xf4, 0x92, 0x52, 0x4b, 0x4a, 0x52, 0x8b,
	0x2a, 0xf5, 0x50, 0xf4, 0x4a, 0x89, 0xa4, 0xe7, 0xa7, 0xe7, 0x83, 0xd5, 0xeb, 0x83, 0x58, 0x10,
	0xad, 0x4a, 0x51, 0x5c, 0x7c, 0x01, 0x89, 0x45, 0x25, 0x01, 0x45, 0x99, 0x65, 0xae, 0x60, 0x75,
	0x42, 0x12, 0x5c, 0xec, 0xc9, 0x45, 0xa9, 0x89, 0x25, 0xf9, 0x45, 0x12, 0x8c, 0x0a, 0x8c, 0x1a,
	0x9c, 0x41, 0x30, 0xae, 0x90, 0x18, 0x17, 0x1b, 0xc8, 0x48, 0xcf, 0x14, 0x09, 0x26, 0x05, 0x46,
	0x0d, 0x96, 0x20, 0x28, 0x0f, 0x24, 0x9e, 0x98, 0x57, 0x5c, 0x9e, 0x5a, 0x24, 0xc1, 0x0c, 0xd6,
	0x00, 0xe5, 0x39, 0x05, 0x9c, 0x78, 0x24, 0xc7, 0x78, 0xe1, 0x91, 0x1c, 0xe3, 0x83, 0x47, 0x72,
	0x8c, 0x13, 0x1e, 0xcb, 0x31, 0x5c, 0x78, 0x2c, 0xc7, 0x70, 0xe3, 0xb1, 0x1c, 0x43, 0x94, 0x59,
	0x7a, 0x66, 0x49, 0x46, 0x69, 0x92, 0x5e, 0x72, 0x7e, 0xae, 0x3e, 0x8a, 0xdb, 0xf5, 0xa1, 0x6e,
	0xd7, 0xaf, 0xd0, 0x47, 0xf5, 0x79, 0x49, 0x65, 0x41, 0x6a, 0x71, 0x12, 0x1b, 0xd8, 0xd1, 0xc6,
	0x80, 0x00, 0x00, 0x00, 0xff, 0xff, 0xa8, 0x4c, 0x07, 0x7f, 0x17, 0x01, 0x00, 0x00,
}

func (m *PartPrivEvents) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *PartPrivEvents) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *PartPrivEvents) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Answer) > 0 {
		i -= len(m.Answer)
		copy(dAtA[i:], m.Answer)
		i = encodeVarintPartPrivEvents(dAtA, i, uint64(len(m.Answer)))
		i--
		dAtA[i] = 0x1a
	}
	if m.PrivId != 0 {
		i = encodeVarintPartPrivEvents(dAtA, i, uint64(m.PrivId))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintPartPrivEvents(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintPartPrivEvents(dAtA []byte, offset int, v uint64) int {
	offset -= sovPartPrivEvents(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *PartPrivEvents) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovPartPrivEvents(uint64(l))
	}
	if m.PrivId != 0 {
		n += 1 + sovPartPrivEvents(uint64(m.PrivId))
	}
	l = len(m.Answer)
	if l > 0 {
		n += 1 + l + sovPartPrivEvents(uint64(l))
	}
	return n
}

func sovPartPrivEvents(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozPartPrivEvents(x uint64) (n int) {
	return sovPartPrivEvents(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *PartPrivEvents) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowPartPrivEvents
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
			return fmt.Errorf("proto: PartPrivEvents: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: PartPrivEvents: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPartPrivEvents
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
				return ErrInvalidLengthPartPrivEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPartPrivEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field PrivId", wireType)
			}
			m.PrivId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPartPrivEvents
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.PrivId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Answer", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPartPrivEvents
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
				return ErrInvalidLengthPartPrivEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPartPrivEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Answer = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipPartPrivEvents(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthPartPrivEvents
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
func skipPartPrivEvents(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowPartPrivEvents
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
					return 0, ErrIntOverflowPartPrivEvents
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
					return 0, ErrIntOverflowPartPrivEvents
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
				return 0, ErrInvalidLengthPartPrivEvents
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupPartPrivEvents
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthPartPrivEvents
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthPartPrivEvents        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowPartPrivEvents          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupPartPrivEvents = fmt.Errorf("proto: unexpected end of group")
)