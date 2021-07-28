// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: privateevents/valid_priv_events.proto

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

type ValidPrivEvents struct {
	Creator string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	PrivId  uint64 `protobuf:"varint,2,opt,name=privId,proto3" json:"privId,omitempty"`
	Answer  string `protobuf:"bytes,3,opt,name=answer,proto3" json:"answer,omitempty"`
}

func (m *ValidPrivEvents) Reset()         { *m = ValidPrivEvents{} }
func (m *ValidPrivEvents) String() string { return proto.CompactTextString(m) }
func (*ValidPrivEvents) ProtoMessage()    {}
func (*ValidPrivEvents) Descriptor() ([]byte, []int) {
	return fileDescriptor_8a70584f522dd3ec, []int{0}
}
func (m *ValidPrivEvents) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ValidPrivEvents) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ValidPrivEvents.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ValidPrivEvents) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ValidPrivEvents.Merge(m, src)
}
func (m *ValidPrivEvents) XXX_Size() int {
	return m.Size()
}
func (m *ValidPrivEvents) XXX_DiscardUnknown() {
	xxx_messageInfo_ValidPrivEvents.DiscardUnknown(m)
}

var xxx_messageInfo_ValidPrivEvents proto.InternalMessageInfo

func (m *ValidPrivEvents) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *ValidPrivEvents) GetPrivId() uint64 {
	if m != nil {
		return m.PrivId
	}
	return 0
}

func (m *ValidPrivEvents) GetAnswer() string {
	if m != nil {
		return m.Answer
	}
	return ""
}

type AllValidPrivEvent struct {
	Creator string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	PrivId  uint64 `protobuf:"varint,2,opt,name=privId,proto3" json:"privId,omitempty"`
}

func (m *AllValidPrivEvent) Reset()         { *m = AllValidPrivEvent{} }
func (m *AllValidPrivEvent) String() string { return proto.CompactTextString(m) }
func (*AllValidPrivEvent) ProtoMessage()    {}
func (*AllValidPrivEvent) Descriptor() ([]byte, []int) {
	return fileDescriptor_8a70584f522dd3ec, []int{1}
}
func (m *AllValidPrivEvent) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *AllValidPrivEvent) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_AllValidPrivEvent.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *AllValidPrivEvent) XXX_Merge(src proto.Message) {
	xxx_messageInfo_AllValidPrivEvent.Merge(m, src)
}
func (m *AllValidPrivEvent) XXX_Size() int {
	return m.Size()
}
func (m *AllValidPrivEvent) XXX_DiscardUnknown() {
	xxx_messageInfo_AllValidPrivEvent.DiscardUnknown(m)
}

var xxx_messageInfo_AllValidPrivEvent proto.InternalMessageInfo

func (m *AllValidPrivEvent) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *AllValidPrivEvent) GetPrivId() uint64 {
	if m != nil {
		return m.PrivId
	}
	return 0
}

func init() {
	proto.RegisterType((*ValidPrivEvents)(nil), "VoroshilovMax.bettery.privateevents.ValidPrivEvents")
	proto.RegisterType((*AllValidPrivEvent)(nil), "VoroshilovMax.bettery.privateevents.allValidPrivEvent")
}

func init() {
	proto.RegisterFile("privateevents/valid_priv_events.proto", fileDescriptor_8a70584f522dd3ec)
}

