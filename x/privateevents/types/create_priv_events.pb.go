// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: privateevents/create_priv_events.proto

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

type CreatePrivEvents struct {
	Creator  string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Id       uint64 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`
	PrivId   string `protobuf:"bytes,3,opt,name=privId,proto3" json:"privId,omitempty"`
	Question string `protobuf:"bytes,4,opt,name=question,proto3" json:"question,omitempty"`
	Answers  string `protobuf:"bytes,5,opt,name=answers,proto3" json:"answers,omitempty"`
	Winner   string `protobuf:"bytes,6,opt,name=winner,proto3" json:"winner,omitempty"`
	Loser    string `protobuf:"bytes,7,opt,name=loser,proto3" json:"loser,omitempty"`
}

func (m *CreatePrivEvents) Reset()         { *m = CreatePrivEvents{} }
func (m *CreatePrivEvents) String() string { return proto.CompactTextString(m) }
func (*CreatePrivEvents) ProtoMessage()    {}
func (*CreatePrivEvents) Descriptor() ([]byte, []int) {
	return fileDescriptor_32dc0749225a2703, []int{0}
}
func (m *CreatePrivEvents) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *CreatePrivEvents) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_CreatePrivEvents.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *CreatePrivEvents) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreatePrivEvents.Merge(m, src)
}
func (m *CreatePrivEvents) XXX_Size() int {
	return m.Size()
}
func (m *CreatePrivEvents) XXX_DiscardUnknown() {
	xxx_messageInfo_CreatePrivEvents.DiscardUnknown(m)
}

var xxx_messageInfo_CreatePrivEvents proto.InternalMessageInfo

func (m *CreatePrivEvents) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *CreatePrivEvents) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *CreatePrivEvents) GetPrivId() string {
	if m != nil {
		return m.PrivId
	}
	return ""
}

func (m *CreatePrivEvents) GetQuestion() string {
	if m != nil {
		return m.Question
	}
	return ""
}

func (m *CreatePrivEvents) GetAnswers() string {
	if m != nil {
		return m.Answers
	}
	return ""
}

func (m *CreatePrivEvents) GetWinner() string {
	if m != nil {
		return m.Winner
	}
	return ""
}

func (m *CreatePrivEvents) GetLoser() string {
	if m != nil {
		return m.Loser
	}
	return ""
}

func init() {
	proto.RegisterType((*CreatePrivEvents)(nil), "VoroshilovMax.bettery.privateevents.CreatePrivEvents")
}

func init() {
	proto.RegisterFile("privateevents/create_priv_events.proto", fileDescriptor_32dc0749225a2703)
}

var fileDescriptor_32dc0749225a2703 = []byte{
	// 280 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x54, 0x90, 0xc1, 0x4a, 0xc3, 0x30,
	0x18, 0xc7, 0x9b, 0xba, 0x75, 0x9a, 0x83, 0x48, 0x18, 0x12, 0x76, 0x08, 0x43, 0x41, 0x76, 0x6a,
	0x0e, 0x82, 0x0f, 0xa0, 0x78, 0xf0, 0x20, 0x8c, 0x1d, 0x3c, 0x78, 0x19, 0xed, 0xfa, 0xd1, 0x05,
	0x66, 0xbf, 0x9a, 0x64, 0xdd, 0xf6, 0x16, 0x3e, 0x8e, 0x8f, 0xe0, 0x71, 0x47, 0x8f, 0xd2, 0xbe,
	0x88, 0x34, 0xa9, 0x42, 0x6f, 0xf9, 0x7d, 0xf9, 0x7f, 0xbf, 0x0f, 0xfe, 0xf4, 0xa6, 0xd4, 0xaa,
	0x4a, 0x2c, 0x40, 0x05, 0x85, 0x35, 0x72, 0xa5, 0x21, 0xb1, 0xb0, 0x6c, 0x87, 0x4b, 0x3f, 0x8a,
	0x4b, 0x8d, 0x16, 0xd9, 0xf5, 0x0b, 0x6a, 0x34, 0x6b, 0xb5, 0xc1, 0xea, 0x39, 0xd9, 0xc7, 0x29,
	0x58, 0x0b, 0xfa, 0x10, 0xf7, 0xb6, 0x27, 0xe3, 0x1c, 0x73, 0x74, 0x79, 0xd9, 0xbe, 0xfc, 0xea,
	0xd5, 0x27, 0xa1, 0x17, 0x0f, 0xce, 0x3b, 0xd7, 0xaa, 0x7a, 0x74, 0x51, 0xc6, 0xe9, 0xc8, 0xdd,
	0x42, 0xcd, 0xc9, 0x94, 0xcc, 0xce, 0x16, 0x7f, 0xc8, 0xce, 0x69, 0xa8, 0x32, 0x1e, 0x4e, 0xc9,
	0x6c, 0xb0, 0x08, 0x55, 0xc6, 0x2e, 0x69, 0xd4, 0x5e, 0x79, 0xca, 0xf8, 0x89, 0x0b, 0x76, 0xc4,
	0x26, 0xf4, 0xf4, 0x7d, 0x0b, 0xc6, 0x2a, 0x2c, 0xf8, 0xc0, 0xfd, 0xfc, 0x73, 0x6b, 0x4f, 0x0a,
	0xb3, 0x03, 0x6d, 0xf8, 0xd0, 0xdb, 0x3b, 0x6c, 0x6d, 0x3b, 0x55, 0x14, 0xa0, 0x79, 0xe4, 0x6d,
	0x9e, 0xd8, 0x98, 0x0e, 0x37, 0x68, 0x40, 0xf3, 0x91, 0x1b, 0x7b, 0xb8, 0x9f, 0x7f, 0xd5, 0x82,
	0x1c, 0x6b, 0x41, 0x7e, 0x6a, 0x41, 0x3e, 0x1a, 0x11, 0x1c, 0x1b, 0x11, 0x7c, 0x37, 0x22, 0x78,
	0xbd, 0xcb, 0x95, 0x5d, 0x6f, 0xd3, 0x78, 0x85, 0x6f, 0xb2, 0x57, 0x8d, 0xec, 0xaa, 0x91, 0x7b,
	0xd9, 0xaf, 0xd6, 0x1e, 0x4a, 0x30, 0x69, 0xe4, 0x3a, 0xb9, 0xfd, 0x0d, 0x00, 0x00, 0xff, 0xff,
	0x09, 0xb3, 0xa2, 0x60, 0x78, 0x01, 0x00, 0x00,
}

func (m *CreatePrivEvents) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *CreatePrivEvents) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *CreatePrivEvents) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Loser) > 0 {
		i -= len(m.Loser)
		copy(dAtA[i:], m.Loser)
		i = encodeVarintCreatePrivEvents(dAtA, i, uint64(len(m.Loser)))
		i--
		dAtA[i] = 0x3a
	}
	if len(m.Winner) > 0 {
		i -= len(m.Winner)
		copy(dAtA[i:], m.Winner)
		i = encodeVarintCreatePrivEvents(dAtA, i, uint64(len(m.Winner)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.Answers) > 0 {
		i -= len(m.Answers)
		copy(dAtA[i:], m.Answers)
		i = encodeVarintCreatePrivEvents(dAtA, i, uint64(len(m.Answers)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.Question) > 0 {
		i -= len(m.Question)
		copy(dAtA[i:], m.Question)
		i = encodeVarintCreatePrivEvents(dAtA, i, uint64(len(m.Question)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.PrivId) > 0 {
		i -= len(m.PrivId)
		copy(dAtA[i:], m.PrivId)
		i = encodeVarintCreatePrivEvents(dAtA, i, uint64(len(m.PrivId)))
		i--
		dAtA[i] = 0x1a
	}
	if m.Id != 0 {
		i = encodeVarintCreatePrivEvents(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintCreatePrivEvents(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintCreatePrivEvents(dAtA []byte, offset int, v uint64) int {
	offset -= sovCreatePrivEvents(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *CreatePrivEvents) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovCreatePrivEvents(uint64(l))
	}
	if m.Id != 0 {
		n += 1 + sovCreatePrivEvents(uint64(m.Id))
	}
	l = len(m.PrivId)
	if l > 0 {
		n += 1 + l + sovCreatePrivEvents(uint64(l))
	}
	l = len(m.Question)
	if l > 0 {
		n += 1 + l + sovCreatePrivEvents(uint64(l))
	}
	l = len(m.Answers)
	if l > 0 {
		n += 1 + l + sovCreatePrivEvents(uint64(l))
	}
	l = len(m.Winner)
	if l > 0 {
		n += 1 + l + sovCreatePrivEvents(uint64(l))
	}
	l = len(m.Loser)
	if l > 0 {
		n += 1 + l + sovCreatePrivEvents(uint64(l))
	}
	return n
}

func sovCreatePrivEvents(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozCreatePrivEvents(x uint64) (n int) {
	return sovCreatePrivEvents(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *CreatePrivEvents) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCreatePrivEvents
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
			return fmt.Errorf("proto: CreatePrivEvents: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: CreatePrivEvents: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCreatePrivEvents
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
				return ErrInvalidLengthCreatePrivEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCreatePrivEvents
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
					return ErrIntOverflowCreatePrivEvents
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
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PrivId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCreatePrivEvents
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
				return ErrInvalidLengthCreatePrivEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCreatePrivEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PrivId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Question", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCreatePrivEvents
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
				return ErrInvalidLengthCreatePrivEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCreatePrivEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Question = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Answers", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCreatePrivEvents
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
				return ErrInvalidLengthCreatePrivEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCreatePrivEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Answers = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Winner", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCreatePrivEvents
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
				return ErrInvalidLengthCreatePrivEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCreatePrivEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Winner = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Loser", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCreatePrivEvents
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
				return ErrInvalidLengthCreatePrivEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCreatePrivEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Loser = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipCreatePrivEvents(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthCreatePrivEvents
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
func skipCreatePrivEvents(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowCreatePrivEvents
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
					return 0, ErrIntOverflowCreatePrivEvents
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
					return 0, ErrIntOverflowCreatePrivEvents
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
				return 0, ErrInvalidLengthCreatePrivEvents
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupCreatePrivEvents
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthCreatePrivEvents
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthCreatePrivEvents        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowCreatePrivEvents          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupCreatePrivEvents = fmt.Errorf("proto: unexpected end of group")
)
