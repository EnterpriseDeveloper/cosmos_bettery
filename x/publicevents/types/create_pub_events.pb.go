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
	PremAmount   string   `protobuf:"bytes,5,opt,name=premAmount,proto3" json:"premAmount,omitempty"`
	StartTime    int64    `protobuf:"varint,6,opt,name=startTime,proto3" json:"startTime,omitempty"`
	EndTime      int64    `protobuf:"varint,7,opt,name=endTime,proto3" json:"endTime,omitempty"`
	ExpertAmount int64    `protobuf:"varint,8,opt,name=expertAmount,proto3" json:"expertAmount,omitempty"`
	Advisor      string   `protobuf:"bytes,9,opt,name=advisor,proto3" json:"advisor,omitempty"`
	Finished     bool     `protobuf:"varint,10,opt,name=finished,proto3" json:"finished,omitempty"`
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

func (m *CreatePubEvents) GetPremAmount() string {
	if m != nil {
		return m.PremAmount
	}
	return ""
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

func (m *CreatePubEvents) GetAdvisor() string {
	if m != nil {
		return m.Advisor
	}
	return ""
}

func (m *CreatePubEvents) GetFinished() bool {
	if m != nil {
		return m.Finished
	}
	return false
}

func init() {
	proto.RegisterType((*CreatePubEvents)(nil), "VoroshilovMax.bettery.publicevents.CreatePubEvents")
}

func init() {
	proto.RegisterFile("publicevents/create_pub_events.proto", fileDescriptor_a4ce253d2b8ea893)
}

var fileDescriptor_a4ce253d2b8ea893 = []byte{
	// 333 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x54, 0x91, 0xcd, 0x4a, 0xfb, 0x40,
	0x14, 0xc5, 0x3b, 0xfd, 0xee, 0xf0, 0x87, 0x3f, 0x0c, 0x5d, 0x0c, 0x45, 0x86, 0x50, 0x5c, 0x64,
	0x95, 0x2c, 0xc4, 0x07, 0x50, 0x71, 0xe1, 0x42, 0x94, 0x20, 0x2e, 0xdc, 0x94, 0x4c, 0x73, 0x6d,
	0x07, 0x9a, 0xcc, 0x38, 0x1f, 0xb5, 0x7d, 0x0b, 0x5f, 0xc3, 0x37, 0x71, 0xd9, 0xa5, 0x4b, 0x69,
	0x5f, 0x44, 0x32, 0x49, 0x6b, 0xbb, 0xcb, 0xef, 0xdc, 0x7b, 0x4e, 0xe6, 0x72, 0xf0, 0xb9, 0x72,
	0x7c, 0x21, 0xa6, 0xb0, 0x84, 0xc2, 0x9a, 0x78, 0xaa, 0x21, 0xb5, 0x30, 0x51, 0x8e, 0x4f, 0x2a,
	0x25, 0x52, 0x5a, 0x5a, 0x49, 0xc6, 0xcf, 0x52, 0x4b, 0x33, 0x17, 0x0b, 0xb9, 0xbc, 0x4f, 0x57,
	0x11, 0x07, 0x6b, 0x41, 0xaf, 0xa3, 0x63, 0xef, 0x68, 0x38, 0x93, 0x33, 0xe9, 0xd7, 0xe3, 0xf2,
	0xab, 0x72, 0x8e, 0x3f, 0x9b, 0xf8, 0xff, 0x8d, 0x4f, 0x7d, 0x74, 0xfc, 0xd6, 0x6f, 0x12, 0x8a,
	0x7b, 0xfe, 0x47, 0x52, 0x53, 0x14, 0xa0, 0x70, 0x90, 0xec, 0x91, 0x0c, 0x71, 0x47, 0x39, 0x7e,
	0x97, 0xd1, 0x66, 0x80, 0xc2, 0x76, 0x52, 0x01, 0x19, 0xe1, 0xfe, 0x9b, 0x03, 0x63, 0x85, 0x2c,
	0x68, 0xcb, 0x1b, 0x0e, 0x5c, 0x66, 0xa5, 0x85, 0x79, 0x07, 0x6d, 0x68, 0x3b, 0x68, 0x95, 0x59,
	0x35, 0x12, 0x86, 0xb1, 0xd2, 0x90, 0x5f, 0xe5, 0xd2, 0x15, 0x96, 0x76, 0xbc, 0xef, 0x48, 0x21,
	0x67, 0x78, 0x60, 0x6c, 0xaa, 0xed, 0x93, 0xc8, 0x81, 0x76, 0x03, 0x14, 0xb6, 0x92, 0x3f, 0xa1,
	0xcc, 0x85, 0x22, 0xf3, 0xb3, 0x9e, 0x9f, 0xed, 0x91, 0x8c, 0xf1, 0x3f, 0x58, 0x29, 0xd0, 0xb6,
	0x4e, 0xee, 0xfb, 0xf1, 0x89, 0xe6, 0x5f, 0x95, 0x2d, 0x85, 0x91, 0x9a, 0x0e, 0xaa, 0x0b, 0x6b,
	0x2c, 0x6f, 0x79, 0x15, 0x85, 0x30, 0x73, 0xc8, 0x28, 0x0e, 0x50, 0xd8, 0x4f, 0x0e, 0x7c, 0xfd,
	0xf0, 0xb5, 0x65, 0x68, 0xb3, 0x65, 0xe8, 0x67, 0xcb, 0xd0, 0xc7, 0x8e, 0x35, 0x36, 0x3b, 0xd6,
	0xf8, 0xde, 0xb1, 0xc6, 0xcb, 0xe5, 0x4c, 0xd8, 0xb9, 0xe3, 0xd1, 0x54, 0xe6, 0xf1, 0x49, 0x15,
	0x71, 0x5d, 0x45, 0xbc, 0x8a, 0x4f, 0x8a, 0xb4, 0x6b, 0x05, 0x86, 0x77, 0x7d, 0x07, 0x17, 0xbf,
	0x01, 0x00, 0x00, 0xff, 0xff, 0x72, 0x49, 0x50, 0x67, 0xe5, 0x01, 0x00, 0x00,
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
	if m.Finished {
		i--
		if m.Finished {
			dAtA[i] = 1
		} else {
			dAtA[i] = 0
		}
		i--
		dAtA[i] = 0x50
	}
	if len(m.Advisor) > 0 {
		i -= len(m.Advisor)
		copy(dAtA[i:], m.Advisor)
		i = encodeVarintCreatePubEvents(dAtA, i, uint64(len(m.Advisor)))
		i--
		dAtA[i] = 0x4a
	}
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
	if len(m.PremAmount) > 0 {
		i -= len(m.PremAmount)
		copy(dAtA[i:], m.PremAmount)
		i = encodeVarintCreatePubEvents(dAtA, i, uint64(len(m.PremAmount)))
		i--
		dAtA[i] = 0x2a
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
	l = len(m.PremAmount)
	if l > 0 {
		n += 1 + l + sovCreatePubEvents(uint64(l))
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
	l = len(m.Advisor)
	if l > 0 {
		n += 1 + l + sovCreatePubEvents(uint64(l))
	}
	if m.Finished {
		n += 2
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
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PremAmount", wireType)
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
			m.PremAmount = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
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
		case 9:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Advisor", wireType)
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
			m.Advisor = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 10:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Finished", wireType)
			}
			var v int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCreatePubEvents
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				v |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			m.Finished = bool(v != 0)
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