var fileDescriptor_8a70584f522dd3ec = []byte{
	// 234 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x52, 0x2d, 0x28, 0xca, 0x2c,
	0x4b, 0x2c, 0x49, 0x4d, 0x2d, 0x4b, 0xcd, 0x2b, 0x29, 0xd6, 0x2f, 0x4b, 0xcc, 0xc9, 0x4c, 0x89,
	0x07, 0x89, 0xc5, 0x43, 0x44, 0xf4, 0x0a, 0x8a, 0xf2, 0x4b, 0xf2, 0x85, 0x94, 0xc3, 0xf2, 0x8b,
	0xf2, 0x8b, 0x33, 0x32, 0x73, 0xf2, 0xcb, 0x7c, 0x13, 0x2b, 0xf4, 0x92, 0x52, 0x4b, 0x4a, 0x52,
	0x8b, 0x2a, 0xf5, 0x50, 0x34, 0x4b, 0x89, 0xa4, 0xe7, 0xa7, 0xe7, 0x83, 0xd5, 0xeb, 0x83, 0x58,
	0x10, 0xad, 0x4a, 0xd1, 0x5c, 0xfc, 0x61, 0x20, 0x53, 0x03, 0x8a, 0x32, 0xcb, 0x5c, 0xc1, 0x0a,
	0x85, 0x24, 0xb8, 0xd8, 0x93, 0x8b, 0x52, 0x13, 0x4b, 0xf2, 0x8b, 0x24, 0x18, 0x15, 0x18, 0x35,
	0x38, 0x83, 0x60, 0x5c, 0x21, 0x31, 0x2e, 0x36, 0x90, 0x99, 0x9e, 0x29, 0x12, 0x4c, 0x0a, 0x8c,
	0x1a, 0x2c, 0x41, 0x50, 0x1e, 0x48, 0x3c, 0x31, 0xaf, 0xb8, 0x3c, 0xb5, 0x48, 0x82, 0x19, 0xac,
	0x01, 0xca, 0x53, 0x72, 0xe5, 0x12, 0x4c, 0xcc, 0xc9, 0x41, 0x35, 0x9f, 0x74, 0xe3, 0x9d, 0x02,
	0x4e, 0x3c, 0x92, 0x63, 0xbc, 0xf0, 0x48, 0x8e, 0xf1, 0xc1, 0x23, 0x39, 0xc6, 0x09, 0x8f, 0xe5,
	0x18, 0x2e, 0x3c, 0x96, 0x63, 0xb8, 0xf1, 0x58, 0x8e, 0x21, 0xca, 0x2c, 0x3d, 0xb3, 0x24, 0xa3,
	0x34, 0x49, 0x2f, 0x39, 0x3f, 0x57, 0x1f, 0x25, 0x0c, 0xf4, 0xa1, 0x61, 0xa0, 0x5f, 0xa1, 0x8f,
	0x1a, 0x84, 0x25, 0x95, 0x05, 0xa9, 0xc5, 0x49, 0x6c, 0x60, 0xcf, 0x1b, 0x03, 0x02, 0x00, 0x00,
	0xff, 0xff, 0x71, 0xe1, 0x79, 0x6b, 0x60, 0x01, 0x00, 0x00,
}

func (m *ValidPrivEvents) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ValidPrivEvents) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ValidPrivEvents) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Answer) > 0 {
		i -= len(m.Answer)
		copy(dAtA[i:], m.Answer)
		i = encodeVarintValidPrivEvents(dAtA, i, uint64(len(m.Answer)))
		i--
		dAtA[i] = 0x1a
	}
	if m.PrivId != 0 {
		i = encodeVarintValidPrivEvents(dAtA, i, uint64(m.PrivId))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintValidPrivEvents(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *AllValidPrivEvent) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *AllValidPrivEvent) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *AllValidPrivEvent) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.PrivId != 0 {
		i = encodeVarintValidPrivEvents(dAtA, i, uint64(m.PrivId))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintValidPrivEvents(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintValidPrivEvents(dAtA []byte, offset int, v uint64) int {
	offset -= sovValidPrivEvents(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *ValidPrivEvents) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovValidPrivEvents(uint64(l))
	}
	if m.PrivId != 0 {
		n += 1 + sovValidPrivEvents(uint64(m.PrivId))
	}
	l = len(m.Answer)
	if l > 0 {
		n += 1 + l + sovValidPrivEvents(uint64(l))
	}
	return n
}

func (m *AllValidPrivEvent) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovValidPrivEvents(uint64(l))
	}
	if m.PrivId != 0 {
		n += 1 + sovValidPrivEvents(uint64(m.PrivId))
	}
	return n
}

func sovValidPrivEvents(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozValidPrivEvents(x uint64) (n int) {
	return sovValidPrivEvents(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *ValidPrivEvents) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowValidPrivEvents
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
			return fmt.Errorf("proto: ValidPrivEvents: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ValidPrivEvents: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowValidPrivEvents
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
				return ErrInvalidLengthValidPrivEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthValidPrivEvents
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
					return ErrIntOverflowValidPrivEvents
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
					return ErrIntOverflowValidPrivEvents
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
				return ErrInvalidLengthValidPrivEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthValidPrivEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Answer = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipValidPrivEvents(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthValidPrivEvents
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
func (m *AllValidPrivEvent) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowValidPrivEvents
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
			return fmt.Errorf("proto: allValidPrivEvent: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: allValidPrivEvent: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowValidPrivEvents
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
				return ErrInvalidLengthValidPrivEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthValidPrivEvents
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
					return ErrIntOverflowValidPrivEvents
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
		default:
			iNdEx = preIndex
			skippy, err := skipValidPrivEvents(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthValidPrivEvents
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
func skipValidPrivEvents(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowValidPrivEvents
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
					return 0, ErrIntOverflowValidPrivEvents
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
					return 0, ErrIntOverflowValidPrivEvents
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
				return 0, ErrInvalidLengthValidPrivEvents
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupValidPrivEvents
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthValidPrivEvents
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthValidPrivEvents        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowValidPrivEvents          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupValidPrivEvents = fmt.Errorf("proto: unexpected end of group")
)
