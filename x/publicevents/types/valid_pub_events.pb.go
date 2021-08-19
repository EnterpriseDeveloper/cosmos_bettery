// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: publicevents/valid_pub_events.proto

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

type ValidPubEvents struct {
	Creator     string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Id          uint64 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`
	PubId       uint64 `protobuf:"varint,3,opt,name=pubId,proto3" json:"pubId,omitempty"`
	Answers     string `protobuf:"bytes,4,opt,name=answers,proto3" json:"answers,omitempty"`
	Reput       int64  `protobuf:"varint,5,opt,name=reput,proto3" json:"reput,omitempty"`
	AnswerIndex uint32 `protobuf:"varint,6,opt,name=answerIndex,proto3" json:"answerIndex,omitempty"`
}

func (m *ValidPubEvents) Reset()         { *m = ValidPubEvents{} }
func (m *ValidPubEvents) String() string { return proto.CompactTextString(m) }
func (*ValidPubEvents) ProtoMessage()    {}
func (*ValidPubEvents) Descriptor() ([]byte, []int) {
	return fileDescriptor_b2f15ffd67c4b2fb, []int{0}
}
func (m *ValidPubEvents) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ValidPubEvents) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ValidPubEvents.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ValidPubEvents) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ValidPubEvents.Merge(m, src)
}
func (m *ValidPubEvents) XXX_Size() int {
	return m.Size()
}
func (m *ValidPubEvents) XXX_DiscardUnknown() {
	xxx_messageInfo_ValidPubEvents.DiscardUnknown(m)
}

var xxx_messageInfo_ValidPubEvents proto.InternalMessageInfo

func (m *ValidPubEvents) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *ValidPubEvents) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *ValidPubEvents) GetPubId() uint64 {
	if m != nil {
		return m.PubId
	}
	return 0
}

func (m *ValidPubEvents) GetAnswers() string {
	if m != nil {
		return m.Answers
	}
	return ""
}

func (m *ValidPubEvents) GetReput() int64 {
	if m != nil {
		return m.Reput
	}
	return 0
}

func (m *ValidPubEvents) GetAnswerIndex() uint32 {
	if m != nil {
		return m.AnswerIndex
	}
	return 0
}

type AllValidPubEvent struct {
	Creator     string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	PrivId      uint64 `protobuf:"varint,2,opt,name=privId,proto3" json:"privId,omitempty"`
	Reput       int64  `protobuf:"varint,3,opt,name=reput,proto3" json:"reput,omitempty"`
	AnswerIndex uint32 `protobuf:"varint,4,opt,name=answerIndex,proto3" json:"answerIndex,omitempty"`
}

func (m *AllValidPubEvent) Reset()         { *m = AllValidPubEvent{} }
func (m *AllValidPubEvent) String() string { return proto.CompactTextString(m) }
func (*AllValidPubEvent) ProtoMessage()    {}
func (*AllValidPubEvent) Descriptor() ([]byte, []int) {
	return fileDescriptor_b2f15ffd67c4b2fb, []int{1}
}
func (m *AllValidPubEvent) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *AllValidPubEvent) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_AllValidPubEvent.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *AllValidPubEvent) XXX_Merge(src proto.Message) {
	xxx_messageInfo_AllValidPubEvent.Merge(m, src)
}
func (m *AllValidPubEvent) XXX_Size() int {
	return m.Size()
}
func (m *AllValidPubEvent) XXX_DiscardUnknown() {
	xxx_messageInfo_AllValidPubEvent.DiscardUnknown(m)
}

var xxx_messageInfo_AllValidPubEvent proto.InternalMessageInfo

func (m *AllValidPubEvent) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *AllValidPubEvent) GetPrivId() uint64 {
	if m != nil {
		return m.PrivId
	}
	return 0
}

func (m *AllValidPubEvent) GetReput() int64 {
	if m != nil {
		return m.Reput
	}
	return 0
}

func (m *AllValidPubEvent) GetAnswerIndex() uint32 {
	if m != nil {
		return m.AnswerIndex
	}
	return 0
}

func init() {
	proto.RegisterType((*ValidPubEvents)(nil), "VoroshilovMax.bettery.publicevents.ValidPubEvents")
	proto.RegisterType((*AllValidPubEvent)(nil), "VoroshilovMax.bettery.publicevents.allValidPubEvent")
}

func init() {
	proto.RegisterFile("publicevents/valid_pub_events.proto", fileDescriptor_b2f15ffd67c4b2fb)
}

var fileDescriptor_b2f15ffd67c4b2fb = []byte{
	// 305 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x51, 0xbf, 0x6a, 0xf3, 0x30,
	0x1c, 0x8c, 0xf2, 0xef, 0xe3, 0x53, 0x69, 0x28, 0x26, 0x14, 0xd1, 0x41, 0x98, 0x74, 0xf1, 0x64,
	0x0d, 0xa5, 0x2f, 0x50, 0xe8, 0xe0, 0xa1, 0xb4, 0x78, 0xc8, 0xd0, 0x25, 0x58, 0xb6, 0x70, 0x04,
	0xae, 0x25, 0x64, 0xc9, 0x75, 0xa0, 0x0f, 0xd1, 0x67, 0xe8, 0xd3, 0x74, 0xcc, 0xd8, 0xb1, 0xd8,
	0x2f, 0x52, 0x6c, 0x39, 0x34, 0xa6, 0x90, 0x4d, 0x77, 0xdc, 0xe9, 0x8e, 0xdf, 0xc1, 0x6b, 0x69,
	0x68, 0xc6, 0x63, 0x56, 0xb2, 0x5c, 0x17, 0xa4, 0x8c, 0x32, 0x9e, 0x6c, 0xa4, 0xa1, 0x1b, 0x4b,
	0xf8, 0x52, 0x09, 0x2d, 0x9c, 0xd5, 0x5a, 0x28, 0x51, 0x6c, 0x79, 0x26, 0xca, 0x87, 0xa8, 0xf2,
	0x29, 0xd3, 0x9a, 0xa9, 0x9d, 0x7f, 0x6c, 0xbd, 0x5a, 0xa6, 0x22, 0x15, 0x9d, 0x9c, 0xb4, 0x2f,
	0xeb, 0x5c, 0x7d, 0x00, 0xb8, 0x58, 0xb7, 0x9f, 0x3e, 0x19, 0x7a, 0xdf, 0x09, 0x1d, 0x04, 0xff,
	0xc5, 0x8a, 0x45, 0x5a, 0x28, 0x04, 0x5c, 0xe0, 0xfd, 0x0f, 0x0f, 0xd0, 0x59, 0xc0, 0x31, 0x4f,
	0xd0, 0xd8, 0x05, 0xde, 0x34, 0x1c, 0xf3, 0xc4, 0x59, 0xc2, 0x99, 0x34, 0x34, 0x48, 0xd0, 0xa4,
	0xa3, 0x2c, 0x68, 0xfd, 0x51, 0x5e, 0xbc, 0x32, 0x55, 0xa0, 0xa9, 0xf5, 0xf7, 0xb0, 0xd5, 0x2b,
	0x26, 0x8d, 0x46, 0x33, 0x17, 0x78, 0x93, 0xd0, 0x02, 0xc7, 0x85, 0x67, 0x56, 0x10, 0xe4, 0x09,
	0xab, 0xd0, 0xdc, 0x05, 0xde, 0x79, 0x78, 0x4c, 0xad, 0xde, 0xe0, 0x45, 0x94, 0x65, 0x83, 0x9a,
	0x27, 0x5a, 0x5e, 0xc2, 0xb9, 0x54, 0xbc, 0x0c, 0x0e, 0x4d, 0x7b, 0xf4, 0x9b, 0x3e, 0x39, 0x91,
	0x3e, 0xfd, 0x93, 0x7e, 0xf7, 0xf8, 0x59, 0x63, 0xb0, 0xaf, 0x31, 0xf8, 0xae, 0x31, 0x78, 0x6f,
	0xf0, 0x68, 0xdf, 0xe0, 0xd1, 0x57, 0x83, 0x47, 0xcf, 0xb7, 0x29, 0xd7, 0x5b, 0x43, 0xfd, 0x58,
	0xbc, 0x90, 0xc1, 0x02, 0xa4, 0x5f, 0x80, 0x54, 0x64, 0x30, 0x9f, 0xde, 0x49, 0x56, 0xd0, 0x79,
	0x77, 0xfa, 0x9b, 0x9f, 0x00, 0x00, 0x00, 0xff, 0xff, 0xdf, 0xcc, 0x60, 0x92, 0xdb, 0x01, 0x00,
	0x00,
}

func (m *ValidPubEvents) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ValidPubEvents) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ValidPubEvents) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.AnswerIndex != 0 {
		i = encodeVarintValidPubEvents(dAtA, i, uint64(m.AnswerIndex))
		i--
		dAtA[i] = 0x30
	}
	if m.Reput != 0 {
		i = encodeVarintValidPubEvents(dAtA, i, uint64(m.Reput))
		i--
		dAtA[i] = 0x28
	}
	if len(m.Answers) > 0 {
		i -= len(m.Answers)
		copy(dAtA[i:], m.Answers)
		i = encodeVarintValidPubEvents(dAtA, i, uint64(len(m.Answers)))
		i--
		dAtA[i] = 0x22
	}
	if m.PubId != 0 {
		i = encodeVarintValidPubEvents(dAtA, i, uint64(m.PubId))
		i--
		dAtA[i] = 0x18
	}
	if m.Id != 0 {
		i = encodeVarintValidPubEvents(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintValidPubEvents(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *AllValidPubEvent) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *AllValidPubEvent) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *AllValidPubEvent) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.AnswerIndex != 0 {
		i = encodeVarintValidPubEvents(dAtA, i, uint64(m.AnswerIndex))
		i--
		dAtA[i] = 0x20
	}
	if m.Reput != 0 {
		i = encodeVarintValidPubEvents(dAtA, i, uint64(m.Reput))
		i--
		dAtA[i] = 0x18
	}
	if m.PrivId != 0 {
		i = encodeVarintValidPubEvents(dAtA, i, uint64(m.PrivId))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintValidPubEvents(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintValidPubEvents(dAtA []byte, offset int, v uint64) int {
	offset -= sovValidPubEvents(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *ValidPubEvents) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovValidPubEvents(uint64(l))
	}
	if m.Id != 0 {
		n += 1 + sovValidPubEvents(uint64(m.Id))
	}
	if m.PubId != 0 {
		n += 1 + sovValidPubEvents(uint64(m.PubId))
	}
	l = len(m.Answers)
	if l > 0 {
		n += 1 + l + sovValidPubEvents(uint64(l))
	}
	if m.Reput != 0 {
		n += 1 + sovValidPubEvents(uint64(m.Reput))
	}
	if m.AnswerIndex != 0 {
		n += 1 + sovValidPubEvents(uint64(m.AnswerIndex))
	}
	return n
}

func (m *AllValidPubEvent) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovValidPubEvents(uint64(l))
	}
	if m.PrivId != 0 {
		n += 1 + sovValidPubEvents(uint64(m.PrivId))
	}
	if m.Reput != 0 {
		n += 1 + sovValidPubEvents(uint64(m.Reput))
	}
	if m.AnswerIndex != 0 {
		n += 1 + sovValidPubEvents(uint64(m.AnswerIndex))
	}
	return n
}

func sovValidPubEvents(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozValidPubEvents(x uint64) (n int) {
	return sovValidPubEvents(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *ValidPubEvents) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowValidPubEvents
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
			return fmt.Errorf("proto: ValidPubEvents: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ValidPubEvents: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowValidPubEvents
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
				return ErrInvalidLengthValidPubEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthValidPubEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowValidPubEvents
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
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field PubId", wireType)
			}
			m.PubId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowValidPubEvents
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
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Answers", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowValidPubEvents
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
				return ErrInvalidLengthValidPubEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthValidPubEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Answers = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Reput", wireType)
			}
			m.Reput = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowValidPubEvents
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Reput |= int64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 6:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field AnswerIndex", wireType)
			}
			m.AnswerIndex = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowValidPubEvents
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.AnswerIndex |= uint32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipValidPubEvents(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthValidPubEvents
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
func (m *AllValidPubEvent) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowValidPubEvents
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
			return fmt.Errorf("proto: allValidPubEvent: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: allValidPubEvent: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowValidPubEvents
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
				return ErrInvalidLengthValidPubEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthValidPubEvents
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
					return ErrIntOverflowValidPubEvents
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
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Reput", wireType)
			}
			m.Reput = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowValidPubEvents
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Reput |= int64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field AnswerIndex", wireType)
			}
			m.AnswerIndex = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowValidPubEvents
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.AnswerIndex |= uint32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipValidPubEvents(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthValidPubEvents
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
func skipValidPubEvents(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowValidPubEvents
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
					return 0, ErrIntOverflowValidPubEvents
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
					return 0, ErrIntOverflowValidPubEvents
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
				return 0, ErrInvalidLengthValidPubEvents
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupValidPubEvents
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthValidPubEvents
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthValidPubEvents        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowValidPubEvents          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupValidPubEvents = fmt.Errorf("proto: unexpected end of group")
)
