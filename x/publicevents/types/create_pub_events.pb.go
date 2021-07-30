// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: publicevents/create_pub_events.proto

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

type CreatePubEvents struct {
	Creator      string   `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	PubId        uint64   `protobuf:"varint,2,opt,name=pubId,proto3" json:"pubId,omitempty"`
	Question     string   `protobuf:"bytes,3,opt,name=question,proto3" json:"question,omitempty"`
	Answers      []string `protobuf:"bytes,4,rep,name=answers,proto3" json:"answers,omitempty"`
	PremAmount   int64    `protobuf:"varint,5,opt,name=premAmount,proto3" json:"premAmount,omitempty"`
	StartTime    int64    `protobuf:"varint,6,opt,name=startTime,proto3" json:"startTime,omitempty"`
	EndTime      int64    `protobuf:"varint,7,opt,name=endTime,proto3" json:"endTime,omitempty"`
	ExpertAmount int64    `protobuf:"varint,8,opt,name=expertAmount,proto3" json:"expertAmount,omitempty"`
}

func (m *CreatePubEvents) Reset()         { *m = CreatePubEvents{} }
func (m *CreatePubEvents) String() string { return proto.CompactTextString(m) }
func (*CreatePubEvents) ProtoMessage()    {}
func (*CreatePubEvents) Descriptor() ([]byte, []int) {
	return fileDescriptor_a4ce253d2b8ea893, []int{0}
}
func (m *CreatePubEvents) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *CreatePubEvents) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_CreatePubEvents.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *CreatePubEvents) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreatePubEvents.Merge(m, src)
}
func (m *CreatePubEvents) XXX_Size() int {
	return m.Size()
}
func (m *CreatePubEvents) XXX_DiscardUnknown() {
	xxx_messageInfo_CreatePubEvents.DiscardUnknown(m)
}

var xxx_messageInfo_CreatePubEvents proto.InternalMessageInfo

func (m *CreatePubEvents) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *CreatePubEvents) GetPubId() uint64 {
	if m != nil {
		return m.PubId
	}
	return 0
}

func (m *CreatePubEvents) GetQuestion() string {
	if m != nil {
		return m.Question
	}
	return ""
}

func (m *CreatePubEvents) GetAnswers() []string {
	if m != nil {
		return m.Answers
	}
	return nil
}

func (m *CreatePubEvents) GetPremAmount() int64 {
	if m != nil {
		return m.PremAmount
	}
	return 0
}

func (m *CreatePubEvents) GetStartTime() int64 {
	if m != nil {
		return m.StartTime
	}
	return 0
}

func (m *CreatePubEvents) GetEndTime() int64 {
	if m != nil {
		return m.EndTime
	}
	return 0
}

func (m *CreatePubEvents) GetExpertAmount() int64 {
	if m != nil {
		return m.ExpertAmount
	}
	return 0
}

func init() {
	proto.RegisterType((*CreatePubEvents)(nil), "VoroshilovMax.bettery.publicevents.CreatePubEvents")
}

func init() {
	proto.RegisterFile("publicevents/create_pub_events.proto", fileDescriptor_a4ce253d2b8ea893)
}

var fileDescriptor_a4ce253d2b8ea893 = []byte{
	// 305 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x54, 0x91, 0x4f, 0x4a, 0x03, 0x31,
	0x18, 0xc5, 0x1b, 0xfb, 0x3f, 0x08, 0x42, 0xe8, 0x22, 0x14, 0x09, 0x43, 0x71, 0xd1, 0xd5, 0x64,
	0x21, 0x1e, 0x40, 0xc5, 0x85, 0x0b, 0x51, 0x8a, 0xb8, 0x70, 0x53, 0x26, 0xed, 0x47, 0x3b, 0xd0,
	0x99, 0xc4, 0xe4, 0x4b, 0x6d, 0x6f, 0xe1, 0xb1, 0x5c, 0x76, 0xe9, 0x52, 0xda, 0x23, 0x78, 0x01,
	0x99, 0x74, 0xaa, 0x9d, 0xdd, 0xbc, 0xf7, 0xbe, 0xf7, 0x1b, 0x78, 0xa1, 0x17, 0xc6, 0xab, 0x45,
	0x3a, 0x81, 0x25, 0xe4, 0xe8, 0xe4, 0xc4, 0x42, 0x82, 0x30, 0x36, 0x5e, 0x8d, 0xf7, 0x4e, 0x6c,
	0xac, 0x46, 0xcd, 0x06, 0x2f, 0xda, 0x6a, 0x37, 0x4f, 0x17, 0x7a, 0xf9, 0x90, 0xac, 0x62, 0x05,
	0x88, 0x60, 0xd7, 0xf1, 0x71, 0xb7, 0xdf, 0x9b, 0xe9, 0x99, 0x0e, 0xe7, 0xb2, 0xf8, 0xda, 0x37,
	0x07, 0x3f, 0x84, 0x9e, 0xdd, 0x06, 0xea, 0x93, 0x57, 0x77, 0xe1, 0x92, 0x71, 0xda, 0x0e, 0x3f,
	0xd2, 0x96, 0x93, 0x88, 0x0c, 0xbb, 0xa3, 0x83, 0x64, 0x3d, 0xda, 0x34, 0x5e, 0xdd, 0x4f, 0xf9,
	0x49, 0x44, 0x86, 0x8d, 0xd1, 0x5e, 0xb0, 0x3e, 0xed, 0xbc, 0x79, 0x70, 0x98, 0xea, 0x9c, 0xd7,
	0x43, 0xe1, 0x4f, 0x17, 0xac, 0x24, 0x77, 0xef, 0x60, 0x1d, 0x6f, 0x44, 0xf5, 0x82, 0x55, 0x4a,
	0x26, 0x28, 0x35, 0x16, 0xb2, 0xeb, 0x4c, 0xfb, 0x1c, 0x79, 0x33, 0x22, 0xc3, 0xfa, 0xe8, 0xc8,
	0x61, 0xe7, 0xb4, 0xeb, 0x30, 0xb1, 0xf8, 0x9c, 0x66, 0xc0, 0x5b, 0x21, 0xfe, 0x37, 0x0a, 0x2e,
	0xe4, 0xd3, 0x90, 0xb5, 0x43, 0x76, 0x90, 0x6c, 0x40, 0x4f, 0x61, 0x65, 0xc0, 0x62, 0x49, 0xee,
	0x84, 0xb8, 0xe2, 0xdd, 0x3c, 0x7e, 0x6e, 0x05, 0xd9, 0x6c, 0x05, 0xf9, 0xde, 0x0a, 0xf2, 0xb1,
	0x13, 0xb5, 0xcd, 0x4e, 0xd4, 0xbe, 0x76, 0xa2, 0xf6, 0x7a, 0x35, 0x4b, 0x71, 0xee, 0x55, 0x3c,
	0xd1, 0x99, 0xac, 0x8c, 0x2a, 0xcb, 0x51, 0xe5, 0x4a, 0x56, 0x9e, 0x04, 0xd7, 0x06, 0x9c, 0x6a,
	0x85, 0x35, 0x2f, 0x7f, 0x03, 0x00, 0x00, 0xff, 0xff, 0x8f, 0x6b, 0x3e, 0x85, 0xaf, 0x01, 0x00,
	0x00,
}

func (m *CreatePubEvents) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *CreatePubEvents) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *CreatePubEvents) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.ExpertAmount != 0 {
		i = encodeVarintCreatePubEvents(dAtA, i, uint64(m.ExpertAmount))
		i--
		dAtA[i] = 0x40
	}
	if m.EndTime != 0 {
		i = encodeVarintCreatePubEvents(dAtA, i, uint64(m.EndTime))
		i--
		dAtA[i] = 0x38
	}
	if m.StartTime != 0 {
		i = encodeVarintCreatePubEvents(dAtA, i, uint64(m.StartTime))
		i--
		dAtA[i] = 0x30
	}
	if m.PremAmount != 0 {
		i = encodeVarintCreatePubEvents(dAtA, i, uint64(m.PremAmount))
		i--
		dAtA[i] = 0x28
	}
	if len(m.Answers) > 0 {
		for iNdEx := len(m.Answers) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.Answers[iNdEx])
			copy(dAtA[i:], m.Answers[iNdEx])
			i = encodeVarintCreatePubEvents(dAtA, i, uint64(len(m.Answers[iNdEx])))
			i--
			dAtA[i] = 0x22
		}
	}
	if len(m.Question) > 0 {
		i -= len(m.Question)
		copy(dAtA[i:], m.Question)
		i = encodeVarintCreatePubEvents(dAtA, i, uint64(len(m.Question)))
		i--
		dAtA[i] = 0x1a
	}
	if m.PubId != 0 {
		i = encodeVarintCreatePubEvents(dAtA, i, uint64(m.PubId))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintCreatePubEvents(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintCreatePubEvents(dAtA []byte, offset int, v uint64) int {
	offset -= sovCreatePubEvents(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *CreatePubEvents) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovCreatePubEvents(uint64(l))
	}
	if m.PubId != 0 {
		n += 1 + sovCreatePubEvents(uint64(m.PubId))
	}
	l = len(m.Question)
	if l > 0 {
		n += 1 + l + sovCreatePubEvents(uint64(l))
	}
	if len(m.Answers) > 0 {
		for _, s := range m.Answers {
			l = len(s)
			n += 1 + l + sovCreatePubEvents(uint64(l))
		}
	}
	if m.PremAmount != 0 {
		n += 1 + sovCreatePubEvents(uint64(m.PremAmount))
	}
	if m.StartTime != 0 {
		n += 1 + sovCreatePubEvents(uint64(m.StartTime))
	}
	if m.EndTime != 0 {
		n += 1 + sovCreatePubEvents(uint64(m.EndTime))
	}
	if m.ExpertAmount != 0 {
		n += 1 + sovCreatePubEvents(uint64(m.ExpertAmount))
	}
	return n
}

func sovCreatePubEvents(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozCreatePubEvents(x uint64) (n int) {
	return sovCreatePubEvents(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *CreatePubEvents) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCreatePubEvents
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
			return fmt.Errorf("proto: CreatePubEvents: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: CreatePubEvents: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCreatePubEvents
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
				return ErrInvalidLengthCreatePubEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCreatePubEvents
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
					return ErrIntOverflowCreatePubEvents
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
				return fmt.Errorf("proto: wrong wireType = %d for field Question", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCreatePubEvents
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
				return ErrInvalidLengthCreatePubEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCreatePubEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Question = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Answers", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCreatePubEvents
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
				return ErrInvalidLengthCreatePubEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCreatePubEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Answers = append(m.Answers, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field PremAmount", wireType)
			}
			m.PremAmount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCreatePubEvents
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.PremAmount |= int64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 6:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field StartTime", wireType)
			}
			m.StartTime = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCreatePubEvents
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.StartTime |= int64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 7:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field EndTime", wireType)
			}
			m.EndTime = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCreatePubEvents
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.EndTime |= int64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 8:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ExpertAmount", wireType)
			}
			m.ExpertAmount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCreatePubEvents
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.ExpertAmount |= int64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipCreatePubEvents(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthCreatePubEvents
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
func skipCreatePubEvents(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowCreatePubEvents
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
					return 0, ErrIntOverflowCreatePubEvents
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
					return 0, ErrIntOverflowCreatePubEvents
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
				return 0, ErrInvalidLengthCreatePubEvents
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupCreatePubEvents
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthCreatePubEvents
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthCreatePubEvents        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowCreatePubEvents          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupCreatePubEvents = fmt.Errorf("proto: unexpected end of group")
)
